const { Pokemon, Type } = require("../../db");
const defaultImage = "https://i.postimg.cc/Qdwz52bZ/defaultimage-1.jpg";

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
  } else {
    const newpkm = await Pokemon.create({
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
    const typeDb = await Type.findAll({
      where: {
        name: types,
      },
    });
    newpkm.addType(typeDb);
    tipo = typeDb.map((elem) => elem.name);

    return `Successfully created pokemon, with id: ${newpkm.id} and type: ${tipo}`;
  }
};

module.exports = createPokemon;
