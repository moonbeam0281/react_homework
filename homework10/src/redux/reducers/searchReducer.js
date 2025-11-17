import { SET_SEARCH } from "../actions/searchAction";

const initialState = {
    term: ""
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            {
                return { ...state, term: action.payload };
            }
        default: return state;
    }
}