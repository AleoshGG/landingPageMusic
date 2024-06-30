import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import imagen from "../assets/regresar.png";
import "../styles/login.css";

function SignUp() {

  return (
    <>
    <a href="#"><img src={imagen} alt="regresar" className="regresar"/></a>
      <div className="pageSU">
        <Card title="Crea Usuario" buttonText="Crear" aText="Iniciar Sesión" route="/login">
          <Form message="Nombre de usuario" placeholder="Usuario" type="text"></Form>
          <Form message="Contraseña" placeholder="Contraseña" type="password"></Form>
          <Form message="Confirma la contraseña" placeholder="Contraseña" type="password"></Form>
        </Card>
      </div>
    </>
  );
}

export default SignUp;