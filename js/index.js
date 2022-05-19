var listaNotas = [];

var tabelaNotas = document.getElementById("tabela-registros");

function buscarNotas() {
  listaNotas = JSON.parse(localStorage.getItem("listaNotas") || "[]");
}

buscarNotas();

function salvaNotas() {
  localStorage.setItem("listaNotas", JSON.stringify(listaNotas));
}

function validarInput() {
  var tituloNota = document.getElementById("input-titulo").value;
  var descricaoNota = document.getElementById("input-descricao").value;

  if (tituloNota == "" || descricaoNota == "") {
    alert("PREENCHA OS CAMPOS PARA ADICIONAR UMA NOTA / EDITAR UMA NOTA!");
    return false;
  } else if (tituloNota == "edson" || descricaoNota == "edson") {
    alert("EDSON é UMA PALAVRA PROIBIDA!");
    return false;
  } else {
    return true;
  }
}

function adicionarNota() {
  if (validarInput() == false) {
    return;
  }

  var tituloNota = document.getElementById("input-titulo").value;
  var descricaoNota = document.getElementById("input-descricao").value;

  var nota = {
    tituloNota,
    descricaoNota,
  };

  listaNotas.push(nota);

  salvaNotas();
  carregaNotas();
}

function carregaNotas() {
  tabelaNotas.innerHTML = "";

  for (let indice = 0; indice < listaNotas.length; indice++) {
    let nota = listaNotas[indice];

    let novaLinha = document.createElement("tr");
    let colunaRegistro = document.createElement("td");
    let colunaTitulo = document.createElement("td");
    let colunaDescricao = document.createElement("td");
    let colunaAcoes = document.createElement("td");

    novaLinha.setAttribute("class", "registros");
    novaLinha.setAttribute("id", indice);
    colunaRegistro.innerHTML = indice + 1;
    colunaTitulo.innerHTML = nota.tituloNota;
    colunaDescricao.innerHTML = nota.descricaoNota;
    colunaAcoes.innerHTML = ` <button class="btn-editar"  onclick="editaNota(${indice})">Editar</button> <button class="btn-apagar" onclick="apagaNota(${indice})">Apagar</button> `;

    novaLinha.appendChild(colunaRegistro);
    novaLinha.appendChild(colunaTitulo);
    novaLinha.appendChild(colunaDescricao);
    novaLinha.appendChild(colunaAcoes);

    tabelaNotas.appendChild(novaLinha);
  }
}

function apagaNota(indice) {
  listaNotas.splice(indice, 1);

  carregaNotas();

  salvaNotas();
}

function editaNota(indice) {
  if (validarInput() == false) {
    return;
  }

  var tituloNota = document.getElementById("input-titulo").value;
  var descricaoNota = document.getElementById("input-descricao").value;

  var nota = {
    tituloNota,
    descricaoNota,
  };

  listaNotas[indice] = nota;

  salvaNotas();
  carregaNotas();
}
carregaNotas();
