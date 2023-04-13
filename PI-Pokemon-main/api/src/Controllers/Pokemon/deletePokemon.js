const { Pokemon } = require("../../db");

let deletePokemon = async (id) => {
  let toDelete = await Pokemon.findOne({ where: { id: id } });
  if (!toDelete) {
    throw new Error("Pokemon not found");
  }
  await toDelete.destroy();
  return `Pokemon ${toDelete.name} successfully removed`;
};

module.exports = deletePokemon;
