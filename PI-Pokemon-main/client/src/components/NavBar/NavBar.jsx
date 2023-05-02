import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.botones}>
        <Link to="/home">Home</Link>
      </div>
      <div className={style.botones}>
        <Link to="/create">Create!</Link>
      </div>

      <SearchBar />
      <div className={style.botones}>
        <Link to="/About">About</Link>
      </div>
      <div className={style.botones}>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default NavBar;
