//!controladores necesarios
const getPokemonsByApi = require("./getPokemonsByApi");
const getPokemonsByDb = require("./getPokemonsByDb");

//!funcion

const allPokemonData = async () => {
  

  
    const pokemonApi = await getPokemonsByApi(
      "https://pokeapi.co/api/v2/pokemon"
    );
    const PokemonsDb = await getPokemonsByDb();
    
    const allPokemons = PokemonsDb
      ? [...pokemonApi, ...PokemonsDb]
      : pokemonApi;

    // const allPokemons = pokemonApi;
    return allPokemons;

};
module.exports = allPokemonData;
