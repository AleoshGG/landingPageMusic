import React from "react";
import "../styles/profile.css";

function TableTops() {
  return (
    <>
      <div className="rectanguloTabla">
        <h1>Top de tus canciones favoritas</h1>
        <table>
          <thead>
            <th>Nombre</th>
            <th>Álbum</th>
            <th>Duración</th>
          </thead>
          <tbody>
            <tr>
              <td>Madrugada</td>
              <td>Daltónico</td>
              <td>2:52</td>
            </tr>
            <tr>
              <td>I Need You</td>
              <td>Divergent</td>
              <td>3:16</td>
            </tr>
            <tr>
              <td>Evolve</td>
              <td>Error</td>
              <td>3:33</td>
            </tr>
            <tr>
              <td>Fuera de Lugar</td>
              <td>Dico de Oro</td>
              <td>3:17</td>
            </tr>
            <tr>
              <td>Sit Next To Me</td>
              <td>Sacred Hearts Club</td>
              <td>4:03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableTops;
