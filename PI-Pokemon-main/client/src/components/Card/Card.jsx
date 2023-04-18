import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={style.container}>
      <Link to={`/detail/${props.id}`}>
        <p className={style.p}> {props.name}</p>
      </Link>
      <p className={style.p}>Types: {props.types}</p>
      <p>attack: {props.attack}</p>
      <img src={props.image} alt="Pokemon " />
    </div>
  );
};
export default Card;
