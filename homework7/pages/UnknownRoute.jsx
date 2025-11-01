import { Link } from "react-router-dom";

export default function UnknownRoute() {
    return (
        <div className="container notfound">
            <h1>404 — Not Found</h1>
            <p>We couldn’t find that page.</p>
            <p style={{ marginTop: 10 }}>
                <Link className="btn" to="/">Go home</Link>
            </p>
        </div>
    );
}
