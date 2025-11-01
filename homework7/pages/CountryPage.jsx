import { useParams } from "react-router-dom";
import CountryDetail from "../src/components/CountryDetail";

export default function CountryPage() {
    const { name } = useParams();
    return (
        <div style={{ padding: 16 }}>
            <CountryDetail name={name} />
        </div>
    );
}
