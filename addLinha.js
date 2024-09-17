export let mediaMaterias = [];

export function adicionarLinha() {
  const materia = prompt("Qual a matéria deseja cadastrar?");
  if (!materia) return;

  const notas = [];
  let i = 0;

  while (i < 4) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1} para ${materia}:`));
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      notas.push(nota);
      i++;
    } else {
      alert("Insira um número válido.");
    }
  }

  const media = calcularMedia(notas);
  let notasMaterias = JSON.parse(localStorage.getItem('notasMaterias')) || [];

  notasMaterias.push({
    nome: materia,
    nota1: notas[0],
    nota2: notas[1],
    nota3: notas[2],
    nota4: notas[3]
  });

  localStorage.setItem('notasMaterias', JSON.stringify(notasMaterias));
  adicionarLinhaTabela(materia, notas, media);
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return (soma / notas.length).toFixed(2);
}

function adicionarLinhaTabela(materia, notas, media) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML += `
      <tr>
          <td>${materia}</td>
          <td>${notas[0]}</td>
          <td>${notas[1]}</td>
          <td>${notas[2]}</td>
          <td>${notas[3]}</td>
          <td>${media}</td>
      </tr>
  `;
}
export function carregarLST() {
  const tbody = document.querySelector("tbody");
  const notasMaterias = JSON.parse(localStorage.getItem('notasMaterias')) || [];
  if (notasMaterias.length > 0){
    notasMaterias.forEach(nm => {
      const notas = [nm.nota1, nm.nota2, nm.nota3, nm.nota4];
      const media = calcularMedia(notas);
        tbody.innerHTML += `
        <tr>
          <td>${nm.nome}</td>
          <td>${nm.nota1}</td>
          <td>${nm.nota2}</td>
          <td>${nm.nota3}</td>
          <td>${nm.nota4}</td>
          <td>${media}</td>
        </tr>
      `;
    });
  }
  notasMaterias.forEach(nm => {
    const notas = [
      parseFloat(nm.nota1),
      parseFloat(nm.nota2),
      parseFloat(nm.nota3),
      parseFloat(nm.nota4)];
    const media = calcularMedia(notas);
    mediaMaterias.push(media)
  });
  console.log(mediaMaterias)

}