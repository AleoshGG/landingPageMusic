let listaUsuarios = [];

let verificarListaUsuarios = localStorage.getItem("lista");

if (verificarListaUsuarios) {
  listaUsuarios = JSON.parse(verificarListaUsuarios);
} else {
  listaUsuarios = [];
}

let btnIniciar = document.getElementById("iniciar");

btnIniciar.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let bandera = true;

  for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].name == name && listaUsuarios[i].pass == password) {
      localStorage.setItem("name", listaUsuarios[i].name);
      i = listaUsuarios.length + 1;
      window.location = "/public/user.html";
      bandera = false;
    }
  }

  if (bandera) {
    alert("Verifique los datos ingresados");
    name.value = " ";
    password.value = " ";
  }
});
