import { useEffect, useState } from "react";
import axios from "axios";
import { validate } from "../Form/Validation";
import style from "../Form/Form.module.css";
import { useSelector } from "react-redux";

const Update = () => {
  const currentUrl = window.location.href;
  const id = currentUrl.split("/").pop();
  const willModify = useSelector((state) => state.modifiedPokemon);
  const [info, setInfo] = useState(false);
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
  useEffect(() => {
    setForm({
      name: willModify.name,
      health: willModify.health,
      attack: willModify.attack,
      defense: willModify.defense,
      speed: willModify.speed,
      height: willModify.height,
      weight: willModify.weight,
      types: willModify.types,
      image: willModify.image,
    });
  }, [willModify]);

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

  const changeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const fieldErrors = validate(field, value);
    setErrors({ ...errors, [field]: fieldErrors[field] });
    setForm({ ...form, [field]: value });
  };

  const submitHandler = () => {
    const object = objectLoader();
    if (form.types.length !== 0) {
      axios
        .put(`http://localhost:3001/pokemon/update/`, object)
        .then((res) => {
          alert("Pokemon actualizado correctamente correctamente");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            alert("Debe completar los campos obligatorios");
          }
        });
    } else {
      alert("Debe seleccionar al menos un type");
    }
  };
  const objectLoader = () => {
    const types = selectedTypes();
    form.types = types;
    const object = {
      id: id,
      name: form.name,
      health: form.health,
      attack: form.attack,
      defense: form.defense,
      speed: form.speed,
      height: form.height,
      weight: form.weight,
      types: form.types,
      image: form.image,
    };
    return object;
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
  return (
    <div className={style.generalContainer}>
      <h1 className={style.titulo}>Update your Pokemon!</h1>
      <div className={style.container}>
        <form onSubmit={submitHandler}>
          <div className={style.dataContainer}>
            <div className={style.campoid}>
              <label className={style.label}>ID</label>
              <br />
              <input
                className={style.input}
                name="id"
                type="text"
                value={`${id}`}
                onChange={changeHandler}
                readOnly={true}
              />
              {errors.id && <div style={{ color: "red" }}>{errors.id}</div>}
            </div>
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
              {errors.image && (
                <div style={{ color: "red" }}>{errors.image}</div>
              )}
            </div>
            <button type="submit" className={style.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Update;
