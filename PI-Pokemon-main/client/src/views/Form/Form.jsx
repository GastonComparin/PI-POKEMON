import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    abilities: [],
    types: [],
    image: "",
  });
  // const [errors, setErrors] = useState({
  //   name: "",
  //   health: "",
  //   attack: "",
  //   defense: "",
  //   speed: "",
  //   height: "",
  //   weight: "",
  //   abilities: [],
  //   types: [],
  //   image: "",
  // });
  const changeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    validate({ ...form, [field]: value });
    setForm({ ...form, [field]: value });
  };
  const validate = (form) => {};
  const submitHandler = (event) => {
    event.preventDefault();
     axios
      .post("http://localhost:3001/pokemon", form)
      .then((res) => alert(res));
  };
  return (
    <div>
      <h1>NIY: vista del form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>health</label>
          <input
            name="health"
            type="text"
            value={form.health}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>attack</label>
          <input
            name="attack"
            type="text"
            value={form.attack}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>defense</label>
          <input
            name="defense"
            type="text"
            value={form.defense}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>speed</label>
          <input
            name="speed"
            type="text"
            value={form.speed}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>height</label>
          <input
            name="height"
            type="text"
            value={form.height}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>weight</label>
          <input
            name="weight"
            type="text"
            value={form.weight}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>abilities</label>
          <input
            name="abilities"
            type="text"
            value={form.abilities}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>types</label>
          <input
            name="types"
            type="text"
            value={form.types}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>image</label>
          <input
            name="image"
            type="text"
            value={form.image}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
