export const validate = (field, value) => {
  let errors = {};
  if (field === "name") {
    if (!value) {
      errors.name = "El nombre es obligatorio.";
    } else if (/[^a-zA-Z ]/.test(value)) {
      errors.name = "El nombre solo puede contener letras.";
    } else if (value.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    }
  }
  if (field === "health") {
    if (!value) {
      errors.health = "Health es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.health = "Health debe ser un número entero.";
    }
  }
  if (field === "attack") {
    if (!value) {
      errors.attack = "attack es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.attack = "attack debe ser un número entero.";
    }
  }
  if (field === "defense") {
    if (!value) {
      errors.defense = "defense es obligatorio";
    } else if (!/^[0-9]+$/.test(value)) {
      errors.defense = "defense debe ser un número entero.";
    }
  }
  if (field === "speed") {
    if (value && !/^[0-9]+$/.test(value)) {
      errors.speed = "speed debe ser un número entero.";
    }
  }
  if (field === "height") {
    if (value && !/^[0-9]+$/.test(value)) {
      errors.height = "height debe ser un número entero.";
    }
  }
  if (field === "weight") {
    if (value && !/^[0-9]+$/.test(value)) {
      errors.weight = "weight debe ser un número entero.";
    }
  }

  if (field === "types") {
    if (!value) {
      errors.types = "types es obligatorio";
    } else if (!/^(\b(rock|water|normal)\b\s*)+$/.test(value)) {
      errors.types = "Debe pertenecer a un type correcto";
    }
  }
  if (field === "image") {
    if (value && !/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i.test(value)) {
      errors.image = "Debe ser un link";
    }
  }

  if (field === "id") {
    if (
      value &&
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        value
      )
    )
      errors.id = "Debe ser un UUID";
  }

  return errors;
};
