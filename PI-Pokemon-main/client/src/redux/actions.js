import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_POKES_FILTERED_TYPES = "GET_POKES_FILTERED_TYPES";
//!ACTIONS DE GET
export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemon");
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};
export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/types");
    const types = apiData.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};
//!ACTIONS DE FILTER
export const filterSource = (payload) => {
  return {
    type: FILTER_BY_SOURCE,
    payload,
  };
};
export const getPokesFilteredTypes = (types) => {
  return { type: GET_POKES_FILTERED_TYPES, payload: types };
};
//!ACTIONS DE ORDER
export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};
export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};
//!ACTIONS DE DETAIL
export const getPokemonDetail = (detailId) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemon/${detailId}`
    );
    const pokemon = apiData.data;

    dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
  };
};
