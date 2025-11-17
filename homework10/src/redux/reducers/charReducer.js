import { SET_CHARACTERS } from "../actions/charActions";

const initialState = {
  list: [],
};

export default function charReduce(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
