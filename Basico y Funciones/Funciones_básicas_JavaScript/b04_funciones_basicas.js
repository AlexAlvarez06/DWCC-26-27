// ==========================================
//               EJERCICIO 1
// ==========================================

{
  function saludar() {
    console.log("Hola desde DWCC");
  }

  saludar();
  saludar();
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  function mostrarBienvenida() {
    console.log("Bienvenido/a al bloque de funciones");
  }

  mostrarBienvenida();

  // ¿La función se ejecuta cuando se declara o cuando se llama? Cuando se llama
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  function despedir() {
    console.log("Hasta luego");
  }
  despedir();

  //Explica por qué. Poruqe faltaba llamar a la funcion
  //Añade la línea necesaria para ejecutar la función.
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  function saludarPersona(nombre) {
    console.log("Hola, " + nombre);
  }
  saludarPersona("Pablo");
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  function mostrarAlumnoModulo(nombre, modulo) {
    console.log(nombre + " esta estudiando " + modulo);
  }
  mostrarAlumnoModulo("Ana", "DWCC");
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  function multiplicar(a, b) {
    console.log(a * b);
  }

  multiplicar(4, 5);
}
// ¿Cuáles son los parámetros? a y b
// ¿Cuáles son los argumentos? 4 y 5
// ¿Qué muestra la consola? 20

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  function sumar(a, b) {
    console.log(a + b);
  }
  sumar(3);
}
//¿Qué valor tiene b cuando no se pasa el segundo argumento? undefined
//¿Qué resultado se muestra por consola? NaN
//¿Por qué ocurre? Porque no se le pasa ningun argumento para b

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  function sumar(a, b) {
    return a + b;
  }
  const resultado = sumar(3, 4);
  console.log(resultado);
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  function calcularDoble(a) {
    return a * 2;
  }
  console.log(calcularDoble(4));
  console.log(calcularDoble(8));
  console.log(calcularDoble(10));
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  function precioConIVA(precioSinIVA, tipoIVA) {
    return precioSinIVA + precioSinIVA * (tipoIVA / 100);
  }
  const total = precioConIVA(100, 21);
  console.log(total);
  console.log(precioConIVA(50, 10));
  console.log(precioConIVA(20, 4));
}

// ==========================================
//               EJERCICIO 11
// ==========================================

{
  function sumarYMostrar(a, b) {
    console.log(a + b);
  }

  function sumarYDevolver(a, b) {
    return a + b;
  }

  const resultado1 = sumarYMostrar(3, 4);
  const resultado2 = sumarYDevolver(3, 4);

  console.log("resultado1:", resultado1);
  console.log("resultado2:", resultado2);
}

//¿Qué muestra sumarYMostrar(3, 4)? Imprime por pantalla el 7
//¿Qué valor queda guardado en resultado1? undefined
//¿Qué valor queda guardado en resultado2? 7
//¿Cuál es la diferencia entre mostrar un valor y devolver un valor?
//Mostrar (console.log) envía el valor a la consola para que lo veas tú, pero el programa no puede usarlo después.
//Devolver (return) entrega el valor a quien llamó a la función, para que lo guarde en una variable o lo use en otra operación.

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  function calcularCuadrado(n) {
    return n * n;
  }

  const resultado = calcularCuadrado(5);
  console.log("Resultado:", resultado);
}

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  function ejemploReturn() {
    return "Primer mensaje";
    console.log("Segundo mensaje");
  }

  console.log(ejemploReturn());
}

//¿Se ejecuta el console.log("Segundo mensaje")?
//¿Por qué? Porque return termina la función en el instante en que se ejecuta.
//¿Qué regla importante sobre return se comprueba aquí? Que return hace dos cosas a la vez: devuelve un valor y sale de la función inmediatamente.

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  function crearMensaje() {
    const mensaje = "Hola";
    console.log(mensaje);
  }

  crearMensaje();
  console.log(mensaje);
}
//¿Qué línea produce error? la linea 7
//¿Por qué mensaje no se puede usar fuera de la función? Porque solo existe dentro de la funcion
//¿Cómo se llama este concepto? variables locales y globales

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  function calcularTriple(n) {
    return n * 3;
  }
  console.log(calcularTriple(5));
}

// ==========================================
//               EJERCICIO 16
// ==========================================

{
  const numero = 10;

  function mostrarNumero() {
    const numero = 5;
    console.log("Dentro:", numero);
  }

  mostrarNumero();
  console.log("Fuera:", numero);
}
//¿Qué muestra la consola? Dentro 5 Fuera 10
//¿Por qué hay dos valores distintos para numero? porque una esta dentro de la funcion y otra fuera
//¿Es recomendable repetir nombres de variables aunque estén en ámbitos distintos? Justifica la respuesta.
// En general no, aunque técnicamente funcione. Razones: Confusión al leer, errores difíciles de detectar y pierdes acceso a la de fuera

// ==========================================
//               EJERCICIO 17
// ==========================================

{
  function esMayorDeEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esMayorDeEdad(17)); // false
  console.log(esMayorDeEdad(18)); // true
  console.log(esMayorDeEdad(25)); // true
}

// ==========================================
//               EJERCICIO 18
// ==========================================

{
  function clasificarNota(nota) {
    if (nota >= 9) {
      return "Sobresaliente";
    } else if (nota >= 7) {
      return "Notable";
    } else if (nota >= 5) {
      return "Aprobado";
    } else {
      return "Suspenso";
    }
  }
  console.log(clasificarNota(10)); // Sobresaliente
  console.log(clasificarNota(8)); // Notable
  console.log(clasificarNota(6)); // Aprobado
  console.log(clasificarNota(3)); // Suspenso
}

// ==========================================
//               EJERCICIO 19
// ==========================================

{
  function estaEnRango(numero, minimo, maximo) {
    if (minimo < numero && numero < maximo) {
      return true;
    } else {
      return false;
    }
  }
  console.log(estaEnRango(5, 1, 10)); // true
  console.log(estaEnRango(15, 1, 10)); // false
}

// ==========================================
//               EJERCICIO 21
// ==========================================

{
  function mensajeAcceso(edad, tienePermiso) {
    if (edad >= 18 || tienePermiso) {
      return "Acceso permitido";
    } else {
      return "Acceso denegado";
    }
  }
  const mensaje = mensajeAcceso(16, true);
  console.log(mensaje); // Acceso permitido
}

// ==========================================
//               EJERCICIO 21
// ==========================================

{
  function imprimirHasta(n) {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  }
  imprimirHasta(6);
}

// ==========================================
//               EJERCICIO 22
// ==========================================

{
  function sumarHasta(n) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
      suma += i;
    }
    return suma;
  }
  console.log(sumarHasta(5)); // 15, porque 1 + 2 + 3 + 4 + 5 = 15
}

// ==========================================
//               EJERCICIO 23
// ==========================================

{
  function mostrarTabla(n) {
    for (let i = 0; i <= 10; i++) {
      console.log(i + " x " + n + " = " + i * n);
    }
  }
  mostrarTabla(5);
}

// ==========================================
//               EJERCICIO 24
// ==========================================

{
  function contarParesHasta(n) {
    let contador = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        contador++;
      }
    }
    return contador;
  }
  console.log(contarParesHasta(10)); // 5, porque son 2, 4, 6, 8, 10
  console.log(contarParesHasta(7)); // 3, porque son 2, 4, 6
}

// ==========================================
//               EJERCICIO 25
// ==========================================

{
  function mostrarCurso() {
    console.log("DWCC");
  }
  mostrarCurso();
}

// ==========================================
//               EJERCICIO 26
// ==========================================

{
  function sumarHastaCinco() {
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
      suma += i;
    }
    return suma;
  }

  console.log(sumarHastaCinco());
}
//¿Por qué el bucle no llega hasta 5? porque el return esta dentro del bucle por lo que se corta
//Corrige la función para que devuelva la suma total de 1 a 5.

// ==========================================
//               EJERCICIO 27
// ==========================================

{
  function aplicarDescuento(precio) {
    return precio * 0.9;
  }
  console.log(aplicarDescuento(100));
  console.log(aplicarDescuento(50));
}

// ==========================================
//               EJERCICIO 28
// ==========================================

{
  function multiplicacion(a, b) {
    return a * b;
  }
}
//Propón un nombre más adecuado para la función. multiplicacion por ejemplo
//Renombra también los parámetros para que el código se entienda mejor. los parametros estan bien
//Explica por qué tu versión es más legible. porque se entiende mejor lo que hace la funcion con el nombre