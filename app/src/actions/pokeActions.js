import axios from "axios";

export const FETCH_POKE = "FETCH_POKE";
export const ADD_POKE = "ADD_POKE";
export const CLEAR_POKE = "CLEAR_POKE";

export const fetchPokemon = (data) => {
  return { type: FETCH_POKE, payload: data };
};

export const addPokemon = (pokemon) => {
  return { type: ADD_POKE, payload: pokemon };
};
export const clearPokemon = () => {
  return { type: CLEAR_POKE };
};
