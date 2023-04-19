const allPokemonsData = require("../Controllers/Pokemon/allPokemonsData");
const pokemonsByName = require("../Controllers/Pokemon/pokemonsByName");

const getAllPokemons = async (req, res) => {
  let { name } = req.query;
  if (name) {
    let pokemonName = await pokemonsByName(name.toLocaleLowerCase());
    if (pokemonName.error) {
      throw new Error(pokemonName.error);
    } else {
      res.status(200).json(pokemonName);
    }
  } else {
    try {
      const allPokemons = await allPokemonsData();
      res.status(200).json(allPokemons);
    } catch (error) {
      res.status(400).json({ error: error.messagge });
    }
  }
};
module.exports = getAllPokemons;
