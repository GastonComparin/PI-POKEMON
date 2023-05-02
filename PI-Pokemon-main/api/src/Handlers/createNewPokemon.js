const createPokemon = require("../Controllers/Pokemon/createPokemon");

const createNewPokemon = async (req, res) => {
  const {
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
    const newPokemon = await createPokemon(
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
    res
      .status(201)
      .json({
        message: "El pokemon se creó correctamente",
        pokemon: newPokemon,
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = createNewPokemon;
