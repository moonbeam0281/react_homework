import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
    const { addTodo } = useContext(TodoContext);
    const [text, setText] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (!text.trim().length > 0) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleAdd} style={styles.row}>
            <input
                style={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task…"
            />
            <button style={styles.button} disabled={!text.trim().length > 0}>Add</button>
        </form>
    );
}

const styles = {
    row: { display: "flex", gap: 8, marginBottom: 12 },
    input: { flex: 1, padding: "8px 10px", borderRadius: 8, border: "1px solid #333" },
    button: { padding: "8px 12px", borderRadius: 8, border: "1px solid #333", cursor: "pointer" }
};
