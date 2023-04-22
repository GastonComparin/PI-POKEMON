import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderByName, orderByAttack } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");

  //! DEFINO LAS FUNCIONES
  const handleOrderName = (event) => {
    const order = event.target.value;
    dispatch(orderByName(event.target.value));
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleOrderAttack = (event) => {
    const order = event.target.value;
    dispatch(orderByAttack(event.target.value));
    setOrden(`Ordenado ${event.target.value}`);
  };
  return (
    <div>
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
    </div>
  );
};
export default Order;
