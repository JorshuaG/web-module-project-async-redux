import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { clearPokemon } from "../actions/pokeActions";

function Pokemon(props) {
  const { push } = useHistory();
  console.log("pokemon data on pokemon card", props.pokemon);
  const handleReturn = () => {
    props.clearPokemon();
    push("/");
  };

  return (
    <div>
      <h2>{props.pokemon[0].name}</h2>
      <div>
        <div>
          <img src={props.pokemon[0].sprites.front_default} />
        </div>
        <div>
          <p>ID: {props.pokemon[0].id}</p>
          <p>Ability: "{props.pokemon[0].abilities[0].ability.name}"</p>
          <p>Weight: {props.pokemon[0].weight}</p>
        </div>
      </div>
      <button onClick={handleReturn}>Return to Search</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
};
export default connect(mapStateToProps, { clearPokemon })(Pokemon);
