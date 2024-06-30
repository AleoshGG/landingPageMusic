import React from "react";

function Form(props) {
  const { message, placeholder, type } = props;

  return (
    <>
      <label>{message}</label>
      <input type={type} placeholder={placeholder} />
    </>
  );
}

export default Form;
