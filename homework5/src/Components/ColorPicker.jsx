import { useMemo, useState } from "react";
import "./ColorPicker.css";

function isValidCssColor(input) {
    if (!input) return false;
    const val = input.trim();

    const hexOk = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(val);
    if (hexOk) return true;

    if (window.CSS && CSS.supports && CSS.supports("color", val)) return true;

    const s = document.createElement("span").style;
    s.color = "";
    s.color = val;
    return s.color !== "";
}

export default function ColorPicker() {
    const [colors, setColors] = useState(["red", "green", "blue", "yellow"]);
    const [selected, setSelected] = useState("red");
    const [customInput, setCustomInput] = useState("");
    const [error, setError] = useState("");

    const normalizedSet = useMemo(
        () => new Set(colors.map((color) => color.toLowerCase())),
        [colors]
    );

    const addColor = () => {
        const raw = customInput.trim();
        if (!raw) return;

        if (!isValidCssColor(raw)) {
            setError("That doesn’t look like a valid CSS color.");
            return;
        }

        const key = raw.toLowerCase();
        if (normalizedSet.has(key)) {
            setError("That color already exists.");
            return;
        }

        setColors((prev) => [...prev, raw]);
        setSelected(raw);
        setCustomInput("");
        setError("");
    };

    return (
        <div className="cp-wrapper">
            <h2>Color Picker</h2>

            <div className="cp-buttons">
                {colors.map((c) => (
                    <button
                        key={c}
                        className="cp-btn"
                        onClick={() => setSelected(c)}
                        style={{ borderColor: c }} 
                        >
                            {c}
                    </button>
                ))}
            </div>

            <div className="cp-add">
                <input
                    value={customInput}
                    onChange={(e) => {
                        setCustomInput(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder='Add color (e.g. "purple" or "#ff5733")'
                />
                <button onClick={addColor}>Add Color</button>
            </div>

            {error && <p className="cp-error">{error}</p>}

            <div className="cp-box" style={{ background: selected }}>
                <span>{selected}</span>
            </div>
        </div>
    );
}
