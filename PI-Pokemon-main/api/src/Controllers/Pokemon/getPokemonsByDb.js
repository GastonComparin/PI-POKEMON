const { Pokemon, Type } = require("../../db");

const getPokemonsDb = async () => {
  const pokemonDb = await Pokemon.findAll(
  );

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
      createdInDb: pokemon.created,
    };
  });
};

module.exports = getPokemonsDb;
