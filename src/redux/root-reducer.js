import { combineReducers } from "redux";

import pokemonReducer from "./pokemon/pokemon.reducers";
import pokedexReducer from "./pokedex/pokedex.reducers";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokedex: pokedexReducer,
});

export default rootReducer;
