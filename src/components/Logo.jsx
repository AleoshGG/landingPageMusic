import React from "react";
import imagen from "../assets/logo.png";
import "../styles/login.css";

function Logo(props) {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <img src={imagen} alt="logo" width="130px" />
        <h3>MusicPlay</h3>
      </div>
    </>
  );
}
export default Logo;
