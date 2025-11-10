import useMousePosition from "../hooks/useMousePosition";
import "../App.css";

export default function MouseTracker() {
    const { x, y } = useMousePosition();

    return (
        <>
            <div className="card">
                <h2>Mouse Tracker</h2>
                <div className="coord">
                    <strong>x:</strong> {x}px | <strong>y:</strong> {y}px
                </div>
            </div>
            <div
                className="follower"
                style={{ left: x - 25 + "px", top: y - 25 + "px" }}
            />
        </>
    );
}
