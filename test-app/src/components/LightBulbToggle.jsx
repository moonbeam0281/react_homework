import { useState } from "react";
import lightBulbOn from "../assets/lightbulbs/lightbulb-on.png";
import lightBulbOff from "../assets/lightbulbs/lightbulb-off.png";
import "../assets/lightbulbs/lightbulb.css";

export default function LightbulbToggle() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <img src={isOn ? lightBulbOn : lightBulbOff} className="lightbulb" />
            <button onClick={handleToggle}>
                {isOn ? "Turn Off" : "Turn On"}
            </button>
        </div>
    );
}
