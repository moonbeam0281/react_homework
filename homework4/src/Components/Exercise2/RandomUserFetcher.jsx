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

export default function RandomUserFetcher() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getUser() {
        try {
            setLoading(true);
            const id = randomId();
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!res.ok) console.log("Error with the request");
            const data = await res.json();
            setUser(data);
        }
        catch (e) {
            console.log("Error while running the getUserFunction")
        }
        finally {
            console.log(user);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    return (
        <div className="userBox">
            <button onClick={getUser}>
                {loading? "Fetching user data..." : "Get user data"}
            </button>
            <UserCard userData={user} />
        </div>
    );
}