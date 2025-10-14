import { useState } from "react";
import "./Mood.css";

const moodEmojiMap = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Tired: "😴",
}

function MoodSelector({ currentMood, onSelect }) {
    return (
        <div className="mood-buttons" role="group" aria-label="Select your mood">
            {Object.keys(moodEmojiMap).map((m) => (
                <button
                    key={m}
                    className={`mood-btn ${currentMood === m ? "active" : ""}`}
                    aria-pressed={currentMood === m}
                    onClick={() => onSelect(m)}
                >
                    {m}
                </button>
            ))}
        </div>
    );
}

function MoodDisplay({ mood }) {
    if (!mood) return <p style={{ textAlign: "center", color: "#cbd5e1" }}>
        Pick a mood to display it here.
    </p>;

    return (
        <div className="mood-display">
            <span className="mood-emoji">{moodEmojiMap[mood]}</span>
            <div className="mood-text">{mood}</div>
        </div>
    );
}

export default function MoodTracker() {
    const [mood, setMood] = useState("");

    return (
        <section className="exerciseBox">
            <h1>Exercise 2: Mood Tracker</h1>
            <p>Select your current mood and I’ll show it with an emoji.</p>

            <MoodSelector currentMood={mood} onSelect={setMood} />
            <MoodDisplay mood={mood} />
        </section>
    );
}