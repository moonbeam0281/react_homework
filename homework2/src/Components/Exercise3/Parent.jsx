import Child from "./Child";
import "./Family.css";

export default function Parent({ name, children = [] }) {
  return (
    <div className="tree">
      <div className="node parent">
        <div className="node__card node__card--parent">
          <strong>{name}</strong>
        </div>
      </div>

      {children.length > 0 && (
        <ul className="node__children">
          {children.map((c, i) => (
            <Child
              key={`${c.name}-${i}`}
              name={c.name}
              age={c.age}
              grandchildren={c.grandchildren}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
