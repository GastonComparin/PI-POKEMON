import { filterSource, getPokesFilteredTypes } from "../../redux/actions";
import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);
  const handleFilterCreated = (event) => {
    dispatch(filterSource(event.target.value));
  };

  const getTypesFiltered = (event) => {
    dispatch(getPokesFilteredTypes(event.target.value));
  };

  return (
    <div>
      <label className={style.label}>SOURCE: </label>

      <select
        className={style.select}
        onChange={(e) => {
          handleFilterCreated(e);
        }}
      >
        <option>API</option>
        <option>DB</option>
      </select>

      <label className={style.label}>TYPE: </label>
      <select onChange={getTypesFiltered} className={style.select}>
        <option>TODOS</option>
        {types.map((types) => {
          return (
            <option key={types.name} value={types.name}>
              {types.name.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Filter;
