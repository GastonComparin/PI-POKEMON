import { useEffect } from "react";
import {
  cleanDetail,
  getPokemonDetail,
  deletePokemon,
  modifyPokemon,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deletePokemon(id));
    return alert("Pokemon eliminado correctamente");
  };
  const handleModify = (id) => {
    dispatch(modifyPokemon(pokemon.id));
  };
console.log(pokemon.name);
console.log(pokemon.types);
  return (
    <div>
      {pokemon?.name ? (
        <div>
          <Link to="/home">
            <button className={style.close}>BACK</button>
          </Link>
          {isNaN(pokemon.id) ? (
            <Link to="/home">
              <button onClick={handleDelete} className={style.delete}>
                DELETE
              </button>
            </Link>
          ) : (
            <div />
          )}
          {isNaN(pokemon.id) ? (
            <Link to={`/update/${pokemon.id}`}>
              <button onClick={handleModify} className={style.modify}>
                MODIFY
              </button>
            </Link>
          ) : (
            <div />
          )}
          <div className={style.general}>
            <div className={style.containerdata}>
              <p className={style.id}> {pokemon?.id}</p>
              <p className={style.titulo}> {pokemon?.types}</p>
              <p className={style.titulo}> {pokemon?.name}</p>
            </div>
            <div className={style.container}>
              <img src={pokemon.image} alt="pokemon" className={style.image} />
              <div className={style.containerStats}>
                <p className={style.titulo}>STATS </p>
                <p className={style.stats}>Health: {pokemon.health}</p>
                <p className={style.stats}>Attack: {pokemon.attack}</p>
                <p className={style.stats}>Defense: {pokemon.defense}</p>
                <p className={style.stats}>Speed: {pokemon?.speed}</p>
                <p className={style.stats}>Height: {pokemon?.height}</p>
                <p className={style.stats}>weight: {pokemon?.weight}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className={style.loading}>
          <iframe
          title="loading"
            src=" https://i.giphy.com/media/DRfu7BT8ZK1uo/giphy.webp"
            width="480"
            height="300"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </h3>
      )}
    </div>
  );
};

export default Detail;
