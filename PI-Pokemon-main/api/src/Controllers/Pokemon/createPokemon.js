const { Pokemon, Type } = require("../../db");
const defaultImage = "https://acortar.link/SOo074";

let createPokemon = async (
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
) => {
  const findedPoke = await Pokemon.findOne({ where: { name: name } });
  if (findedPoke) {
    throw new Error("That pokemon has already been created");
  }
  await Pokemon.create({
    id,
    name,
    health,
    attack,
    defense,
    height,
    weight,
    speed,
    types,
    image: image ? image : defaultImage,
  });
  return `Successfully created pokemon, with id: ${id}`;
};

module.exports = createPokemon;
