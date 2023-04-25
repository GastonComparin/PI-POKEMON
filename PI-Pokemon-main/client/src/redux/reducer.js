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
  CLEAN_DETAIL,
  DELETE_POKEMON,
  MODIFY_POKEMON,

} from "./actions";

const initialState = {
  pokemon: [],
  types: [],
  allPokemonsFilter: [],
  pokemonDetail: [],
  doubleFilter: [],
  modifiedPokemon: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //!CASOS GET
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        allPokemonsFilter: action.payload,
        doubleFilter: [],
      };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
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

      //? si no hay un filtro aplicado vamos por aca
      if (!state.doubleFilter.length > 0) {

        let filteredPokemons;
        if (action.payload === "ALL") {
          filteredPokemons = state.allPokemonsFilter;
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        } else if (action.payload === "API") {
          filteredPokemons = state.allPokemonsFilter.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        } else if (action.payload === "DB") {
          filteredPokemons = state.allPokemonsFilter.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        return {
          ...state,
          doubleFilter: [...filteredPokemons],
        };

        //? si hay un filtro aplicado vamos por aca

      } else {
        let filteredPokemons;
        if (action.payload === "ALL") {
          filteredPokemons = state.doubleFilter;
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        if (action.payload === "API") {
          filteredPokemons = state.doubleFilter.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        } else if (action.payload === "DB") {
          filteredPokemons = state.doubleFilter.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        return {
          ...state,
          pokemon: [...filteredPokemons],
          doubleFilter: [...filteredPokemons],
        };
      }

    case FILTER_BY_TYPE:

      //? si no hay un filtro aplicado vamos por aca
      if (!state.doubleFilter.length > 0) {
        let filteredPokemons;
        if (action.payload === "ALL") {
          filteredPokemons = state.allPokemonsFilter;
        } else {
          filteredPokemons = state.allPokemonsFilter.filter((poke) => {
            return poke.types.includes(action.payload);
          });
        }
        return {
          ...state,
          pokemon: [...filteredPokemons],
          doubleFilter: [...filteredPokemons],
        };
        //? si hay un filtro aplicado vamos por aca
      } else {
        let filteredPokemons;
        if (action.payload === "ALL") {
          filteredPokemons = state.allPokemonsFilter;
        } else {
          filteredPokemons = state.allPokemonsFilter.filter((poke) => {
            return poke.types.includes(action.payload);
          });
        }
        return {
          ...state,
          pokemon: [...filteredPokemons],
          doubleFilter: [...filteredPokemons],
        };
      }
    //!CASOS DE ORDEN
    case ORDER_BY_NAME:
      let orderName;
      action.payload === "asc"
        ? (orderName = state.pokemon.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          }))
        : (orderName = state.pokemon.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          }));
      return {
        ...state,
        pokemon: [...orderName],
      };
    case ORDER_BY_ATTACK:
      let orderAttack;
      action.payload === "asc"
        ? (orderAttack = state.pokemon.sort(function (a, b) {
            if (a.attack > b.attack) {
              return -1;
            }
            if (b.attack > a.attack) {
              return 1;
            }
            return 0;
          }))
        : (orderAttack = state.pokemon.sort(function (a, b) {
            if (a.attack > b.attack) {
              return 1;
            }
            if (b.attack > a.attack) {
              return -1;
            }
            return 0;
          }));

      return {
        ...state,
        pokemon: [...orderAttack],
      };

    case DELETE_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.filter((el) => el.id !== action.payload),
        allPokemonsFilter: state.allPokemonsFilter.filter(
          (el) => el.id !== action.payload
        ),
      };
    case MODIFY_POKEMON:
      state.modifiedPokemon = action.payload;
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
