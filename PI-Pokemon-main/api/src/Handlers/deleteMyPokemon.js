const deletePokemon = require("../Controllers/Pokemon/deletePokemon");
const deleteMyPokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const toDelete = await deletePokemon(id);
    res.status(200).json(toDelete);
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};
module.exports = deleteMyPokemon;
