import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favAction";
import store from "../store";

let stored = [];

try{
    const raw = localStorage.getItem("fav");
    if(raw)
    {
        stored = JSON.parse(raw);
    }
} catch {
    stored = [];
}

const initialState = {
    list: stored
};

export default function favReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE: {
            const exists = state.list.some((char) => char.id === action.payload.id);
            if (exists) return state;
            const updatedList = [...state.list, action.payload];
            localStorage.setItem("fav", JSON.stringify(updatedList));
            return { ...state, list: updatedList };
        }
        case REMOVE_FAVORITE: {
            const updated = state.list.filter((char) => char.id !== action.payload);
            localStorage.setItem("fav", JSON.stringify(updated));
            return { ...state, list: updated };
        }
        default: return state;
    }
}