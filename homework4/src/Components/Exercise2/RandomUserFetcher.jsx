import { useState, useEffect } from "react"
import "./RandomUser.css"

const randomId = () => Math.floor(Math.random() * 10) + 1;

function UserCard({ userData }) {

    useEffect(() => {
        if (userData) console.log("Updated user state:", userData);
    }, [userData]);

    if (!userData) return null;
    return (
        <div className="userCard">
            <h3>{userData.name}</h3>
            <ul>
                <li><b>City:</b> {userData.address?.city}</li>
                <li><b>Phone:</b> {userData.phone}</li>
                <li><b>Company:</b> {userData.company?.name}</li>
            </ul>
        </div>
    )
}

function ErrorBox({ err }) {
    if(!err) return null;
    return (
        <div>
            <h1>Error while fetching info!</h1>
            <p>{err.message}</p>
        </div>
    )
}

export default function RandomUserFetcher() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setErr] = useState(null);

    async function getUser() {
        setLoading(true);
        setErr(null);
        setUser(null);
        const id = randomId();
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!res.ok) {
                console.log("Error with the request");
                throw new Error(`Bad request (${res.status})\n${res.statusText}`);
            }
            const data = await res.json();

            if(!data) throw new Error(`Bad data. Could not load info.\n${res.statusText}`);

            setUser(data);
        }
        catch (error) {
            setErr(error);
            console.log(`Internal error while running the getUserFunction\n${error}`);
        }
        finally {
            //console.log(user);
            setLoading(false);
            /*
            setTimeout(() => {
                this was just for visually looking nice
            }, 500);*/
        }
    }

    return (
        <div className="userBox">
            <button onClick={getUser} disabled = {loading}>
                {loading ? "Fetching user data..." : "Get user data"}
            </button>

            <UserCard userData={user} />
            {error && <ErrorBox err={error} />}
        </div>
    );
}

//{<button onClick={errorTest}>Error box test</button>}
// Button for testing error message

/*

    function errorTest() {
        setErr("Big error! something bad hapened!");
    }
*/