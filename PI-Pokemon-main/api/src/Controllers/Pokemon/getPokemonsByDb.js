const { Pokemon, Type } = require("../../db");

const getPokemonsDb = async () => {
  const pokemonDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        types: [],
      },
    },
  });
  return pokemonDb.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      health: pokemon.health,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      image: pokemon.image,
      types: pokemon.types.map((type) => type.name),
      createdInDb: pokemon.created,
    };
  });
};

module.exports = getPokemonsDb;
