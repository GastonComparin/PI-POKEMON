const { Router } = require("express");
const pokemonRouter = Router();

//! HANDLERS
const getPokemonById = require("../Handlers/getPokemonById");
const getAllPokemons = require("../Handlers/getAllPokemons");

const createNewPokemon = require("../Handlers/createNewPokemon");
const deleteMyPokemon = require("../Handlers/deleteMyPokemon");
const updateMyPokemon = require("../Handlers/updateMyPokemon");

//!RUTAS

pokemonRouter.get("/", getAllPokemons);

pokemonRouter.get("/:id", getPokemonById);

pokemonRouter.post("/", createNewPokemon);

pokemonRouter.delete("/delete/:id", deleteMyPokemon);

pokemonRouter.put("/update", updateMyPokemon);

module.exports = pokemonRouter;
