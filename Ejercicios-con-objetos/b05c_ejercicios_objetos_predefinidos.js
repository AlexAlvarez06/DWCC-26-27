// ==========================================
//               EJERCICIO 1
// ==========================================

{
  const mensaje = "Desenvolvemento Web en Contorno Cliente";
  console.log(mensaje.length);
  console.log(mensaje.toUpperCase());
  console.log(mensaje.toLowerCase());
  console.log(mensaje); //No cambia su valor
}

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  const nombreConEspacios = "   Ana   ";
  console.log(nombreConEspacios);
  const nombreLimpio = nombreConEspacios.trim();
  console.log(nombreLimpio);
  //trim elimina espacios
}

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const descripcion = "Curso de DWCC con JavaScript y HTML";
  console.log(descripcion.includes("DWCC"));
  console.log(descripcion.includes("PHP"));
  if (descripcion.includes("DWCC")) {
    console.log("El curso es de DWCC");
  }
  console.log(descripcion.includes("dwcc")); //Da false porque include diferencia entre mayusculas y minusculas
}

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const modulo = "Desenvolvemento Web en Contorno Cliente";
  const busqueda = "web";
  console.log(
    modulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()),
  );
}

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const archivo = "practica_arrays.js";
  console.log(archivo.startsWith("practica"));
  console.log(archivo.endsWith(".js"));
}

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const codigo = "DWCC-2026-A";
  console.log(codigo.slice(0, 4));
  console.log(codigo.slice(5, 9));
  console.log(codigo.slice(codigo.length - 1));
}

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  console.log(Number("123")); //123
  console.log(Number("3.14")); //3.14
  console.log(Number("hola")); //NaN
  console.log(Number(true)); //1
  console.log(Number(false)); //0
  console.log(Number("")); //0
  //NaN es Not a Number
}

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  console.log(parseInt("42", 10)); //42
  console.log(parseInt("42px", 10)); //42
  console.log(parseInt("px42", 10)); //NaN

  console.log(parseFloat("3.14")); //3.14
  console.log(parseFloat("3.14€")); //3.14
  console.log(parseFloat("hola 2.5")); //Nan
  //La diferencia esta en que parseInt trabaja con numeros de la base que quieras enteros y parseFloat unicamente con decimales
  // ParseInt lee de izquierda a derecha y para que devuelva un numero tiene que leer primero un numero
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  const precioTexto = "19.99€";
  const precioIVA = 1.21 * parseFloat(precioTexto);
  console.log("Precio con IVA: " + precioIVA);
  console.log("Con dos decimales: " + precioIVA.toFixed(2));
}

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  const edadTexto = "hola";
  const edadNumero = Number(edadTexto);
  if (!Number.isNaN(edadNumero) && edadNumero >= 18) {
    console.log("Mayor de edad");
  } else if (!Number.isNaN(edadNumero) && edadNumero <= 18) {
    console.log("Menor de edad");
  } else {
    console.log("Conversion no valida");
  }
}

// ==========================================
//               EJERCICIO 11
// ==========================================

{
  const total = 12.5 / 3;
  console.log(total);
  console.log(total.toFixed(2));
  console.log(typeof total.toFixed(2));
  // da string porque toFixed() sirve para mostrar un número con un formato concreto. No sirve para hacer cálculos.
}

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  console.log(Math.round(3.4)); //3
  console.log(Math.round(3.5)); // 4
  console.log(Math.round(3.6)); //4

  console.log(Math.floor(3.9)); // 3
  console.log(Math.ceil(3.1)); //4
  //round redondea normal, floor redondea para abajo y ceil para arriba
}

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  const nota = 6.75;
  console.log("6.75 con round: " + Math.round(nota));
  console.log("6.75 con floor: " + Math.floor(nota));
  console.log("6.75 con ceil: " + Math.ceil(nota));
}

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  const nota1 = 4;
  const nota2 = 7;
  const nota3 = 9;
  const notaMax = Math.max(nota1, nota2, nota3);
  const notaMin = Math.min(nota1, nota2, nota3);
  console.log("Nota mas alta: " + notaMax);
  console.log("Nota mas baja: " + notaMin);
}

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  const dado = Math.floor(Math.random() * 6 + 1);
  console.log("Has sacado un: " + dado);
}

// ==========================================
//               EJERCICIO 16
// ==========================================

{
  function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(numeroAleatorioEntre(1, 10));
  console.log(numeroAleatorioEntre(20, 30));
}

// ==========================================
//               EJERCICIO 17
// ==========================================

{
}

// ==========================================
//               EJERCICIO 18
// ==========================================

{
}

// ==========================================
//               EJERCICIO 19
// ==========================================

{
}

// ==========================================
//               EJERCICIO 20
// ==========================================

{
}

// ==========================================
//               EJERCICIO 21
// ==========================================

{
}

// ==========================================
//               EJERCICIO 22
// ==========================================

{
}

// ==========================================
//               EJERCICIO 23
// ==========================================

{
}

// ==========================================
//               EJERCICIO 24
// ==========================================

{
}

// ==========================================
//               EJERCICIO 25
// ==========================================

{
}

// ==========================================
//               EJERCICIO 26
// ==========================================

{
}

// ==========================================
//               EJERCICIO 27
// ==========================================

{
}

// ==========================================
//               EJERCICIO 28
// ==========================================

{
}

// ==========================================
//               EJERCICIO 29
// ==========================================

{
}

// ==========================================
//               EJERCICIO 30
// ==========================================

{
}

// ==========================================
//               EJERCICIO 31
// ==========================================

{
}

// ==========================================
//               EJERCICIO 32
// ==========================================

{
}

// ==========================================
//               EJERCICIO 33
// ==========================================

{
}
