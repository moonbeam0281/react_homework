import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getOneChar } from "../handlers/ricknmorty";

export default function CharacterDetail() {
    const { name } = useParams();
    const navigate = useNavigate();

    const decodedName = decodeURIComponent(name || "");

    const characters = useSelector((state) => state.characters.list);

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!decodedName) return;

        // 1) Try to find the character in Redux first
        const fromStore = characters.find(
            (c) => c.name.toLowerCase() === decodedName.toLowerCase()
        );

        if (fromStore) {
            setCharacter(fromStore);
            return;
        }

        // 2) If not found, fetch by *name* using your getOneChar
        const fetchChar = async () => {
            try {
                setError("");
                const result = await getOneChar(decodedName, setLoading);

                if (result.success && result.data?.results?.length) {
                    setCharacter(result.data.results[0]); // first match
                } else {
                    setError(result.error || "Character not found");
                }
            } catch (e) {
                setError(e.error || e.message || "Error while fetching character");
            }
        };

        fetchChar();
    }, [decodedName, characters]);

    if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;
    if (error) return <h2 style={{ padding: "20px" }}>{error}</h2>;
    if (!character) return <h2 style={{ padding: "20px" }}>No character data.</h2>;

    return (
        <div className="detail-container">
            <button onClick={() => navigate(-1)} className="back-btn">
                ⬅ Back
            </button>

            <div className="detail-card">
                <img src={character.image} alt={character.name} />

                <div className="detail-info">
                    <h1>{character.name}</h1>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    {character.type && <p><strong>Type:</strong> {character.type}</p>}
                    <p><strong>Gender:</strong> {character.gender}</p>
                    {character.origin && (
                        <p><strong>Origin:</strong> {character.origin.name}</p>
                    )}
                    {character.location && (
                        <p><strong>Location:</strong> {character.location.name}</p>
                    )}
                    {character.episode && (
                        <p><strong>Episode count:</strong> {character.episode.length}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
