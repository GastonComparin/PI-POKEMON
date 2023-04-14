import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={style.container}>
      <Link to="/detail">
        <p className={style.p}> {props.name}</p>
      </Link>
      <p className={style.p}>Types: {props.types}</p>
      <img src={props.image} alt="Pokemon " />
    </div>
  );
};
export default Card;
