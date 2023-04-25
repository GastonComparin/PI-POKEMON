import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const SEARCH_BY_ID = "SEARCH_BY_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const MODIFY_POKEMON = "MODIFY_POKEMON";


//!ACTIONS DE GET
export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/types");
    const types = apiData.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};
export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemon/");
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};
export const getPokemonsByName = (payload) => {
  return async function (dispatch) {
    const json = await axios.get(
      "http://localhost:3001/pokemon?name=" + payload
    );
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: json.data,
    });
  };
};
export const getPokemonsById = (payload) => {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/pokemon/" + payload);
    return dispatch({ type: SEARCH_BY_ID, payload: json.data });
  };
};
export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`);
    const pokemon = apiData.data;

    dispatch({ type: GET_POKEMON_DETAIL, payload: pokemon });
  };
};
//! ACTION CLEAN
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

//!ACTIONS DE FILTER
export const filterSource = (payload) => {
  return {
    type: FILTER_BY_SOURCE,
    payload,
  };
};
export const filterType = (types) => {
  return { type: FILTER_BY_TYPE, payload: types };
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
//!ACTION DELETE
export const deletePokemon = (id) => {
  return async function () {
    const deleted = await axios.delete(
      `http://localhost:3001/pokemon/delete/${id}`
    );
    return deleted;
  };
};
//!ACTION MODIFY
export const modifyPokemon = (id) => {
  return async function (dispatch) {
    const modified = await axios.get(`http://localhost:3001/pokemon/${id}`);
    return dispatch({ type: MODIFY_POKEMON, payload: modified.data });
  };
};
