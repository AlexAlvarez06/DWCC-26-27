// ==========================================
//               EJERCICIO 1
// ==========================================

{
  const calcularPrecioConIVA = (precioSinIVA, tipoIVA) => {
    return precioSinIVA + (precioSinIVA * tipoIVA) / 100;
  };
  const total = calcularPrecioConIVA(100, 21);
  console.log(total); // 121
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  const aplicarDescuento = (precio, porcentajeDescuento) => {
    return precio - precio * (porcentajeDescuento / 100);
  };
  console.log(aplicarDescuento(100, 10)); // 90
  console.log(aplicarDescuento(50, 20)); // 40
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const calcularPrecioFinal = (precioBase, descuento, iva) => {
    let total = precioBase - precioBase * (descuento / 100);
    return total + (total * iva) / 100;
  };
  const precioFinal = calcularPrecioFinal(100, 10, 21);
  console.log(precioFinal); // 108.9
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const estaAprobado = (nota) => (nota >= 5 ? "Aprobado" : "Suspenso");
  console.log(estaAprobado(7)); // Aprobado
  console.log(estaAprobado(3)); // Suspenso
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const obtenerTextoNota = (nota) => {
    if (nota < 5) {
      return "Suspenso";
    } else if (nota < 7) {
      return "Aprobado";
    } else if (nota < 9) {
      return "Notable";
    } else {
      return "Sobresaliente";
    }
  };
  console.log(obtenerTextoNota(9)); // Sobresaliente
  console.log(obtenerTextoNota(7.5)); // Notable
  console.log(obtenerTextoNota(5)); // Aprobado
  console.log(obtenerTextoNota(3)); // Suspenso
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const esNotaValida = (nota) => nota >= 0 && nota <= 10;
  console.log(esNotaValida(7)); // true
  console.log(esNotaValida(0)); // true
  console.log(esNotaValida(10)); // true
  console.log(esNotaValida(-1)); // false
  console.log(esNotaValida(12)); // false
  console.log(esNotaValida(NaN)); // false
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  const generarMensajeNota = (nota) => {
    if (esNotaValida(nota)) {
      return "Nota: " + nota + " Resultado: " + obtenerTextoNota(nota);
    } else {
      return "Nota no válida";
    }
  };
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  const imprimirTablaMultiplicar = (n) => {
    for (let i = 0; i <= 10; i++) {
      console.log(n + " x " + i + " = " + n * i);
    }
  };
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  const sumarHasta = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
      total += i;
    }
    return total;
  };
  console.log(sumarHasta(5)); // 15, porque 1 + 2 + 3 + 4 + 5 = 15
  console.log(sumarHasta(10)); // 55
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  const contarParesHasta = (n) => {
    let total = 0;
    for (let i = 2; i <= n; i += 2) {
      total++;
    }
    return total;
  };
  console.log(contarParesHasta(10)); // 5, porque son 2, 4, 6, 8, 10
  console.log(contarParesHasta(7)); // 3, porque son 2, 4, 6
}

// ==========================================
//           MINIAPLICACION FINAL
// ==========================================

{
  const mostrarResumenAlumno = (nombre, nota) => {
    if (esNotaValida(nota)) {
      console.log(
        "Alumno/a: " +
          nombre +
          "\n" +
          "Nota: " +
          nota +
          "\n" +
          "Resultado: " +
          obtenerTextoNota(nota) +
          "\n" +
          "Estado: " +
          estaAprobado(nota) +
          "\n",
      );
    } else {
      console.log("Alumno/a: " + nombre + "\n" + "Nota no válida");
    }
  };
  mostrarResumenAlumno("Ana", 7);
  mostrarResumenAlumno("Luis", 3);
  mostrarResumenAlumno("Marta", 12);
}

// ==========================================
//           REVISION DE ERRORES
// ==========================================

//ERROR 1
function saludar() {
  console.log("Hola");
}

saludar;
//faltan los parentesis para llamar a la funcion

//ERROR 2
function calcularDoble(n) {
  const doble = n * 2;
  return doble;
}

console.log(doble);
//en vez de llamar a la funcion y pasarle un argumento llama a la variable de dentro de la funcion, que ni siquiera tiene valor

//ERROR 3
function sumar(a, b) {
  console.log(a + b);
}

const resultado = sumar(3, 4);
console.log(resultado);
//no se puede guardar un console.log en una constante, por lo que resultado sera undifined, para que funcione tiene que haber un return.

//ERROR 4
function ejemplo() {
  return "Fin";
  console.log("Esto se ejecuta");
}

console.log(ejemplo());
//el primero no se ejecuta porque con el return se termina la funcion y no lo ejecuta, el segundo si porque es el que llama a la funcion.
