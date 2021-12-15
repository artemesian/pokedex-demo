import PokedexActionTypes from "./pokedex.types";

export const listPokedex = (pokedex) => ({
  type: PokedexActionTypes.LIST_POKEDEX,
  payload: pokedex,
});
