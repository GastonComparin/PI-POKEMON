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

  const changeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const fieldErrors = validate(field, value);
    setErrors({ ...errors, [field]: fieldErrors[field] });
    setForm({ ...form, [field]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/pokemon", form)
      .then((res) => {
        const message = res.data.pokemon;
        const regex = /with id: ([\w-]+)/;
        const match = regex.exec(message);
        const id = match[1];
        alert("Pokemon creado correctamente");
        const viewPokemonBtn = document.createElement("a");
        viewPokemonBtn.setAttribute("href", `detail/${id}`);
        viewPokemonBtn.textContent = "Ver Pokemon";
        document.body.appendChild(viewPokemonBtn);
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
  };
  return (
    <div>
      <h1 className={style.titulo}>Create your Pokemon!</h1>
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

            <div className={style.campo}>
              <label className={style.label}>types</label>
              <br />{" "}
              <input
                name="types"
                type="text"
                value={form.types}
                onChange={changeHandler}
              />
              {errors.types && (
                <div style={{ color: "red" }}>{errors.types}</div>
              )}
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
export default Form;
