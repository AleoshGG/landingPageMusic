import React from "react";
import "../styles/profile.css";

function ArtistCard(props) {
  const { img, name } = props;

  return (
    <>
      <div className="artistas">
        <img src={img} alt="artist" />
        <p>{name}</p>
      </div>
    </>
  );
}

export default ArtistCard;
