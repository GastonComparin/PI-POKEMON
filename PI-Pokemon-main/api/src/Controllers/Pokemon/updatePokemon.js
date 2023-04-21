const { Pokemon, Type } = require("../../db");
const defaultImage = "https://acortar.link/SOo074";
let updatePokemon = async (
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
  let pokemonToUpdate = await Pokemon.findOne({ where: { id: id } });
  let updates = {};
  if (name !== undefined) {
    updates.name = name;
  }
  if (image !== undefined) {
    updates.image = image;
  }
  if (health !== undefined) {
    updates.health = health;
  }
  if (attack !== undefined) {
    updates.attack = attack;
  }
  if (defense !== undefined) {
    updates.defense = defense;
  }
  if (speed !== undefined) {
    updates.speed = speed;
  }
  if (height !== undefined) {
    updates.height = height;
  }
  if (weight !== undefined) {
    updates.weight = weight;
  }
  await pokemonToUpdate.update({
    name: name,
    image: image ? image : defaultImage,
    health: health,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
  });
  if (types) {
    await pokemonToUpdate.setTypes([]);
    let postTypes = await Type.findAll({ where: { name: types } });
    await pokemonToUpdate.addType(postTypes);
  }

  return "Successfully updated pokemon";
};

module.exports = updatePokemon;
