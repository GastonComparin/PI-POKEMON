import { filterSource, filterType } from "../../redux/actions";
import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  const handleFilterCreated = (event) => {
    dispatch(filterSource(event.target.value));
  };

  const getTypesFiltered = (event) => {
    dispatch(filterType(event.target.value));
  };

  return (
    <div>
      <label className={style.label}>SOURCE: </label>

      <select
        id="filterSource"
        className={style.select}
        onChange={(e) => {
          handleFilterCreated(e);
        }}
      >
        <option>ALL</option>
        <option>API</option>
        <option>DB</option>
      </select>

      <label className={style.label}>TYPE: </label>
      <select
        id="filterType"
        onChange={getTypesFiltered}
        className={style.select}
      >
        <option>ALL</option>
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
