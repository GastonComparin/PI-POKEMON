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
  filteredtype: [],
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
      const vacio = state.filteredtype.length;
      let filteredPokemons;
      if (vacio === 0) {
        console.log("No hay nada en double, vamos a aplicar el primer filtro");
        if (action.payload === "ALL") {
          filteredPokemons = state.allPokemonsFilter;
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        } else if (action.payload === "API") {
          filteredPokemons = state.allPokemonsFilter.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        } else if (action.payload === "DB") {
          filteredPokemons = state.allPokemonsFilter.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
            doubleFilter: filteredPokemons,
          };
        }
        return {
          ...state,
          pokemon: [...filteredPokemons],
        };
      } else {
        console.log(
          "Ya tiene el primer filtro de type, asique arreglamos source"
        );
        if (action.payload === "ALL") {
          filteredPokemons = state.filteredtype;
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        } else if (action.payload === "API") {
          filteredPokemons = state.filteredtype.filter(
            (poke) => !isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        } else if (action.payload === "DB") {
          filteredPokemons = state.filteredtype.filter((poke) =>
            isNaN(poke.id)
          );
          return {
            ...state,
            pokemon: filteredPokemons,
          };
        }
        return {
          ...state,
          pokemon: filteredPokemons,
        };
      }

    case FILTER_BY_TYPE:
      let filteredTypePokemons;
      if (state.doubleFilter.length > 0) {
        console.log("tiene algo en el double asique vamos a combinar");
        if (action.payload === "ALL") {
          filteredTypePokemons = state.doubleFilter;
        } else {
          filteredTypePokemons = state.doubleFilter.filter((poke) =>
            poke.types.includes(action.payload)
          );
          return {
            ...state,
            pokemon: filteredTypePokemons,
            filteredtype: filteredTypePokemons,
          };
        }
        return {
          ...state,
          pokemon: [...filteredTypePokemons],
        };
      } else {
        console.log(
          "no hay nada en el double, asique vamos a aplicar solo type"
        );
        if (action.payload === "ALL") {
          filteredTypePokemons = state.allPokemonsFilter;
        } else {
          filteredTypePokemons = state.allPokemonsFilter.filter((poke) =>
            poke.types.includes(action.payload)
          );
          return {
            ...state,
            pokemon: filteredTypePokemons,
            filteredtype: filteredTypePokemons,
          };
        }
        return {
          ...state,
          pokemon: [...filteredTypePokemons],
          filteredtype: filteredTypePokemons,
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
