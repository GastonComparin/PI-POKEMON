import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName, getPokemonsById } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(name)) {
      dispatch(getPokemonsById(name));
    } else {
      dispatch(getPokemonsByName(name));
    }
    setName("");
  };

  return (
    <div className={style.container}>
      <h4>Search your pokemon</h4>

      <input
        type="text"
        onChange={(e) => {
          handleInputChange(e);
        }}
        className={style.input}
      />
      <button
        className={style.button}
        onClick={(e) => {
          handleInputSubmit(e);
        }}
      >
        search{" "}
      </button>
    </div>
  );
};
export default SearchBar;
