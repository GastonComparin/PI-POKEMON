import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ cardsPerPage, currentPage, isLoading }) => {
  const pokemon = useSelector((state) => state.pokemon);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  let currentCards;
  if (Array.isArray(pokemon)) {
    currentCards = pokemon?.slice(indexOfFirstCard, indexOfLastCard);
  } else {
    currentCards = [pokemon];
  }

  return (
    <div className={style.container}>
      {!currentCards?.length && !isLoading ? (
        <div>
          <p className={style.p}>No se encontraron pokemones</p>
          <iframe
            className={style.gif}
            title="loading"
            src="https://i.giphy.com/media/DRfu7BT8ZK1uo/giphy.webp"
            width="480"
            height="300"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        currentCards?.map((poke) => {
          return (
            <Card
              key={poke.id}
              id={poke.id}
              name={poke.name}
              health={poke.health}
              attack={poke.attack}
              image={poke.image}
              types={poke.types.join("-")}
            />
          );
        })
      )}
    </div>
  );
};

export default CardsContainer;
