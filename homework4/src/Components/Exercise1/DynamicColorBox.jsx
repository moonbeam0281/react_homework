import { useMemo, useState } from "react";
import "./DynamicColorBox.css";

const minmaxVal = (n, min = 0, max = 255) => Math.min(max, Math.max(min, n));
const toHex = (n) => n.toString(16).toUpperCase().padStart(2, "0");

function ChangeColorControl({ label, value, onChange }) {
  const hex = toHex(value);
  const handle = (delta) => onChange((prev) => minmaxVal(prev + delta));

  const colorBarCol = `#${label === "R" ? `${hex}0000` : label === "G" ? `00${hex}00` : `0000${hex}`}`

  return (
    <div className="colorBox">
      <div className="row">
        <strong>{label === "R" ? "Red" : label === "G" ? "Green" : "Blue"}</strong>
        <span className="readout">{value} <strong>|</strong> 0x{hex}</span>
      </div>
      <div className="buttons">
        <button onClick={() => handle(-16)}>-16</button>
        <button onClick={() => handle(-1)}>-1</button>
        <button onClick={() => handle(+1)}>+1</button>
        <button onClick={() => handle(+16)}>+16</button>
      </div>
      <div
        className="colorBar"
        style={{ background: colorBarCol }}
        title={`Channel ${label} preview`}
      />
    </div>
  );
}

export default function DynamicColorBox() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const hex = useMemo(() => `#${toHex(red)}${toHex(green)}${toHex(blue)}`, [red, green, blue]);

  const reset = () => {
    setRed(0);
    setGreen(0);
    setBlue(0);
  };

  return (
    <div
      className="wrapper"
      style={{
        background: hex,
      }}
    >
      <h1 className="title">Dynamic RGB/Hex Counter</h1>

      <div className="hexRow">
        <span className="hexLabel">Current:</span>
        <code className="hexValue">{hex}</code>
        <button className="resetBtn" onClick={reset}>Reset</button>
      </div>

      <div className="grid">
        <ChangeColorControl label="R" value={red} onChange={setRed} />
        <ChangeColorControl label="G" value={green} onChange={setGreen} />
        <ChangeColorControl label="B" value={blue} onChange={setBlue} />
      </div>
    </div>
  );
}
