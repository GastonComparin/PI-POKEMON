import { useState } from "react";
import axios from "axios";
import { validate } from "./Validation";
import style from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });
  const opciones = [
    "rock",
    "water",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "bug",
    "ghost",
    "steel",
    "fire",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const changeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const fieldErrors = validate(field, value);
    setErrors({ ...errors, [field]: fieldErrors[field] });
    setForm({ ...form, [field]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const types = selectedTypes();
    form.types = types;

    if (
      !errors.name &&
      !errors.attack &&
      !errors.defense &&
      !errors.health &&
      !errors.height &&
      !errors.speed &&
      !errors.weight &&
      errors.image === "" &&
      types.length > 0
    ) {
      axios
        .post("http://localhost:3001/pokemon", form)
        .then((res) => {
          alert("Pokemon creado correctamente");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;

            alert("Debe completar los campos obligatorios");
          } else {
            alert(`Error: ${error.message}`);
          }
        });
    } else if (errors.name) {
      alert("hay un error en el name");
    } else if (errors.attack) {
      alert("hay error en el campo attack");
    } else if (errors.defense) {
      alert("hay error en el campo defense");
    } else if (errors.health) {
      alert("hay error en el campo health");
    } else if (errors.height) {
      alert("hay error en el campo height");
    } else if (errors.speed) {
      alert("hay error en el campo speed");
    } else if (errors.weight) {
      alert("hay error en el campo weight");
    } else if (errors.image) {
      alert("hay error en el campo image");
    } else if (errors.types) {
      alert("debe seleccionar al menos un type");
    }
  };
  const selectedTypes = () => {
    const checkboxes = document.getElementsByName("opciones");
    const valoresSeleccionados = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        valoresSeleccionados.push(checkboxes[i].value);
      }
    }
    return valoresSeleccionados;
  };

  const handleRandom = () => {
    const nombresPokemon = [
      "Sparkleash",
      "Florafin",
      "Frosquid",
      "Stonewyrm",
      "Nightwingle",
    ];
    const maxStat = 100;
    const minStat = 0;

    setForm({
      name: nombresPokemon[Math.floor(Math.random() * nombresPokemon.length)],
      health: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      attack: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      defense: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      speed: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      height: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      weight: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      image: "https://placehold.it/200x200",
    });
  };
  return (
    <div className={style.generalContainer}>
      <h1 className={style.titulo}>Create your Pokemon!</h1>
      <button className={style.button} onClick={handleRandom}>
        randomize
      </button>
      <div className={style.container}>
        <form onSubmit={submitHandler}>
          <div className={style.dataContainer}>
            <div className={style.campo}>
              <label className={style.label}>Name</label>
              <br />
              <input
                className={style.input}
                name="name"
                type="text"
                value={form.name}
                onChange={changeHandler}
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>
            <div className={style.campo}>
              <label className={style.label}>health</label>
              <br />
              <input
                name="health"
                type="text"
                value={form.health}
                onChange={changeHandler}
              />
              {errors.health && (
                <div style={{ color: "red" }}>{errors.health}</div>
              )}
            </div>

            <div className={style.campo}>
              <label className={style.label}>attack</label>
              <br />
              <input
                name="attack"
                type="text"
                value={form.attack}
                onChange={changeHandler}
              />
              {errors.attack && (
                <div style={{ color: "red" }}>{errors.attack}</div>
              )}
            </div>
            <div className={style.campo}>
              <label className={style.label}>defense</label>
              <br />
              <input
                name="defense"
                type="text"
                value={form.defense}
                onChange={changeHandler}
              />
              {errors.defense && (
                <div style={{ color: "red" }}>{errors.defense}</div>
              )}
            </div>
            <div className={style.campo}>
              <label className={style.label}>speed</label>
              <br />
              <input
                name="speed"
                type="text"
                value={form.speed}
                onChange={changeHandler}
              />
              {errors.speed && (
                <div style={{ color: "red" }}>{errors.speed}</div>
              )}
            </div>
            <div className={style.campo}>
              <label className={style.label}>height</label>
              <br />
              <input
                name="height"
                type="text"
                value={form.height}
                onChange={changeHandler}
              />
              {errors.height && (
                <div style={{ color: "red" }}>{errors.height}</div>
              )}
            </div>
            <div className={style.campo}>
              <label className={style.label}>weight</label>
              <br />
              <input
                name="weight"
                type="text"
                value={form.weight}
                onChange={changeHandler}
              />
              {errors.weight && (
                <div style={{ color: "red" }}>{errors.weight}</div>
              )}
            </div>
          </div>
          <div className={style.campo}>
            <label className={style.label}>types</label>
            <br />

            {opciones.map((opcion) => (
              <div key={opcion}>
                <input
                  type="checkbox"
                  id={`opcion-${opcion}`}
                  name="opciones"
                  value={opcion}
                />
                <label htmlFor={`opcion-${opcion}`}>{opcion}</label>
              </div>
            ))}
          </div>
          <div className={style.campo}>
            <label className={style.label}>image</label>
            <br />
            <input
              name="image"
              type="text"
              value={form.image}
              onChange={changeHandler}
            />
            {errors.image && <div style={{ color: "red" }}>{errors.image}</div>}
          </div>
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
