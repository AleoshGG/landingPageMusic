import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";
import imagen from "../assets/regresar.png";
import "../styles/login.css";

function Login() {

  return (
    <>
    <a href="#"><img src={imagen} alt="regresar" className="regresar"/></a>
      <div className="page">
        <Card title="Iniciar Sesión" buttonText="Entrar" aText="Crear Cuenta" route="/signUp">
          <Form message="Ingresa el usuario" placeholder="Usuario" type="text"></Form>
          <Form message="Ingresa la contraseña" placeholder="Contraseña" type="password"></Form>
        </Card>
      </div>
    </>
  );
}

export default Login;
