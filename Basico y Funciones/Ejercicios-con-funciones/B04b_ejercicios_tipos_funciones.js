// ==========================================
//               EJERCICIO 1
// ==========================================

{
  function saludar() {
    console.log("Hola");
  }
  //función declarada clásica

  const saludar = function () {
    console.log("Hola");
  };
  //función anónima asignada a una constante

  const saludar = () => {
    console.log("Hola");
  };
  //función flecha con llaves

  const doble = (n) => n * 2;
  //función flecha compacta
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  const mostrarCurso = function () {
    console.log("DWCC");
  };
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const saludarAlumno = function (nombre) {
    console.log("Hola, " + nombre);
  };
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const calcularIVA = function (precio, tipoIVA) {
    return precio + (precio * tipoIVA) / 100;
  };
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const cuadrado = (n) => {
    return n * n;
  };
  console.log(cuadrado(5));
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const restar = (a, b) => {
    return a - b;
  };
  console.log(restar(10, 3)); // 7
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  };
  console.log(esMayorDeEdad(20)); // true
  console.log(esMayorDeEdad(15)); // false
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  const doble = (n) => n * 2;
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  const multiplicar = (a, b) => a * b;
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  const esAprobada = (nota) => (nota >= 5 ? true : false);
}

// ==========================================
//               EJERCICIO 11
// ==========================================

/*
Indica si usarías una función flecha compacta o una función flecha con llaves en cada caso. Justifica brevemente.

Una función que recibe un número y devuelve su doble.
compacta
Una función que recibe una nota y muestra varios mensajes por consola.
con llaves
Una función que recibe un precio, calcula descuento, calcula IVA y devuelve el total.
con llaves
Una función que recibe una edad y devuelve true o false. 
compacta
*/

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  function saludar() {
    console.log("Hola desde la función saludar");
  }

  function ejecutar(funcionRecibida) {
    funcionRecibida();
  }

  ejecutar(saludar);
}

/*
¿Qué función recibe ejecutar como argumento? una funcion
¿En qué línea se llama realmente a saludar? en ejecutar(saludar);
¿Qué se muestra por consola? el texto del console.log
¿Por qué escribimos ejecutar(saludar) y no ejecutar(saludar())? porque con los parentesis ejecutan la funcion y la funcion ya de por si se ejecuta al pasarla como parametro
*/

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  function calcular(a, b, operacion) {
    return operacion(a, b);
  }

  function sumar(x, y) {
    return x + y;
  }

  function multiplicar(x, y) {
    return x * y;
  }

  console.log(calcular(3, 4, sumar)); // 7
  console.log(calcular(3, 4, multiplicar)); // 12
}
/*
Explica qué papel tiene el parámetro operacion. recibir que funcion va a ejecutar dependiendo de la operacion que se quiera realizar
Explica por qué sumar y multiplicar son callbacks en este ejemplo. porque son funciones que son ejecutadas en otra funcion
*/

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  function calcular(a, b, operacion) {
    return operacion(a, b);
  }
  const resultado = calcular(10, 4, function (x, y) {
    return x - y;
  });
  console.log(resultado); // 6
}

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  function calcular(a, b, operacion) {
    return operacion(a, b);
  }
  const resultado = calcular(10, 4, (x, y) => x - y);
  console.log(resultado); // 6
}

// ==========================================
//               EJERCICIO 16
// ==========================================

{
  function mostrarMensaje() {
    console.log("Hola");
  }

  setTimeout(mostrarMensaje(), 2000);
}
/*
¿Qué problema tiene esta línea? que se ejecuta mostrarMensaje al instante por los parentesis, sin parentesis no se ejecuta automaticamente y espera
*/
{
  setTimeout(mostrarMensaje, 2000); //corregido
}
// ==========================================
//               EJERCICIO 17
// ==========================================

{
  const avisar = () => console.log("Han pasado 2 segundos");
  setTimeout(avisar, 2000);
}

// ==========================================
//               EJERCICIO 18
// ==========================================
{
  setTimeout(() => console.log("Mensaje después de 2 segundos"), 2000);
}
// ==========================================
//               EJERCICIO 19
// ==========================================

{
  const saludar = function () {
    console.log("Hola");
  };
}
//Faltaban los parentesis despues de function

{
  const doble = (n) => {
    return n * 2;
  };
  console.log(doble(4));
}
//Faltaba el return, tambien se podria hacer compacta y quitar las llaves.

{
  function mensaje() {
    console.log("Hola");
  }
  setTimeout(mensaje, 1000);
}
//Habia quie quitar los parentesis despues de mensaje, para que no se ejecute al instante.

{
  const sumar = (a, b) => a + b;
  sumar(6, 7);
}
//Faltan los parentesis con los argumentos al llamar la funcion para que se ejecute, aunque no se mostrara nada por pantalla
