import Grandchild from "./Grandchild";

export default function Child({ name, age, grandchildren = [] }) {
    return (
        <li className="node child">
            <div className="node__card">
                <strong>{name}</strong>
                <div>Age: {age}</div>
            </div>

            {grandchildren.length > 0 && (
                <ul className="node__children">
                    {grandchildren.map((g, i) => (
                        <Grandchild key={`${g.name}-${i}`} name={g.name} hobby={g.hobby} />
                    ))}
                </ul>
            )}
        </li>
    );
}
