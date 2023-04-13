const { Type } = require("../../db");
const axios = require("axios");

const pokemonsType = async () => {
  try {
    let types = await Type.findAll({ attributes: ["id", "name"] });
    if (!types.length) {
      const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
      types = getTypes.data.results;
      for (const type of types) {
        const url = await axios.get(type.url);
        delete type.url;
        type.id = url.data.id;
        if (url.data.damage_relations.double_damage_from.length !== 0) {
          type.debility = url.data.damage_relations.double_damage_from.map(
            (el) => el.name
          );
        }
      }
      await Type.bulkCreate(types);
    }
    return types;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = pokemonsType;
