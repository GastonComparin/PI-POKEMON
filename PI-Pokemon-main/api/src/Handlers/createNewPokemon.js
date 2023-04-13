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

  if (
    !name ||
    !health ||
    !attack ||
    !defense ||
    !speed ||
    !height ||
    !weight ||
    !types
  ) {
    throw new Error("Missing parameters");
  }

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
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ erorr: error.message });
  }
};
module.exports = createNewPokemon;
