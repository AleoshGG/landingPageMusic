let listaUsuarios = [];

let verificarListaUsuarios = localStorage.getItem("lista");

if (verificarListaUsuarios) {
  listaUsuarios = JSON.parse(verificarListaUsuarios);
} else {
  listaUsuarios = [];
}

let btnCrearUsuario = document.getElementById("crear-usuario");

btnCrearUsuario.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let passwordConf = document.getElementById("password-conf").value;

  if (password === passwordConf) {
    let user = {
      name: name,
      pass: passwordConf,
    };
    listaUsuarios.push(user);
    localStorage.setItem("lista", JSON.stringify(listaUsuarios));
    window.location = "/public/login.html";
  } else {
    alert("Verifique los datos que está ingresando");
    name.value = " ";
    password.value = " ";
    passwordConf.value = " ";
  }
});
