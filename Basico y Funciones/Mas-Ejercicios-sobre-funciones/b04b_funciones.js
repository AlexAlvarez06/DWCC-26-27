// ==========================================
//               EJERCICIO 1
// ==========================================
{
  function saludar() {
    console.log("Hola DWCC");
  }

  const saludar = function () {
    console.log("Hola DWCC");
  };
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  function cuadrado(n) {
    return n * n;
  }

  const cuadrado = (n) => {
    return n * n;
  };
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  function doble(n) {
    return n * 2;
  }

  const doble = (n) => n * 2;
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  function sumar(a, b) {
    return a + b;
  }

  const sumar = (a, b) => {
    return a + b;
  };
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  setTimeout(function () {
    console.log("Mensaje después de 2 segundos");
  }, 2000);

  setTimeout(() => {
    console.log("Mensaje después de 2 segundos");
  }, 2000);
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  function restar(a, b) {
    return a - b;
  }
  //Declaracion de funcion

  const dividir = function (a, b) {
    return a / b;
  };
  //Funcion anónima asignada a constantes

  const triplicar = (n) => n * 3;
  //Funcion flecha
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  function mostrarMensaje() {
    console.log("Hola después de 1 segundo");
  }

  setTimeout(mostrarMensaje(), 1000);

  //Corrige el código para que mostrarMensaje se ejecute después de 1 segundo, no inmediatamente.
  function mostrarMensaje() {
    console.log("Hola después de 1 segundo");
  }

  setTimeout(mostrarMensaje, 1000);
  //Se podria arreglar quitando los parentesis o metiendo la funcion en una funcion flecha asi
  function mostrarMensaje() {
    console.log("Hola después de 1 segundo");
  }

  setTimeout(() => mostrarMensaje(), 1000);

  //Explica en una frase cuál era el error: que con los parentesis la funcion se ejecutaba al instante y no esperaba porque los parentesis hacen la orden de ejecutar
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  function sumar(a, b) {
    return a + b;
  }

  function calcular(a, b, operacion) {
    return operacion(a, b);
  }

  console.log(calcular(5, 2, sumar)); // 7
}
