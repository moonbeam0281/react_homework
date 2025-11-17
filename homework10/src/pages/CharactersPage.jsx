import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../redux/actions/charActions";
import { getAllChars } from "../handlers/ricknmorty";
import CharacterCard from "../components/CharacterCard";

export default function CharactersPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const characters = useSelector(state => state.characters.list);
    const search = useSelector(state => state.search.term);

    useEffect(() => {
        const fetch = async () => {
            const result = await getAllChars(setLoading);
            if (result.success) {
                dispatch(setCharacters(result.data.results));
            }
        };
        fetch();
    }, [dispatch]);

    const filtered = characters.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="characters-container">
            {loading && <h2>Loading...</h2>}

            {!loading && filtered.length === 0 && (
                <h2>No characters found</h2>
            )}

            <div className="grid">
                {filtered.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}
