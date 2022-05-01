let notas = [];

const lista = document.getElementById("inicio");

if (notas.length == 0)
  lista.innerHTML = `<div> Não há notas para exibir tente criar uma</div>`;

function criarNota() {
  let titulo = document.getElementById("titulo").value;
  let descricao = document.getElementById("descricao").value;

  let nota = {
    titulo: titulo,
    descricao: descricao,
  };

  notas.push(nota);
  recarregarLista();
}

function deletarNota(posicao) {
  notas.splice(posicao, 1);
  recarregarLista();
}

function recarregarLista() {
  lista.innerHTML = "";

  for (let indice = 0; indice < notas.length; indice++) {
    let nota = notas[indice];
    let modelo = `
    <div>
      <i>ID: ${indice}</i>
        <p id="titulo:${indice}"> <h3>Titulo:</h3> ${nota.titulo} </p>
        <p id="descricao:${indice}"> <h3>Descrição:</h3> ${nota.descricao} </p>
      <button id="deletarNota" onclick="deletarNota(${indice})">Deletar Nota</button>
    </div>
    `;
    lista.innerHTML += modelo;
  }
}
