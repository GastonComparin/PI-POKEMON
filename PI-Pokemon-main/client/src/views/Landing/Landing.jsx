import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <button>ENTRAR</button>
      </Link>
      <div className={style.contenedor}>
        <h1>POR IMPLEMENTAR</h1>
        <div className={style.faltantes}>
          <ul>
            <h3>EN HOME</h3>
            <li>1- SearchBar</li>
           

            <li>4- Estilos</li>
          </ul>
          <ul>
            <h3>EN DETAIL</h3>
            <li>Mostrar la informacion especifica de cada pokemon</li>
            <li>Estilos</li>
          </ul>
          <ul>
            <h3>EN FORM</h3>
            <li>Validaciones en los campos</li>
            <li>
              Notificaiones cuando se crea.. (tal vez mostrar un mensaje para ir
              a ver el creado)
            </li>
            <li>Estilos</li>
          </ul>
          <ul>
            <h3>TESTING</h3>
            <li>Aprender..</li>
          </ul>
        </div>
        <h1>workflow</h1>
        <h3>lunes.. filtros y orden // searchbar</h3>
        <h3>martes.. serachbar // detail</h3>
        <h3>miercoles.. validacion del form</h3>
      </div>
    </div>
  );
};
export default Landing;
