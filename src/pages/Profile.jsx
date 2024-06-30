import React from "react";
import Logo from "../components/Logo";
import UserIcon from "../components/UserIcon";
import MiniCard from "../components/MiniCard";
import TableTops from "../components/TableTops";
import ArtistCard from "../components/ArtistCard";
import imagen1 from "../assets/joseM.jpg";
import imagen2 from "../assets/TwOP.jpg";
import "../styles/profile.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <header>
          <Logo className="logoWhite"></Logo>
          <UserIcon name="Aleosh"></UserIcon>
        </header>
        <div className="user-perfil">
          <MiniCard user="Aleosh" profile="Perfil Premium"></MiniCard>
          <TableTops></TableTops>
        </div>

        <h2>Artistas más escuchados</h2>
        
        <div className="mas-escuchados">
          <ArtistCard img={imagen1} name="José Madero"></ArtistCard>
          <ArtistCard img={imagen2} name="Twenty One Pilots"></ArtistCard>
        </div>
      </div>
    </>
  );
}

export default Profile;
