import axios from "axios";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { fetchPokemon } from "../actions/pokeActions";

function PokeSearch(props) {
  const { push } = useHistory();
  const [poke, setPoke] = useState({ poke: "" });

  const handleChange = (e) => {
    setPoke({ ...poke, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios

      .get(`https://pokeapi.co/api/v2/pokemon/${poke.poke}`)
      .then((res) => {
        console.log(res.data);
        props.fetchPokemon(res.data);
      })
      .catch((err) => {
        console.log("error after submit", err);
      });
    setPoke({ ...poke, poke: "" });
    push("/pokemon");
  };
  console.log(props.pokemon);
  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" />
        <input onChange={handleChange} name="poke" type="text"></input>

        <button>Search</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};
export default connect(mapStateToProps, { fetchPokemon })(PokeSearch);
