import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../../handlers/functions";
import CountryCard from "./CountryCard";

export default function CountryList() {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        getCountries(setLoading)
            .then((res) => setCountries(res.data || []))
            .catch((err) => setError(err?.error || err?.message || "Failed to load countries"));
    }, []);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return countries;
        return countries.filter((c) => c.name.toLowerCase().includes(q));
    }, [countries, search]);

    if (loading) return <p className="loading container">Loading countries…</p>;
    if (error) return <p className="error container">{error}</p>;

    return (
        <>
            <div className="container search-bar">
                <input
                    className="input"
                    placeholder="Search by name…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search countries"
                />
            </div>

            <div className="container">
                <div className="cards">
                    {filtered.map((c) => (
                        <Link key={c.name} to={`/country/${encodeURIComponent(c.name)}`} style={{ textDecoration: "none" }}>
                            <CountryCard {...c} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
