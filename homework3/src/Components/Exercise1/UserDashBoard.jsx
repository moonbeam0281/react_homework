import { useState } from "react";

function AdminPannel() {
    return (
        <div>
            <h1>Welcome back <strong>ADMIN</strong>! This info is sensitive!</h1>
            <h2><strong>Please don't share!</strong></h2>
        </div>

    )
}

function DefaultUserPanel({ username }) {
    return (
        <h1>Hello and welcome {username == "" ? "Default user" : username}!</h1>
    )
}

export default function UserDashBoard() {
    const [isLoggedIn, setLogin] = useState(false);
    const [isAdmin, setAdmin] = useState(false);
    const [username, setUsername] = useState("");

    const adminUsername = "moonbeam";

    const handleLogin = () => {
        if (!isLoggedIn) {
            if (username.toLowerCase() === adminUsername.toLowerCase()) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        } else {
            setAdmin(false);
            setUsername("");
        }
        setLogin((current) => !current);
    };

    return (
        <section className="exerciseBox">
            {console.log("Dashboard loaded")}

            {(isLoggedIn && !isAdmin) && <DefaultUserPanel username={username} />}
            {(isLoggedIn && isAdmin) && <AdminPannel />}

            {!isLoggedIn && (
                <>
                    <h1>Welcome! Please enter your name:</h1>
                    <input
                        id="userNameInput"
                        type="text"
                        value={username}
                        placeholder="Your username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </>
            )}

            <button onClick={handleLogin}>
                {isLoggedIn ? "Log out" : "Log in"}
            </button>
        </section>
    );
}