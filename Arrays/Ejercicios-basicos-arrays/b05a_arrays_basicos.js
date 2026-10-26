const notas = [4, 7, 9, 3, 5, 2];

const calcularMedia = (notas) => {
  if (notas.length == 0) {
    return null;
  }
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
};
const contarAprobados = (notas) => {
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 5) {
      contador++;
    }
  }
  return contador;
};
const contarSuspensos = (notas) => {
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
      contador++;
    }
  }
  return contador;
};

console.log("Notas: ", notas);
console.log("Primera nota: ", notas[0]);
console.log("Ultima nota: ", notas[notas.length - 1]);
console.log("Media: ", calcularMedia(notas));
console.log("Aprobados: ", contarAprobados(notas));
console.log("Suspensos: ", contarSuspensos(notas));
