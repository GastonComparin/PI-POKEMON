const updatePokemon = require("../Controllers/Pokemon/updatePokemon");
const updateMyPokemon = async (req, res) => {
  let {
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
  } = req.body;
  try {
    let pokemonUpdate = await updatePokemon(
      id,
      name,
      image,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    res.status(200).json(pokemonUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = updateMyPokemon;
