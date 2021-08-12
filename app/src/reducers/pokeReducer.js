import { ADD_POKE, CLEAR_POKE, FETCH_POKE } from "../actions/pokeActions";

const initialState = {
  pokemon: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKE:
      return { ...state, searchedPoke: action.payload };
    case FETCH_POKE:
      return { ...state, pokemon: action.payload };
    case CLEAR_POKE:
      return { ...state, pokemon: [] };
    default:
      return state;
  }
};
