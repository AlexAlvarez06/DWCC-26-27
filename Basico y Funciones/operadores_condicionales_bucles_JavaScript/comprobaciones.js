const numeros = [8, 3, 15, 2, 10];
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero > mayor) {
    mayor = numero;
  }
}
console.log("El numero mayor es el: " + mayor);
