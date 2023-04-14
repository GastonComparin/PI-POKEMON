import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const pokemon = useSelector((state) => state.pokemon);
  return (
    <div className={style.container}>
      {pokemon.map((poke) => {
        return (
          <Card
          id={poke.id}
          name={poke.name}
          health={poke.health}
          attack={poke.attack}
          image={poke.image}
          types={poke.types}
          />

        );
      })}
    </div>
  );
};
export default CardsContainer;
