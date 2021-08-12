import axios from "axios";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  addPokemon,
  fetchBulb,
  fetchChar,
  fetchSqui,
} from "../actions/pokeActions";

function PokeSearch(props) {
  const { push } = useHistory();

  const handleChar = () => {
    props.fetchChar();
    push("/pokemon");
  };
  const handleSqui = () => {
    props.fetchSqui();
    push("/pokemon");
  };
  const handleBulb = () => {
    props.fetchBulb();
    push("/pokemon");
  };

  console.log(props.pokemon);
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" />
      <div>
        <button onClick={() => handleChar()}>Choose Charmander</button>
        <button onClick={() => handleSqui()}>Choose Squirtle</button>
        <button onClick={() => handleBulb()}>Choose Bulbasaur</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    searchedPokemon: state.searchedPokemon,
  };
};
export default connect(mapStateToProps, {
  addPokemon,
  fetchSqui,
  fetchChar,
  fetchBulb,
})(PokeSearch);
