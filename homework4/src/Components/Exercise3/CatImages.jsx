import { useState } from "react";
import "./CatStyle.css"

function CatImg({ url }) {
    return (
        <div className="cat-wrap">
            <img className="cat-img" src={url} alt="Cute cat" loading="lazy" />
        </div>
    );
}

export default function CatImages() {

    const [cats, setCats] = useState([]);
    const [loadingCats, setLoadingCats] = useState(false);

    async function fetchCats() {
        setLoadingCats(true);
        setCats([]);
        try {
            const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            if (!res.ok) console.log("Error while fetching")
            const data = await res.json();
            setCats(data.map((cat) => cat.url));
        } catch (error) {
            console.log(`Couldn't fetch, something went wrong.\n${error.message}`)
        } finally {
            setLoadingCats(false);
        }
    }

    return (
        <div className="catBox">
            <h2>Cat Images Gallery</h2>
            <button onClick={fetchCats} disabled={loadingCats}>
                {loadingCats ? "Fetching..." : "Fetch Cat Images"}
            </button>

            <div className="grid">
                {cats.map((url, i) => (
                    <CatImg key={url + i} url={url} />
                ))}
            </div>
        </div>
    )
}