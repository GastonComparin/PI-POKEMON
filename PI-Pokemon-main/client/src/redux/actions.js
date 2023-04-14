import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemon");
    const pokemon = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemon });
  };
};
