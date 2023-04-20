import { useEffect } from "react";
import { getPokemonDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.pokemonDetail);
  return (
    <div>
      <Link to="/home">
        <button className={style.close}>BACK</button>
      </Link>
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
  );
};

export default Detail;
