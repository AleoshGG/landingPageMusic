let nombre = "";

let verificarNombre = localStorage.getItem("name");

if (verificarNombre) {
  nombre = localStorage.getItem("name");
} else {
  nombre = "Alexis";
}

let nombreUsuario = document.getElementById("nombreUsuario");
nombreUsuario.innerHTML = `${nombre}`;

let btnUsuario = document.getElementById("btn-usuario");
btnUsuario.innerHTML = `${nombre}`;
