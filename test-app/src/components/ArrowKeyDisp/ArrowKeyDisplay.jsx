import { useState, useEffect } from "react";
import "./ArrowKeys.css";

export default function ArrowKeyDisplay() {
    const [direction, setDirection] = useState("center");

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    setDirection("up");
                    break;
                case "ArrowDown":
                    setDirection("down");
                    break;
                case "ArrowLeft":
                    setDirection("left");
                    break;
                case "ArrowRight":
                    setDirection("right");
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown",handleKeyDown );
    }, []);

    const getMessage = () => {
        switch (direction) {
            case "up":
                return "Arrow UP";
            case "down":
                return "Arrow DOWN";
            case "left":
                return "Arrow LEFT";
            case "right":
                return "Arrow RIGHT";
            default:
                return "Try pressing the arrow keys on your keyboard.";
        }
    };

    return (
        <div className="container">
            <div className={`message ${direction}`}>{getMessage()}</div>
        </div>
    );
}
