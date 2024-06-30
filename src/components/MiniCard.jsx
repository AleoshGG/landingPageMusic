import React from "react";
import imagen from "../assets/user.png";


function MiniCard(props) {
    const { user, profile} = props;

    return (
        <>
        <div className="rec-miniCard">
            <img src={imagen} alt="user" />
            <h3>{user}</h3>
            <p>{profile}</p>
        </div>
        </>
    );


}

export default MiniCard;