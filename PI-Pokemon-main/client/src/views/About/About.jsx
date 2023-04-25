import style from "./About.module.css";
const About = () => {
  return (
    <div>
      <div className={style.about}>
        ¡Hola! Estoy emocionado de compartir contigo mi experiencia en la
        creación de mi proyecto individual, que se centró en la temática de
        Pokémon y la construcción de una Single Page Application utilizando
        tecnologías como React, Redux, Node, Express y Sequelize.
        <br /> Uno de mis principales objetivos era aplicar recursos básicos de
        estilos y diseño para mejorar la experiencia del usuario. Para lograr
        esto, utilicé herramientas como CSS para crear una interfaz de usuario
        atractiva y fácil de usar. <br />
        En cuanto a las funciones de mi aplicación, busqué hacerla lo más
        completa posible. Por lo tanto, implementé características que permiten
        a los usuarios buscar, visualizar, filtrar y ordenar los diferentes
        tipos de Pokémon en la aplicación. Además, desarrollé funciones para
        crear nuevos pokemones, editarlos y eliminarlos, lo que permite a los
        usuarios agregar sus propios Pokémon personalizados a la aplicación.
        <br />
        Para lograr estas funciones, utilicé tecnologías como React y Redux para
        el front-end, mientras que en el back-end utilicé Node, Express y
        Sequelize para acceder y administrar los datos de la API pokeapi.
        Además, implementé el uso de Git y GitHub para controlar las versiones
        de mi proyecto y asegurarme de que siempre tuviera una copia de
        seguridad. <br />
        En definitiva, mi proyecto individual me permitió poner en práctica y
        consolidar mis habilidades en el desarrollo web, además de utilizar
        tecnologías avanzadas como React, Redux, Node, Express y Sequelize para
        crear una aplicación web completa y funcional. También me brindó la
        oportunidad de aprender nuevas herramientas y prácticas como el uso de
        Git y GitHub para el control de versiones, lo que sin duda me será de
        gran ayuda en mi carrera como desarrollador web.
        <br /> Estoy emocionado por seguir mejorando y aprendiendo, y confío en
        que este proyecto individual será el punto de partida para muchos otros
        proyectos desafiantes y emocionantes en el futuro.
        <br />
        <br />
        Desarrollada por Gaston Comparin comisión ft36a
        <br />
        <div className={style.redes}>
          <a
            style={{ color: "#122620" }}
            href="https://github.com/GastonComparin"
            target="_blank"
            onMouseOver={(e) => (e.target.style.color = "#d6ad60")}
            onMouseOut={(e) => (e.target.style.color = "#122620")}
          >
            GitHub
          </a>
          <a
            style={{ color: "#122620" }}
            href="https://www.linkedin.com/in/gaston-comparin-34607925a/"
            target="_blank"
            onMouseOver={(e) => (e.target.style.color = "#d6ad60")}
            onMouseOut={(e) => (e.target.style.color = "#122620")}
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
