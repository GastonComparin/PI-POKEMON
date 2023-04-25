import Home from "../src/views/Home/Home";

test("El componente Home debe tener un h1 en su retorno", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<h1>Título de la página</h1>)).toBe(true);
});
