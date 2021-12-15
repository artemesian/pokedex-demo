import PokemonActionTypes from "./pokemon.types";

const INITIAL_STATE = {
  pokemon: {},
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonActionTypes.LOAD_POKEMON:
      return {
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
