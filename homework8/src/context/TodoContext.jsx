import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export default function TodoContextProvider({children})
{
    const [todoList, updateList] = useState([]);

    const addTodo = (text) => {
        if(!text.trim() || todoList.some(t => t.text.toLowerCase() === text.toLowerCase())) return;

        updateList(prev => [{id: Date.now(), text: text, isCompleted: false}, ...prev]);
    }

    const deleteTodo = (id) => updateList(prev => prev.filter(t => t.id !== id));
    
    const editTodo = (id, newText) => {
        if(!newText.trim()) return;
        updateList(prev => prev.map(t => (t.id === id? {...t, text:newText} : t)));
    }

    const toggleComplete = (id) => updateList(prev => prev.map(t => (t.id === id? {...t, isCompleted: !t.isCompleted} : t)));

    const value = { todoList, addTodo, deleteTodo, editTodo, toggleComplete};

    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}