import React from "react";
import Logo from "./Logo";
import "../styles/login.css";

function Card(props) {
  const { title, buttonText, aText, children, route } = props;

  return (
    <>
      <div className="rectangulo">
        <h1>{title}</h1>
        {children}
        <button>{buttonText}</button>
        <br />
        <a href={route}>{aText}</a>
        <Logo className="logo"></Logo>
      </div>
    </>
  );
}

export default Card;
