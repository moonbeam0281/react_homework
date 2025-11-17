import { combineReducers, createStore } from "redux";
import charReduce from "./reducers/charReducer";
import favReducer from "./reducers/favReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    characters: charReduce,
    favorites: favReducer,
    search: searchReducer
});

const store = createStore(rootReducer);

export default store;