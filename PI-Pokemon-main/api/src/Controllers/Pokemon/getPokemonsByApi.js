const axios = require("axios");

const getPokemonsByApi = async (url = `https://pokeapi.co/api/v2/pokemon`) => {
  try {
    const resultApi = await axios.get(url);

    const nextApi = await axios.get(resultApi.data.next);

    const allPokemons = [...resultApi.data.results, ...nextApi.data.results];

    for (const pokemon of allPokemons) {
      const url = await axios.get(pokemon.url);
      delete pokemon.url;
      pokemon.id = url.data.id;
      pokemon.height = url.data.height;
      pokemon.weight = url.data.weight;
      pokemon.health = url.data.stats[0].base_stat;
      pokemon.attack = url.data.stats[1].base_stat;
      pokemon.defense = url.data.stats[2].base_stat;
      pokemon.speed = url.data.stats[5].base_stat;
      pokemon.types = url.data.types.map((el) => el.type.name);
      pokemon.image = url.data.sprites.other["official-artwork"].front_default;
      pokemon.createdInDb = false;
    }

    return allPokemons;
  } catch (error) {
    return { error: "Error when fetching pokemos from the api" };
  }
};

module.exports = getPokemonsByApi;
