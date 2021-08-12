import axios from "axios";

export const FETCH_POKE = "FETCH_POKE";
export const ADD_POKE = "ADD_POKE";
export const CLEAR_POKE = "CLEAR_POKE";
export const FETCH_CHAR = "FETCH_CHAR";
export const FETCH_SQUI = "FETCH_SQUI";
export const FETCH_BULB = "FETCH_BULB";

export const fetchPokemon = (pokemon) => {
  return { type: FETCH_POKE, payload: pokemon };
};
export const fetchChar = () => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/charmander`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchPokemon(res.data));
      })
      .catch((err) => {
        console.log("error after axios call", err);
      });
  };
};
export const fetchSqui = () => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/squirtle`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchPokemon(res.data));
      })
      .catch((err) => {
        console.log("error after axios call", err);
      });
  };
};
export const fetchBulb = () => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchPokemon(res.data));
      })
      .catch((err) => {
        console.log("error after axios call", err);
      });
  };
};

export const addPokemon = (pokemon) => {
  return { type: ADD_POKE, payload: pokemon };
};
export const clearPokemon = () => {
  return { type: CLEAR_POKE };
};
