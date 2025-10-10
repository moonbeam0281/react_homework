
export default function GrandChild({name, hobby}) {
    return (
        <li className="node grandchild">
            <div className="node__card">
                <strong>{name}</strong>
                <div>Hobby: {hobby}</div>
            </div>
        </li>
    );
}