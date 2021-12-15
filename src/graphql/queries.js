import { gql } from "@apollo/client";

export const GET_POKEDEX_SPECIES = gql`
  query getAllPokemonSpecies($offset: Int, $take: Int) {
    getAllPokemonSpecies(offset: $offset, take: $take)
  }
`;

export const GET_POKEMON = gql`
  query getPokemon($specie: PokemonEnum!) {
    getPokemon(pokemon: $specie) {
      sprite
      species
    }
  }
`;

export const GET_ABOUT_POKEMON = gql`
  query getPokemon($specie: PokemonEnum!) {
    getPokemon(pokemon: $specie, reverseFlavorTexts: true, takeFlavorTexts: 1) {
      num
      sprite
      species
      flavorTexts {
        flavor
      }
    }
  }
`;
