import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={style.generalContainer}>
      <div className={style.container}>
        <img
          className={style.image}
          src="https://i.postimg.cc/43DG6P8q/pngegg-1.png"
          alt=""
        />
        <Link to="/home">
          <button className={style.button}>ENTRAR</button>
        </Link>
      </div>

      <h3> Desarrollada por Gaston Comparin - FT36a</h3>
      <div className={style.r}>
        <a
          style={{ color: "#122620" }}
          href="https://github.com/GastonComparin"
          target="_blank"
          onMouseOver={(e) => (e.target.style.color = "#d6ad60")}
          onMouseOut={(e) => (e.target.style.color = "#122620")}
        >
          <img src="https://i.postimg.cc/QtsckBfk/pngwing-com-6.png" alt="" />
        </a>

        <a
          style={{ color: "#122620" }}
          href="https://www.linkedin.com/in/gaston-comparin-34607925a/"
          target="_blank"
          onMouseOver={(e) => (e.target.style.color = "#d6ad60")}
          onMouseOut={(e) => (e.target.style.color = "#122620")}
        >
          <img
            className={style.redes}
            src="https://i.postimg.cc/pr3N3thC/pngwing-com-2.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default Landing;
