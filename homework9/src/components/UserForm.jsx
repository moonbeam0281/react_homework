import { useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "../App.css";

const STATES = ["Select…", "CA", "NY", "TX", "FL", "WA", "Other"];

const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
const minLen = (val, len) => (val || "").trim().length >= len;

export default function UserForm() {
    const [saved, setSaved] = useLocalStorage("user-form", {
        username: "",
        password: "",
        email: "",
        addressState: ""
    });

    const [form, setForm] = useState(saved);
    const [submitted, setSubmitted] = useState(null);
    const [touched, setTouched] = useState({});

    useEffect(() => setForm(saved), [saved]);

    const errors = useMemo(() => {
        const e = {};
        if (!minLen(form.username, 1)) e.username = "Username is required.";
        if (!minLen(form.password, 6)) e.password = "Password must be at least 6 characters.";
        if (!isEmail(form.email)) e.email = "Enter a valid email.";
        if (!form.addressState || form.addressState === "Select…") e.addressState = "Choose a state.";
        return e;
    }, [form]);

    const hasErrors = Object.keys(errors).length > 0;

    const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));
    const onBlur = (name) => setTouched((t) => ({ ...t, [name]: true }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ username: true, password: true, email: true, addressState: true });
        if (hasErrors) return;
        setSaved(form);
        setSubmitted(form);
    };

    const handleClear = () => {
        setSaved({ username: "", password: "", email: "", addressState: "" });
        setSubmitted(null);
    };

    return (
        <div className="card">
            <h2>Persisted User Form</h2>
            <p className="desc">
                This form persists to <code>localStorage</code>. Refresh to see it pre-populate.
            </p>

            <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={form.username}
                        onChange={(e) => setField("username", e.target.value)}
                        onBlur={() => onBlur("username")}
                        placeholder="username"
                    />
                    {touched.username && errors.username && (
                        <span id="username-err" className="error">{errors.username}</span>
                    )}
                </div>

                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setField("password", e.target.value)}
                        onBlur={() => onBlur("password")}
                        placeholder="at least 6 characters"
                        aria-invalid={!!errors.password}
                        aria-describedby="password-err"
                    />
                    {touched.password && errors.password && (
                        <span id="password-err" className="error">{errors.password}</span>
                    )}
                </div>

                <div className="row">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        onBlur={() => onBlur("email")}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby="email-err"
                    />
                    {touched.email && errors.email && (
                        <span id="email-err" className="error">{errors.email}</span>
                    )}
                </div>

                <div className="row">
                    <label htmlFor="state">Address State</label>
                    <select
                        id="state"
                        value={form.addressState || "Select…"}
                        onChange={(e) => setField("addressState", e.target.value)}
                        onBlur={() => onBlur("addressState")}
                        aria-invalid={!!errors.addressState}
                        aria-describedby="state-err"
                    >
                        {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {touched.addressState && errors.addressState && (
                        <span id="state-err" className="error">{errors.addressState}</span>
                    )}
                </div>

                <div className="btn-row">
                    <button type="submit" className="btn primary">Submit</button>
                    <button type="button" onClick={handleClear} className="btn">Clear Form</button>
                </div>
            </form>

            {submitted && (
                <div className="preview">
                    <strong>Saved Data</strong>
                    <pre>{JSON.stringify(submitted, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
