// ==========================================
//               EJERCICIO 1
// ==========================================

{
  const nombres = ["Ana", "Luis", "María", "Noa"];
  console.log(nombres[0]);
  console.log(nombres[1]);
  console.log(nombres[nombres.length - 1]);
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];

  console.log("Notas iniciales:", notas);
  console.log(notas[0]);
  console.log(notas[2]);
  console.log(notas[4]);
  notas[0] = 6;

  console.log("Notas modificadas:", notas);
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const precios = [4.73, 7.34, 9.75, 3.5];
  console.log("Primer precio: ", precios[0]);
  console.log("Ultimo precio: ", precios[precios.length - 1]);
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const productos = ["ratón", "teclado", "monitor"];
  console.log(productos);
  productos[1] = "teclado mecanico";
  console.log(productos);
  // Se puede modificar porque const solo impide asignar un array nuevo a la variable productos,
  // //pero no impide cambiar los elementos que hay dentro del array.
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const numeros = [1, 2, 3];
  numeros[0] = 10;
  numeros.push(4);
  numeros = [7, 8, 9];
}
//¿Qué líneas son válidas? las dos primeras
//¿Qué línea produce error?¿Por qué? la tercera, porque const no permite asignar un array nuevo a la variable, pero si cambiar sus elementos

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const colores = ["rojo", "verde", "azul", "amarillo"];
  for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  }
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  const animales = ["perro", "gato", "tortuga", "conejo"];
  for (let i = 0; i < animales.length; i++) {
    console.log("Posición ", i, ": ", animales[i]);
  }
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  const tareas = [
    "Hacer la compra",
    "Estudiar JavaScript",
    "Limpiar la habitación",
    "Llamar al médico",
    "Entregar el ejercicio de arrays",
  ];
  console.log("Tienes ", tareas.length, " tareas pendientes");
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  const numeros = [1, 2, 3, 4, 5];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  console.log("La suma es: ", suma);
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  const media = suma / notas.length;
  console.log("La media es: ", media);
}

// ==========================================
//               EJERCICIO 11
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 5) {
      contador++;
    }
  }
  console.log("Aprobados: ", contador);
  console.log("Suspensos: ", notas.length - contador);
}

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  const tareas = ["limpiar", "estudiar", "jugar", "cocinar"];
  const busca = "estudiar";
  let buscada = false;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i] == busca) {
      buscada = true;
    }
  }
  if (encontrada) {
    console.log("La tarea está en la lista");
  } else {
    console.log("La tarea NO está en la lista");
  }
}

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  const frutas = [];
  frutas.push("manzana");
  frutas.push("pera");
  frutas.push("naranja");
  frutas.push("platano");
  console.log(frutas);
}

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  const compras = ["pan", "leche", "huevos", "queso"];
  console.log(compras);
  const eliminado = compras.pop();
  console.log(eliminado);
  console.log(compras);
}

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  const cola = ["Ana", "Luis", "María"];
  cola.unshift("Noa");
  console.log(cola);
  const eliminado = cola.shift();
  console.log(eliminado);
  console.log(cola);
}

// ==========================================
//               EJERCICIO 16
// ==========================================

{
  const usuarios = ["ana", "luis", "maria", "noa"];
  const usuarioBuscado = "luis";
  if (usuarios.includes(usuarioBuscado)) {
    console.log("Usuario encontrado");
  } else {
    console.log("Usuario NO encontrado");
  }
}

// ==========================================
//               EJERCICIO 17
// ==========================================

{
  const modulos = ["DWCC", "DWCS", "DIW", "LMSGI"];
  console.log(modulos.indexOf("DIW"));
  console.log(modulos.indexOf("ñlahg")); //devuelve -1
}

// ==========================================
//               EJERCICIO 18
// ==========================================

{
  function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  const datos = [2, 4, 6, 8];
  console.log(sumarArray(datos)); // 20
}

// ==========================================
//               EJERCICIO 19
// ==========================================

{
  const notas = [5, 7, 8, 4, 6];
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
  console.log(calcularMedia(notas));
  console.log(calcularMedia([])); // no da null da NaN
}

// ==========================================
//               EJERCICIO 20
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  const contarAprobados = (notas) => {
    let contador = 0;
    for (let i = 0; i < notas.length; i++) {
      if (notas[i] >= 5) {
        contador++;
      }
    }
    return contador;
  };
  console.log(contarAprobados(notas)); // 3
}

// ==========================================
//               EJERCICIO 21
// ==========================================

{
  const notas = [4, 7, 9];

  for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }
  // El error estaba en usar <= en vez de <. Las posiciones del array van de 0 a 2,
  // pero notas.length vale 3. Con <=, el bucle llega a i = 3, una posición que
  // no existe, y por eso muestra undefined.
}

// ==========================================
//               EJERCICIO 22
// ==========================================

{
  const numeros = [10, 20, 30];
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += i;
  }

  console.log(suma);
  //Suma 0, 1 y 2 porque solo toma los valores de i para que sume los valores dentro del array
  //hay que utilizar el array con suma += numeros[i];

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
}

// ==========================================
//               EJERCICIO 23
// ==========================================

{
  const nombres = ["Ana", "Luis"];
  nombres = ["María", "Noa"];
}

//Mantener const y modificar posiciones del array.

{
  const nombres = ["Ana", "Luis"];
  nombres[0] = "María";
  nombres[1] = "Noa";
  console.log(nombres);
}

//Cambiar a let si realmente se quiere reasignar todo el array.

{
  let nombres = ["Ana", "Luis"];
  nombres = ["María", "Noa"];
}