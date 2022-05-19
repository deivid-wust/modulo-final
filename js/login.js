var usuarios = [];

function criarUsuario() {
  var emailPessoa = document.getElementById("email-usuario").value;
  var senhaPessoa = document.getElementById("senha-usuario").value;

  var usuario = {
    emailPessoa,
    senhaPessoa,
  };

  usuarios.push(usuario);

  salvaUsuarios();

  // VALIDAR SE ESTA PREENCHIDO O CAMPO CRIAR UM IF COM A CONDICAO

  window.location.href = "login.html";
}

function salvaUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function buscarUsuarios() {
  usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
}

buscarUsuarios();

function validarPessoa() {
  for (let indice = 0; indice < usuarios.length; indice++) {
    let usuario = usuarios[indice];

    if ((emailPessoa, senhaPessoa == usuarios)) {
      return true;
    } else false;
  }
}
