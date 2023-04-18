import { useEffect } from "react";
import { getPokemonDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <p>Nombre: {pokemon?.name}</p>
        <p>id: {pokemon?.id}</p>
        <p>Health: {pokemon?.health}</p>
        <p>Attack: {pokemon?.attack}</p>
      </div>
    </div>
  );
};

export default Detail;
