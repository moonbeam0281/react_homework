import { useRef, useState } from "react";
import { validateContact } from "../Utilities/Validate";

export default function ContactFormUncontrolled() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            name: nameRef.current?.value || "",
            email: emailRef.current?.value || "",
            message: messageRef.current?.value || "",
        };
        const errs = validateContact(payload);
        setErrors(errs);
        if (Object.keys(errs).length === 0) setSubmitted(payload);
        else setSubmitted(null);
    }

    return (
        <div className="card">
            <h2 className="h2">Uncontrolled Contact Form</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        ref={nameRef}
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <span id="err-u-name" className="error">{errors.name}</span>
                    )}
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="email"
                        ref={emailRef}
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <span id="err-u-email" className="error">{errors.email}</span>
                    )}
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <textarea
                        className="textarea"
                        ref={messageRef}
                        placeholder="Your message..."
                    />
                    {errors.message && (
                        <span id="err-u-message" className="error">{errors.message}</span>
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
