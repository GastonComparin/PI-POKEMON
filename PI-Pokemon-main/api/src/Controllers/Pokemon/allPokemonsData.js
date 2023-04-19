//!controladores necesarios
const getPokemonsByApi = require("./getPokemonsByApi");
const getPokemonsByDb = require("./getPokemonsByDb");

//!funcion

const allPokemonData = async () => {
  const pokemonApi = await getPokemonsByApi();

  const PokemonsDb = await getPokemonsByDb();
  const allPokemons = PokemonsDb ? [...pokemonApi, ...PokemonsDb] : pokemonApi;
  return allPokemons;
};
module.exports = allPokemonData;
