const { Router } = require("express");
const typeRouter = Router();
//!CONTROLLERS
const pokemonsType = require("../Controllers/Type/pokemonsTypes");

//!RUTAS
typeRouter.get("/", async (req, res) => {
  try {
    let allTypes = await pokemonsType();
    if (allTypes.error) throw new Error(allTypes.error);

    res.status(200).json(allTypes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = typeRouter;
