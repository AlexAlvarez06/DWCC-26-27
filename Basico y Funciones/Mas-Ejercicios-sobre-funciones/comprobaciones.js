function sumar(a, b) {
  return a + b;
}

function calcular(a, b, operacion) {
  return operacion(a, b);
}

console.log(calcular(5, 2, sumar)); // 7
