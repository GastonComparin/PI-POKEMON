import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ cardsPerPage, currentPage }) => {
  const pokemon = useSelector((state) => state.pokemon);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  let currentCards;
  if (Array.isArray(pokemon)) {
    currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);
  } else {
    currentCards = [pokemon];
  }

 
  return (
    <div className={style.container}>
      {currentCards.map((poke) => {
       
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
      })}
    </div>
  );
};

export default CardsContainer;
