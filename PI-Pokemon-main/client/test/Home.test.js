import Home from "../src/views/Home/Home";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test('El componente Home debe contener un elemento h1 con un texto específico', () => {
    render(<Home />);
    const h1Element = screen.getByRole('heading', { name: /título de la página/i });
    expect(h1Element).toBeInTheDocument();
  });