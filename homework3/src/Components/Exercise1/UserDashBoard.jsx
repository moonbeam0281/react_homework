import { useState } from "react";
import DefaultUserPanel from "./DefaultUserPanel";
import AdminPannel from "./AdminPanel";


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