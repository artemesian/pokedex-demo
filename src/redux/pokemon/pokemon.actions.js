import PokemonActionTypes from "./pokemon.types";

export const loadPokemon = (pokemon) => ({
  type: PokemonActionTypes.LOAD_POKEMON,
  payload: pokemon,
});
