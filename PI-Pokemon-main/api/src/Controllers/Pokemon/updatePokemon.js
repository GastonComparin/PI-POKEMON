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
  try {
    let pokemonToUpdate = await Pokemon.findOne({ where: { id: id } });

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
  } catch (error) {
    return "Error updating pokemon";
  }
};

module.exports = updatePokemon;
