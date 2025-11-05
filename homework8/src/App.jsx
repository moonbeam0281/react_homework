import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContext";

export default function App() {
  return (
    <div style={styles.app}>
      <TodoContextProvider>
        <div style={styles.card}>
          <h1 style={{ marginTop: 0 }}>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </TodoContextProvider>

    </div>
  );
}

const styles = {
  app: { minHeight: "100dvh", display: "grid", placeItems: "center", background: "#0b1220", color: "#e5e7eb" },
  card: { width: "min(700px, 92vw)", background: "rgba(25, 35, 55, 0.9)", padding: 20, borderRadius: 16, border: "1px solid #334" }
};
