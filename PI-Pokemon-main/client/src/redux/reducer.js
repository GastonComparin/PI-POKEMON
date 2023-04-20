import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  FILTER_BY_SOURCE,
  GET_TYPES,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
} from "./actions";

const initialState = {
  pokemon: [],
  types: [],
  allPokemonsFilter: [],
  pokemonDetail: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //!CASOS GET
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        allPokemonsFilter: action.payload,
      };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    //!CASOS SEARCH
    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SEARCH_BY_ID:
      return { ...state, pokemon: action.payload };
    //!CASOS DE FILTRADO
    case FILTER_BY_SOURCE:
      if (action.payload === "API") {
        return {
          ...state,
          pokemon: [
            ...state.allPokemonsFilter.filter((poke) => !isNaN(poke.id)),
          ],
        };
      } else if (action.payload === "DB") {
        return {
          ...state,
          pokemon: [
            ...state.allPokemonsFilter.filter((poke) => isNaN(poke.id)),
          ],
        };
      } else {
        return {
          ...state,
          pokemon: state.allPokemonsFilter.map((g) => g),
        };
      }
    case FILTER_BY_TYPE:
      let filteredPokemons;
      if (action.payload === "TODOS") {
        filteredPokemons = state.allPokemonsFilter;
      } else {
        filteredPokemons = state.allPokemonsFilter.filter((poke) => {
          return poke.types.includes(action.payload);
        });
      }
      return {
        ...state,
        pokemon: [...filteredPokemons],
      };

    //!CASOS DE ORDEN
    case ORDER_BY_NAME:
      let orderName =
        action.payload === "asc"
          ? state.pokemon.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemon.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemon: orderName,
      };
    case ORDER_BY_ATTACK:
      let orderAttack =
        action.payload === "asc"
          ? state.pokemon.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : state.pokemon.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemon: orderAttack,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;

//! codigo anteiro
