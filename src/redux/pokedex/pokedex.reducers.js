import PokedexActionTypes from "./pokedex.types";

const INITIAL_STATE = {
  fetchFrom: 0,
  pokedex: [],
};

const pokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokedexActionTypes.LIST_POKEDEX:
      return {
        pokedex: [...state.pokedex, ...action.payload],
        fetchFrom: [...state.pokedex, ...action.payload].length,
      };
    default:
      return state;
  }
};

export default pokedexReducer;
