const { Router } = require("express");
const pokemonRouter = require("./pokemonRouter");
const typeRoutes = require("./typeRoutes");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemonRouter);
router.use("/types", typeRoutes);

module.exports = router;
