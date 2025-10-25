import { useState } from "react";
import { validateContact } from "../Utilities/Validate";

export default function ContactFormControlled() {
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validateContact(values);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setSubmitted(values);
        } else {
            setSubmitted(null);
        }
    }

    function handleOnChange(e) {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
    }

    return (
        <div className="card">
            <h2 className="h2">Controlled Contact Form</h2>

            <form className="form" onSubmit={handleSubmit} >
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleOnChange}
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <span id="err-name" className="error">{errors.name}</span>
                    )}
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleOnChange}
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <span id="err-email" className="error">{errors.email}</span>
                    )}
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <textarea
                        className="textarea"
                        name="message"
                        value={values.message}
                        onChange={handleOnChange}
                        placeholder="Your message..."
                    />
                    {errors.message && (
                        <span id="err-message" className="error">{errors.message}</span>
                    )}
                </div>

                <button type="submit" className="btn">Send</button>
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