const { Pokemon, Type } = require("../../db");
const axios = require("axios");

const pokemonsById = async (id, source) => {
  if (source === "db") {
    const pokemonDB = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          types: [],
        },
      },
    });
    const pkmdb = {
      id: pokemonDB.dataValues.id,
      name: pokemonDB.dataValues.name,
      height:pokemonDB.dataValues.height,
      weight: pokemonDB.dataValues.weight,
      health: pokemonDB.dataValues.health,
      attack: pokemonDB.dataValues.attack,
      defense: pokemonDB.dataValues.defense,
      speed: pokemonDB.dataValues.speed,
      image: pokemonDB.dataValues.image,
      createdInDb: pokemonDB.created,
    };
    console.log(pkmdb);
    return pkmdb;
  }

  const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (pokemonApi.data) {
    const pokemon = pokemonApi.data;

    const pkmApi = {
      id: id,
      name: pokemon.name,
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
    console.log(pkmApi);
    return pkmApi;
  }
};

module.exports = pokemonsById;