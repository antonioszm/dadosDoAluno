export function encontrarMaiorMedia(mediaMaterias) {
  console.log(mediaMaterias)
  if (mediaMaterias.length === 0) {
    return null;
  }

  let maiorMedia = parseFloat(mediaMaterias[0]);

  for (let i = 1; i < mediaMaterias.length; i++) {
    let mediaAtual = parseFloat(mediaMaterias[i]);
    if (mediaAtual > maiorMedia) {
      maiorMedia = mediaMaterias[i];
    }
  }

  return maiorMedia;
}