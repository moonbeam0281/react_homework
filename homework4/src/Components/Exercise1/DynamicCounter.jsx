import { useState, useEffect } from "react";

export default function DynamicCounter() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        if (count > 0) setBgColor("lightgreen");
        else if (count < 0) setBgColor("lightcoral");
        else setBgColor("white");
    }, [count]);

    const decrement = () => {
        setCount((prev) => (prev > -10 ? prev - 1 : prev));
    };

    const increment = () => setCount((prev) => prev + 1);
    const reset = () => setCount(0);

    return (
        <div
            style={{
                backgroundColor: bgColor,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px"
            }}
        >
            <h1 style={{
                color: count == 0? "black" : count>0? "green" : "red",
            }}>{count}</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}
