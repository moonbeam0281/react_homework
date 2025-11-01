import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountry } from "../../handlers/functions";

export default function CountryDetail({ name }) {
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        setCountry(null);
        getCountry(setLoading, name, { fullText: false })
            .then((res) => setCountry(res.data))
            .catch((err) => setError(err?.error || err?.message || "Failed to load country"));
    }, [name]);

    if (loading) return <div className="container loading">Loading details…</div>;
    if (error) return <div className="container error">{error}</div>;
    if (!country) return null;

    return (
        <div className="container">
            <div className="row">
                <Link to="/" className="btn">← Back</Link>
                <div className="spacer" />
                {country.mapGoogle && (
                    <a className="btn" href={country.mapGoogle} target="_blank" rel="noreferrer">Open in Google Maps</a>
                )}
            </div>

            <div className="detail" style={{ marginTop: 16 }}>
                <img className="detail-flag" src={country.flagSvg || country.flagPng} alt={`${country.name} flag`} />
                <div className="detail-block">
                    <h1 style={{ marginTop: 0 }}>{country.name}</h1>
                    <div className="detail-grid">
                        <p className="kv"><b>Official:</b> {country.officialName || "—"}</p>
                        <p className="kv"><b>Capital:</b> {country.capital}</p>
                        <p className="kv"><b>Continent:</b> {country.continent}</p>
                        <p className="kv"><b>Region / Subregion:</b> {country.region} / {country.subregion}</p>
                        <p className="kv"><b>Population:</b> {country.population.toLocaleString()}</p>
                        <p className="kv"><b>Time zones:</b> {country.timezones.length ? country.timezones.join(", ") : "—"}</p>
                        <p className="kv"><b>Languages:</b> {country.languages.length ? country.languages.join(", ") : "—"}</p>
                        <p className="kv"><b>Currencies:</b> {country.currencies.length ? country.currencies.join(", ") : "—"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
