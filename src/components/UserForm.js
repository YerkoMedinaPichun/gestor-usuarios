import React from "react";
import Button from "./Button";
import Input from "./Input";
import useFormulario from "../hooks/useFormulario.js";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />

      <Input
        label="Apellido"
        name="lastname"
        placeholder="Apellido"
        value={formulario.lastname}
        onChange={handleChange}
      />

      <Input
        label="Correo"
        name="email"
        placeholder="Correo"
        value={formulario.email}
        onChange={handleChange}
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
