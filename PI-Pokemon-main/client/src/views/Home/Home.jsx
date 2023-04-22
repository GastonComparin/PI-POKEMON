import style from "./Home.module.css";
import Pagination from "./Pagination";
import Filter from "../../components/Filters/Filter";
import Order from "../../components/Order/Order";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import RefreshButton from "../../components/Refresh/Refresh";
import { getPokemons, getTypes } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

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

  return (
    <div>
      <h1>POKEMON</h1>

      <div>
        <div className={style.container}>
          <RefreshButton />
          <Filter />
          <Order />
          <Pagination
            totalPages={Math.ceil(pokemon.length / cardsPerPage)}
            currentPage={currentPage}
            handleClick={handleClick}
          />
          <CardsContainer
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
