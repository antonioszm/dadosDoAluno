import { mediaMaterias } from './addLinha.js';

export function atualizarMediaGeral() {
  const materias = JSON.parse(localStorage.getItem('notasMaterias')) || [];

  const todasNotas = [];
  materias.forEach(materia => {
    todasNotas.push(
    parseFloat(materia.nota1),
    parseFloat(materia.nota2),
    parseFloat(materia.nota3),
    parseFloat(materia.nota4)
  );
  });
  const mediaGeral = calcularMedia(todasNotas);  
  document.getElementById('media-geral').textContent = `A média geral do aluno é: ${mediaGeral}`;
}

function calcularMedia(medias) {
  if (medias.length === 0) return 0;
  const soma = medias.reduce((acc, media) => acc + media, 0);
  return (soma / medias.length).toFixed(2);
}