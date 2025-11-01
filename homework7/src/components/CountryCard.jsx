export default function CountryCard({ name, flag, region, population }) {
    return (
        <div className="card">
            <img className="card-flag" src={flag} alt={`${name} flag`} loading="lazy" />
            <h3 className="card-title">{name}</h3>
            <p className="card-meta"><b>Region:</b> {region}</p>
            <p className="card-meta"><b>Population:</b> {population.toLocaleString()}</p>
            <div style={{ marginTop: 8 }}>
                <span className="pill">View details →</span>
            </div>
        </div>
    );
}
