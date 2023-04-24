import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderByName, orderByAttack } from "../../redux/actions";
import style from "../Filters/Filter.module.css";
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
      <label className={style.label}>Sort alph.</label>
      <select
        className={style.select}
        onChange={(event) => {
          handleOrderName(event);
        }}
      >
        <option>UNSORTED</option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>


      <label className={style.label}>Sort by AP</label>
      <select
        className={style.select}
        onChange={(event) => {
          handleOrderAttack(event);
        }}
      >
        <option>UNSORTED</option>
        <option value="asc"> 0 - 100 </option>
        <option value="desc"> 100 - 0 </option>
      </select>
    </div>
  );
};
export default Order;
