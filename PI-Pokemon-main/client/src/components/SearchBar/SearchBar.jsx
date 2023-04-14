import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={style.container}>
      <h4>Search your pokemon</h4>
      <input type="text" className={style.input} />
      <button>search </button>
    </div>
  );
};
export default SearchBar;
