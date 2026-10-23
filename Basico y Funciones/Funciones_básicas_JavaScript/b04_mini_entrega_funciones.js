function calcularIVA(precio, tipoIVA) {
  return precio * (tipoIVA / 100);
}

function calcularPrecioFinal(precio, tipoIVA) {
  return precio * (tipoIVA / 100) + precio;
}

function esAprobado(nota) {
  if (nota >= 5) {
    return true;
  } else {
    return false;
  }
}

function obtenerMensajeNota(nota) {
  if (esAprobado(nota)) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
}

function mostrarCuentaAtras(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

console.log(calcularIVA(100, 21));
console.log(calcularPrecioFinal(100, 21));
console.log(esAprobado(7));
console.log(obtenerMensajeNota(4));
mostrarCuentaAtras(5);
