
export default function DefaultUserPanel({ username }) {
    return (
        <h1>Hello and welcome {username == "" ? "Default user" :  username }!</h1>
    )
}