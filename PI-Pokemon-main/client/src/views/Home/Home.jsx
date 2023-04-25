import style from "./Home.module.css";
import Pagination from "./Pagination";
import Filter from "../../components/Filters/Filter";
import Order from "../../components/Order/Order";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import RefreshButton from "../../components/Refresh/Refresh";
import { getPokemons, getTypes } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ match }) => {
  const dispatch = useDispatch();

  const gifs = [
    "https://i.giphy.com/media/h2zhIZFmeueAw/giphy.webp",
    "https://i.giphy.com/media/ukpwkOzk6kafXwfwbH/giphy.webp",
    "https://i.giphy.com/media/lM86pZcDxfx5e/giphy.webp",
    "https://i.giphy.com/media/428dIJljoEbxS/giphy.webp",
  ];

  //* BAJAR ESTADO
  const pokemon = useSelector((state) => state.pokemon);
  const [isLoading, setIsLoading] = useState(true);
  const [gifIndex, setGifIndex] = useState(0);
  //*PAGINACION
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons()).then(() => setIsLoading(false));
    setGifIndex(Math.floor(Math.random() * gifs.length));
  }, [dispatch, gifs.length]);

  //!FUNCIONES
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div>
      <div>
        <h1>
          <img
            className={style.image}
            src="https://i.postimg.cc/43DG6P8q/pngegg-1.png"
            alt=""
          />
        </h1>
        <div className={style.container}>
          <div className={style.options}>
            <Filter />
            <Order />
          </div>
          <div className={style.movement}>
            <Pagination
              totalPages={Math.ceil(pokemon.length / cardsPerPage)}
              currentPage={currentPage}
              handleClick={handleClick}
            />
            <RefreshButton />
          </div>

          <div className={style.optionsContainer}>
            <CardsContainer
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <p className={style.gif}>
          <iframe
            title="loading"
            src={gifs[gifIndex]}
            width="480"
            height="300"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </p>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
