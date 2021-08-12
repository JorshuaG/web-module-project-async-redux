import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import {
  clearPokemon,
  fetchChar,
  fetchBulb,
  fetchSqui,
} from "../actions/pokeActions";

function Pokemon(props) {
  const { push } = useHistory();
  const pokemon = props.pokemon;

  const handleReturn = () => {
    push("/");
  };

  return (
    <div>
      <h2>{pokemon.species.name}</h2>
      <div>
        <div>
          <img src={pokemon.sprites.front_default} />
        </div>
        <div>
          <p>ID: {pokemon.id}</p>
          <p>Ability: "{pokemon.abilities[0].ability.name}"</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
      <button onClick={handleReturn}>Return to Search</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
};
export default connect(mapStateToProps, {
  clearPokemon,
  fetchSqui,
  fetchBulb,
  fetchChar,
})(Pokemon);
