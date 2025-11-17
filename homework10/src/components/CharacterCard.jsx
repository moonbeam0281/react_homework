import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favAction";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.list);

    const isFav = favorites.some((c) => c.id === character.id);

    const handleFavorite = () => {
        if (isFav) dispatch(removeFavorite(character.id));
        else dispatch(addFavorite(character));
    };

    return (
        <div className="char-card">
            <Link to={`/character/${encodeURIComponent(character.name)}`}>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.status} — {character.species}</p>
            </Link>

            <button onClick={handleFavorite}>
                {isFav ? "★ Remove Favorite" : "☆ Add Favorite"}
            </button>
        </div>
    );
}
