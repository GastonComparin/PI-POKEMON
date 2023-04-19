const { Pokemon, Type, Op } = require("../../db");
const axios = require("axios");

const pokemonsByName = async (name) => {
  const nameDb = await Pokemon.findOne({
    whereDb: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: { types: [] },
    },
  });

  if (nameDb) {
    return {
      id: nameDb.id,
      name: nameDb.name,
      height: nameDb.height,
      weight: nameDb.weight,
      health: nameDb.hp,
      attack: nameDb.attack,
      defense: nameDb.defense,
      speed: nameDb.speed,
      image: nameDb.image,
      createdInDb: nameDb.createdInDb,
    };
  }

  const nameApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (nameApi.data) {
    const pokemon = nameApi.data;
    const pokeName = {
      name: name,
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      health: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      types: pokemon.types.map((el) => el.type.name),
      image: pokemon.sprites.other["official-artwork"].front_default,
      createdInDb: false,
    };

    return pokeName;
  }
};

module.exports = pokemonsByName;