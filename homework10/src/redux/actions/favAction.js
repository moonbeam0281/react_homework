export const ADD_FAVORITE = "ADDFAV";
export const REMOVE_FAVORITE = "REMOVEFAV";

export const addFavorite = (character) => ({
    type: ADD_FAVORITE,
    payload: character
});

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id
});
