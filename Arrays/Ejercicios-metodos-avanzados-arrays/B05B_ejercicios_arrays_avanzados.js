// ==========================================
//               EJERCICIO 1
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  for (let i = 0; i < notas.length; i++) {
    console.log("Nota", notas[i], "en posición", i);
  }
  notas.forEach((nota, i) => {
    console.log("Nota", nota, "en posición", i);
  });
  // ¿Qué versión te parece más clara para recorrer todo el array: for o forEach? forEach
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  const notas = [4, 7, 9, 3, 5, 10, 2];
  notas.forEach((notas) => {
    if (nota >= 5) {
      console.log("Aprobado:", nota);
    } else {
      console.log("Suspenso:", nota);
    }
  });
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const numeros = [1, 2, 3];
  const resultado = numeros.forEach((numero) => {
    return numero * 2;
  });

  console.log(resultado);
  // ¿Qué muestra la consola? Undefined
  // ¿Por qué forEach no sirve para crear un nuevo array transformado? Porque forEach recorre el array pero no devuelve nada, así que los
  // valores que se calculan con el return se pierden.
  // ¿Qué método deberías usar para transformar todos los elementos? map, porque devuelve un array nuevo con los valores transformados.
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const numeros = [1, 2, 3, 4, 5];
  const dobles = numeros.map((nota) => nota * 2);
  console.log(numeros);
  console.log(dobles);
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const precios = [10, 25, 40, 100];
  const preciosConIVA = precios.map((precio) => precio * 1.21);
  console.log(precios);
  console.log(preciosConIVA);
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  const resultados = notas.map((nota) => {
    if (nota >= 5) {
      return "Aprobado";
    } else {
      return "Suspenso";
    }
  });
  console.log(resultados);
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  const nombres = ["Ana", "Luis", "María", "Pedro"];
  const mensajes = nombres.map((nombre) => "Hola, " + nombre);
  console.log(mensajes);
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  const notas = [4, 7, 9, 3, 5, 10, 2];
  const aprobados = notas.filter((nota) => nota >= 5);
  console.log("Hay", aprobados.length, "aprobados");

  console.log(aprobados);
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
  const pares = numeros.filter((numero) => numero % 2 == 0);
  console.log(numeros);
  console.log(pares);
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  const precios = [5, 12, 30, 8, 100, 45];
  const preciosAltos = precios.filter((precio) => precio > 20);
  console.log(preciosAltos);
}

// ==========================================
//               EJERCICIO 11
// ==========================================

{
  const numeros = [1, 2, 3, 4, 5];
  const porDiez = numeros.map((numero) => numero * 10);
  const mayores = numeros.filter((numero) => numero > 3);
  console.log(porDiez);
  console.log(mayores);
  // ¿Cuál de los dos métodos conserva normalmente el mismo número de elementos? map
  // ¿Cuál de los dos métodos puede devolver menos elementos que el array original? filter
}

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  const numeros = [1, 2, 3, 4];
  const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);
  console.log("La suma es", suma);

  // ¿Qué representa acumulador? una variable que sirve para ir acumulando el resultado
  // ¿Qué representa numero? Cada elemento del array, uno en cada vuelta.
  // ¿Por qué aparece un 0 al final del reduce? el valor inicial de acumulador
}

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  const precios = [12.5, 4.99, 20, 3.5];
  const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
  }, 0);
  console.log("Total de la compra:", total);
}

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  const suma = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  const media = suma / notas.length;
  console.log("Media:", media);
}

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  const numeros = [2, 4, 6];
  const suma = numeros.reduce((acumulador, numero) => {
    console.log("Acumulador:", acumulador, "Número:", numero);
    return acumulador + numero;
  }, 0);

  console.log("Resultado final:", suma);
  //Coincide si
}

// ==========================================
//               EJERCICIO 16
// ==========================================

{
  const originales = [1, 2, 3, 4];
  const copia = originales.slice();
  copia[0] = 99;
  console.log(originales);
  console.log(copia);
  // ¿Ha cambiado el array originales? no
  // ¿Qué demuestra este ejercicio? que slice() copia un array y que la copia es independiente
}

// ==========================================
//               EJERCICIO 17
// ==========================================

{
  const letras = ["a", "b", "c", "d", "e", "f"];
  const primerasTres = letras.slice(0, 3);
  const delMedio = letras.slice(2, 5);
  const ultimasDos = letras.slice(4, 6);
  console.log(letras);
  console.log(primerasTres);
  console.log(delMedio);
  console.log(ultimasDos);
}

// ==========================================
//               EJERCICIO 18
// ==========================================

/*
Mostrar cada elemento por consola	forEach()
Crear un nuevo array con los precios con IVA map()	
Obtener solo las notas aprobadas	filter()
Calcular la suma total de varios importes	reduce()
Copiar un array sin modificar el original	slice()
Extraer los tres primeros elementos	slice()
Crear un array con mensajes personalizados para cada nombre map()	
*/

// ==========================================
//               EJERCICIO 19
// ==========================================

{
  const notas = [4, 7, 9, 3, 5, 10, 6];
  const aprobados = notas.filter((nota) => nota >= 5);
  const suspensos = notas.filter((nota) => nota < 5);
  const notasSobre10 = notas.map((nota) => "Nota: " + nota + "/10");
  const suma = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  const media = suma / notas.length;
  console.log(notas);
  console.log(aprobados);
  console.log(suspensos);
  console.log(notasSobre10);
  console.log(suma);
  console.log(media);
}

// ==========================================
//               EJERCICIO 20
// ==========================================

{
  const precios = [8, 15, 23, 5, 42, 16];
  const preciosConIVA = precios.map((precio) => precio * 1.21);
  const preciosMayoresDe20 = precios.filter((precio) => precio > 20);
  const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
  }, 0);
  const primerosTres = precios.slice(0, 3);
  console.log(precios);
  console.log(preciosConIVA);
  console.log(preciosMayoresDe20);
  console.log(total);
  console.log(primerosTres);
}

// ==========================================
//               EJERCICIO 21
// ==========================================

{
  const numeros = [1, 2, 3];

  const dobles = numeros.forEach((numero) => {
    return numero * 2;
  });

  console.log(dobles);
}
//forEach recorre el array pero no devuelve nada, así que los
// valores que se calculan con el return se pierden. tiene que ser con map()

{
  const numeros = [1, 2, 3];

  const dobles = numeros.map((numero) => {
    return numero * 2;
  });

  console.log(dobles);
}

// ==========================================
//               EJERCICIO 22
// ==========================================

{
  const numeros = [1, 2, 3];

  const dobles = numeros.map((numero) => {
    numero * 2;
  });

  console.log(dobles);
}

//falta el return dentro de la funcion flecha

{
  const numeros = [1, 2, 3];

  const dobles = numeros.map((numero) => {
    return numero * 2;
  });

  console.log(dobles);
}

// ==========================================
//               EJERCICIO 23
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];

  const aprobados = notas.filter((nota) => {
    nota >= 5;
  });

  console.log(aprobados);
}

//Lo mismo que antes falta return, eso o no hacerlo con una funcion flecha y hacerlo directamente asi

{
  const notas = [4, 7, 9, 3, 5];

  const aprobados = notas.filter((nota) => nota >= 5);

  console.log(aprobados);
}

// ==========================================
//               EJERCICIO 24
// ==========================================

{
  const numeros = [1, 2, 3, 4];

  const suma = numeros.reduce((a, b) => a + b);

  console.log(suma);
}

//Nombres mas claros y valor inicial 0
//acumulador representa la suma que se va acumulando y numero es lo que recorre el array

{
  const numeros = [1, 2, 3, 4];

  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

  console.log(suma);
}

// ==========================================
//               EJERCICIO 25
// ==========================================

{
  const ventas = [120, 80, 45, 200, 30, 150];
  const ventasConIVA = ventas.map((venta) => venta * 1.21);
  const ventasAltas = ventas.filter((venta) => venta >= 100);
  const totalVentas = ventas.reduce(
    (acumulador, venta) => acumulador + venta,
    0,
  );
  const mediaVentas = totalVentas / ventas.length;
  const primerasTresVentas = ventas.slice(0, 3);
  console.log("Ventas con IVA: " + ventasConIVA);
  console.log("Ventas altas: " + ventasAltas);
  console.log("Total de ventas: " + totalVentas);
  console.log("Media de ventas: " + mediaVentas);
  console.log("Primeras tres ventas: " + primerasTresVentas);
}
