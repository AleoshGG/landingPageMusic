import React from "react";
import imagen from "../assets/userIcon.webp";
import "../styles/profile.css";

function UserIcon(props) {
  const { name } = props;

  return (
    <>
      <div className="userIcon" >
        <p>{name}</p>
        <img src={imagen} alt="icon" />
      </div>
    </>
  );
}

export default UserIcon;
