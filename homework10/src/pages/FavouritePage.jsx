import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";

export default function FavouritesPage() {
    const favorites = useSelector((state) => state.favorites.list);

    if (!favorites || favorites.length === 0) {
        return (
            <div className="characters-container">
                <h2>No favorites yet</h2>
                <p>Add some from the Characters page!</p>
            </div>
        );
    }

    return (
        <div className="characters-container">
            <h2>Your Favorites ⭐</h2>
            <div className="grid">
                {favorites.map((char) => (
                    <CharacterCard key={char.id} character={char} />
                ))}
            </div>
        </div>
    );
}
