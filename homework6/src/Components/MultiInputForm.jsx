import { useState } from "react";
import { isEmail } from "../Utilities/Validate"

const interests = ["Art", "Music", "Gaming", "Coding", "Fishing", "Reading", "Sports"];
const countries = ["", "Macedonia", "Germany", "Japan", "UK", "Italy"];

export default function MultiInputForm() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        gender: "",
        interests: [],
        country: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    const setField = (name, value) => {
        setValues((val) => ({ ...val, [name]: value }));
    }

    function toggleInterest(choise) {
        setValues((v) => {
            return {
                ...v,
                interests: v.interests.includes(choise)
                    ? v.interests.filter((x) => x !== choise)
                    : [...v.interests, choise],
            };
        });
    }

    function validateAll(v) {
        const err = {};
        if (!v.name || v.name.trim().length < 3) err.name = "At least 3 characters.";
        if (!v.email || !isEmail(v.email)) err.email = "Invalid email.";
        if (!v.gender) err.gender = "Please choose a gender.";
        if (!v.interests.length) err.interests = "Pick at least one interest.";
        if (!v.country) err.country = "Please select a country.";
        return err;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validateAll(values);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setSubmitted(values);
        } else {
            setSubmitted(null);
        }
    }

    return (
        <div className="card">
            <h2 className="h2">Multi-Input Form</h2>

            <form className="form" onSubmit={handleSubmit} >
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        value={values.name}
                        onChange={(e) => setField("name", e.target.value)}
                        placeholder="Your name"
                    />
                    {errors.name && <span id="err-m-name" className="error">{errors.name}</span>}
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="email"
                        value={values.email}
                        onChange={(e) => setField("email", e.target.value)}
                        placeholder="you@example.com"
                    />
                    {errors.email && <span id="err-m-email" className="error">{errors.email}</span>}
                </div>

                <div className="field">
                    <label className="label">Gender</label>
                    <div className="row">
                        {["Male", "Female"].map((g) => (
                            <label key={g} className="chip">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    checked={values.gender === g}
                                    onChange={(e) => setField("gender", e.target.value)}
                                />
                                {g}
                            </label>
                        ))}
                    </div>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>

                <div className="field">
                    <label className="label">Interests</label>
                    <div className="row">
                        {interests.map((opt) => (
                            <label key={opt} className="chip">
                                <input
                                    type="checkbox"
                                    value={opt}
                                    checked={values.interests.includes(opt)}
                                    onChange={() => toggleInterest(opt)}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                    {errors.interests && <span className="error">{errors.interests}</span>}
                </div>

                <div className="field">
                    <label className="label">Country</label>
                    <select
                        className="select"
                        value={values.country}
                        onChange={(e) => setField("country", e.target.value)}
                    >
                        {countries.map((c) => (
                            <option key={c} value={c}>
                                {c || "Select country..."}
                            </option>
                        ))}
                    </select>
                    {errors.country && <span id="err-m-country" className="error">{errors.country}</span>}
                </div>

                <button type="submit" className="btn">Submit</button>
            </form>

            {submitted && (
                <div className="kv">
                    <b>Submitted:</b>
                    <pre style={{ margin: 0 }}>
                        {JSON.stringify(submitted, null, 2)}
                    </pre>
                </div>
            )}
        </div>

    );
}