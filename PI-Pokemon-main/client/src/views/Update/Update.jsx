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
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/pokemon/update/`, object)
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
          alert(`Pokemon actualizado correctamente`);
        }
      });
  };
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
  const handleInfo = () => {
    !info ? setInfo(true) : setInfo(false);
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
              <br />{" "}
              <input
                name="types"
                type="text"
                value={form.types}
                onChange={changeHandler}
              />
              <button
                className={style.infoBtn}
                type="button"
                onClick={handleInfo}
              >
                i
              </button>
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
      {info ? (
      <div className={style.listContainer}>
        <div className={style.title}>
          <h2>Pokemon Types</h2>
        </div>
        <div className={style.list}>
          <p>rock</p>
          <p>water</p>
          <p>normal</p>
          <p>fighting</p>
          <p>flying</p>
          <p>poison</p>
          <p>ground</p>
          <p>bug</p>
          <p>ghost</p>
          <p>steel</p>
          <p>fire</p>
          <p>grass</p>
          <p>electric</p>
          <p>psychic</p>
          <p>ice</p>
          <p>dragon</p>
          <p>dark</p>
          <p>fairy</p>
          <p>unknown</p>
          <p>shadow</p>
        </div>
      </div>
      ) : (
      <div />
      )}
    </div>
  );
};
export default Update;
