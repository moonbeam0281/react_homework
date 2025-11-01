import CountryList from "../src/components/CountryList"

export default function HomePage() {
    return (
        <div className="container">
            <h1 className="page-title">Country list</h1>
            <CountryList />
        </div>
    );
}