import React from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
import style from "./Refresh.module.css";

const RefreshButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemons());
  };

  return <button className={style.button} onClick={handleClick}>Reset</button>;
};

export default RefreshButton;
