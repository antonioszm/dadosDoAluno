import { adicionarLinha, mediaMaterias, carregarLST } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';
import { encontrarMaiorMedia } from './maiorMedia.js';


let confirmacao =  localStorage.getItem("usuario");

if (confirmacao) {
  let usuario = JSON.parse(confirmacao);

  let nomeAluno = usuario.nome;
  let idadeAluno = usuario.idade;
  let serieAluno = usuario.serie;
  let nomeEscola = usuario.escola;
  let materiaFavorita = usuario.materia;

  document.getElementById("nome-aluno").textContent = "Nome: " + nomeAluno;
  document.getElementById("idade-aluno").textContent = "Idade: " + idadeAluno;
  document.getElementById("serie-aluno").textContent = "Serie: " + serieAluno;
  document.getElementById("escola-aluno").textContent = "Escola: " + nomeEscola;
  document.getElementById("materia-preferida").textContent = "Matéria Favorita: " + materiaFavorita;

  //carrega Notas
  carregarLST()

  const maiorMedia = encontrarMaiorMedia(mediaMaterias);
  document.getElementById('maior-media').textContent = `A maior média entre as matérias é: ${maiorMedia}`;

  //nomes alunos
  fetch('http://localhost:3000/alunos') 
  .then(response => response.json()) 
  .then(alunos => {
    let listaAlunos = document.getElementById('lista-alunos');
    listaAlunos.innerHTML = ''; 
    alunos.forEach(aluno => {
      let li = document.createElement('li');
      li.textContent = aluno.nome; 
      listaAlunos.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os alunos:', error);
  });
}

document.querySelector('button').addEventListener('click', () => {
  adicionarLinha();
  atualizarMediaGeral();

  const maiorMedia = encontrarMaiorMedia(mediaMaterias);
  document.getElementById('maior-media').textContent = `A maior média entre as matérias é: ${maiorMedia}`;
});

document.addEventListener('DOMContentLoaded', () => {
  const mediaTexto = document.querySelector('#media-geral').textContent;
  const mediaInicial = parseFloat(mediaTexto.match(/[\d\.]+/)[0]);
  mediaMaterias.push(mediaInicial);
  atualizarMediaGeral();
});