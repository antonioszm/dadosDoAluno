
//Exercicio 1
function calcularMedia() {
  var nota1 = parseFloat(document.getElementById('nota1').value);
  var nota2 = parseFloat(document.getElementById('nota2').value);
  var nota3 = parseFloat(document.getElementById('nota3').value);
  var nota4 = parseFloat(document.getElementById('nota4').value);

  var notas = [nota1, nota2, nota3, nota4];

  function calcularMediaNotas(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    var media = soma / notas.length;
    return media;
  }

  var media = calcularMediaNotas(notas);

  document.getElementById('resultado').innerText = 'Média: ' + media.toFixed(2);

  verificarResultado(media);
}


//Exercicio 2
function verificarResultado(media) {
  if (media >= 7) {
    document.write("Parabéns você passou! Sua média foi : " + media);
  } else {
    document.write("Infelizmente você está de recuperação. Sua média foi : " + media);
  }
}

//Exercicio 3
function imprimirNomesAlunos(nomes) {
  nomes.forEach(function (nome) {
    document.write(nome + "<br>");
  });
}

var nomesAlunos = ["Alice", "Bruno", "Carla", "Daniel"];
imprimirNomesAlunos(nomesAlunos);


//Exercicio 4
function imprimirTabuada8() {
  for (var i = 0; i <= 10; i++) {
    var resultado = 8 * i;
    document.write("8 x " + i + " = " + resultado + "<br>");
  }
}

imprimirTabuada8();


//Exercicio 5
function coletarInformacoesAluno() {
  var nome = prompt("Qual o nome do aluno?");
  var idade = prompt("Qual a idade do aluno?");
  var serie = prompt("Qual a série do aluno?");
  var escola = prompt("Qual o nome da escola?");
  var materiaFavorita = prompt("Qual a sua matéria favorita?");

  var confirmacao = confirm(
    "Confirma os dados inseridos?\n" +
    "Nome: " + nome + "\n" +
    "Idade: " + idade + "\n" +
    "Série: " + serie + "\n" +
    "Escola: " + escola + "\n" +
    "Matéria Favorita: " + materiaFavorita
  );

  if (confirmacao) {
    document.write("Informações do Aluno:<br>");
    document.write("Nome: " + nome + "<br>");
    document.write("Idade: " + idade + "<br>");
    document.write("Série: " + serie + "<br>");
    document.write("Escola: " + escola + "<br>");
    document.write("Matéria Favorita: " + materiaFavorita + "<br>");
  } else {
    document.write("Os dados não foram confirmados.");
  }
}

coletarInformacoesAluno();


//Exercicio 6
function calcularMediaNotas(notas) {
  var soma = 0;
  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  var media = soma / notas.length;
  return media;
}

function capturarDados() {
  var nomeMateria = prompt("Digite o nome da matéria:");

  var notas = [];
  var i = 0;

  while (i < 4) {
    var nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));
    if (!isNaN(nota)) {
      notas.push(nota);
      i++;
    } else {
      alert("Por favor, insira um valor numérico válido.");
    }
  }

  var materiaObj = {
    nomeMateria: nomeMateria,
    notas: notas
  };

  var media = calcularMediaNotas(materiaObj.notas);

  document.write("Matéria: " + materiaObj.nomeMateria + "<br>");
  document.write("Notas: " + materiaObj.notas.join(", ") + "<br>");
  document.write("Média: " + media.toFixed(2) + "<br>");
}

capturarDados();


//Exercicio 7
function encontrarMaiorNumero(numeros) {
  if (numeros.length === 0) {
    return null;
  }

  var maiorNumero = numeros[0];

  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }

  return maiorNumero;
}

var arrayDeNumeros = [10, 25, 3, 78, 5, 89, 6];
var maiorNumero = encontrarMaiorNumero(arrayDeNumeros);
document.write("O maior número do array é: " + maiorNumero);