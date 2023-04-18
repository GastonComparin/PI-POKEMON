const pokemonsById = require("../Controllers/Pokemon/pokemonsById");
const getPokemonById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "pokeapi";
  try {
    const pokemonid = await pokemonsById(id, source);
    if (pokemonid.error) {
      throw new Error(pokemonid.error);
    }
    res.status(200).json(pokemonid);
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};
module.exports = getPokemonById;