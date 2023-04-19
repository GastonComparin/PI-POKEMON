import React from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const RefreshButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getPokemons());
  };

  return (
    <button onClick={handleClick}>Restablecer</button>
  );
};

export default RefreshButton;