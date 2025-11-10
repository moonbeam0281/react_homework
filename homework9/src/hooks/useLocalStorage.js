import { useEffect, useState, useRef } from "react";

export default function useLocalStorage(key, initialValue) {
    const isFirst = useRef(true);
    const [value, setValue] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw !== null ? JSON.parse(raw) : (
                typeof initialValue === "function" ? initialValue() : initialValue
            );
        } catch {
            return typeof initialValue === "function" ? initialValue() : initialValue;
        }
    });
    
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
            return;
        }
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {

        }
    }, [key, value]);

    // optional cross-tab sync
    useEffect(() => {
        const onStorage = (e) => {
            if (e.key === key) {
                try {
                    setValue(e.newValue !== null ? JSON.parse(e.newValue) : null);
                } catch {
                    setValue(null);
                }
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, [key]);

    return [value, setValue];
}
