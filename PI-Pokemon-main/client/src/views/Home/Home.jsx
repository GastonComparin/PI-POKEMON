import style from "./Home.module.css";
import Pagination from "./Pagination";
import Filter from "../../components/Filters/Filter";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import RefreshButton from "../../components/Refresh/Refresh";
import {
  getPokemons,
  orderByName,
  orderByAttack,
  getTypes,
} from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");

  //* BAJAR ESTADO
  const pokemon = useSelector((state) => state.pokemon);
  //*PAGINACION
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  //!FUNCIONES
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleOrderName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleOrderAttack = (event) => {
    event.preventDefault();
    dispatch(orderByAttack(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };

  return (
    <div className={style.container}>
      <h1>POKEMON</h1>
      <RefreshButton />
      <Filter />
    
      <label>Ordenar alfabeticamente</label>
      <select
        onChange={(event) => {
          handleOrderName(event);
        }}
      >
        <option value="asc"> ASCENDENTE </option>
        <option value="desc"> DESCENDENTE </option>
      </select>
      <label>Ordenar por daño</label>
      <select
        onChange={(event) => {
          handleOrderAttack(event);
        }}
      >
        <option value="asc"> ASCENDENTE </option>
        <option value="desc"> DESCENDENTE </option>
      </select>
      <Pagination
        totalPages={Math.ceil(pokemon.length / cardsPerPage)}
        currentPage={currentPage}
        handleClick={handleClick}
      />
      <CardsContainer cardsPerPage={cardsPerPage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
