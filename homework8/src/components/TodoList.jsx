import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
    const { todoList, toggleComplete, deleteTodo, editTodo } = useContext(TodoContext);

    if (todoList.length === 0) {
        return <p style={{ opacity: 0.8 }}>Add some items to the list</p>;
    }

    return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {todoList.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => toggleComplete(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onEdit={(newText) => editTodo(todo.id, newText)}
                />
            ))}
        </ul>
    );
}

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(todo.text);

    const save = () => {
        onEdit(draft);
        setIsEditing(false);
    };

    return (
        <li style={styles.item}>
            <button aria-label="toggle complete" onClick={onToggle} style={styles.completeBtn}>
                {todo.isCompleted ? "✔" : "○"}
            </button>

            <div style={styles.textWrap}>
                {isEditing ? (
                    <input
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && save()}
                        style={styles.editInput}
                        autoFocus
                    />
                ) : (
                    <span
                        style={{
                            textDecoration: todo.isCompleted ? "line-through" : "none",
                            opacity: todo.isCompleted ? 0.6 : 1
                        }}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            {isEditing ? (
                <button onClick={save} style={styles.smallBtn}>Save</button>
            ) : (
                <button onClick={() => { setDraft(todo.text); setIsEditing(true); }} style={styles.smallBtn}>
                    Edit
                </button>
            )}

            <button onClick={onDelete} style={{ ...styles.smallBtn, color: "#e66" }}>Delete</button>
        </li>
    );
}

const styles = {
    item: {
        display: "grid",
        gridTemplateColumns: "32px 1fr auto auto",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        border: "1px solid #333",
        borderRadius: 10
    },
    completeBtn: {
        width: 28,
        height: 28,
        borderRadius: 999,
        border: "1px solid #333",
        background: "transparent",
        cursor: "pointer",
        fontSize: 16
    },
    textWrap: { minHeight: 28, display: "flex", alignItems: "center" },
    smallBtn: {
        border: "1px solid #333",
        background: "transparent",
        padding: "6px 10px",
        borderRadius: 8,
        cursor: "pointer"
    },
    editInput: {
        width: "100%",
        padding: "6px 8px",
        borderRadius: 8,
        border: "1px solid #333"
    }
};
