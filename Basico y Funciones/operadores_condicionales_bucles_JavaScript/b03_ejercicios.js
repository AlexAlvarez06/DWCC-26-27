// ==========================================
//               EJERCICIO 1
// ==========================================

{
  console.log(5 > 3); //true
  console.log(5 < 3); //false
  console.log(5 >= 5); //true
  console.log(4 <= 2); //false
  console.log(10 === 10); //true
  console.log(10 !== 8); //true
}
//Una expresion booleana es aquella que solo puede ser verdadera o falsa.

// ==========================================
//               EJERCICIO 2
// ==========================================

{
  console.log(5 == "5"); //true
  console.log(5 === "5"); //false

  console.log(0 == false); //true
  console.log(0 === false); //false

  console.log("1" == 1); //true
  console.log("1" === 1); //false
}
//¿Qué operador realiza conversión automática de tipos? El ==
//¿Cuál se recomienda usar normalmente en JavaScript? ===
//Explica por qué 5 == "5" y 5 === "5" no dan el mismo resultado. porque == hace la conversion y solo compara el contenido y === compara tambien que sean el mismo tipo de dato.

// ==========================================
//               EJERCICIO 3
// ==========================================

{
  const respuesta = "si";
  //const respuesta = "Si";
  // const respuesta = "SI";
  // const respuesta = "no";
  if (respuesta == "si") {
    console.log("Has respondido si");
  } else {
    console.log("No has respondido si");
  }
}
//Si que importan las mayusculas y las minusculas

// ==========================================
//               EJERCICIO 4
// ==========================================

{
  const temperatura = 18;

  console.log(temperatura < 0);
  console.log(0 <= temperatura <= 25);
  console.log(temperatura > 25);
}
// ==========================================
// Parte 2. Operadores lógicos: && , || , !
// ==========================================

// ==========================================
//               EJERCICIO 5
// ==========================================

{
  const edad = 20;
  const tieneCarnet = false;

  const puedeConducir = edad >= 18 && tieneCarnet;

  console.log(puedeConducir);
}
//¿Qué valor muestra por consola? False
//¿Por qué? Porque tieneCarnet es False y tienen que ser las dos true para que de true
//Cambia tieneCarnet a true. ¿Qué cambia? Que muestra por consola true

// ==========================================
//               EJERCICIO 6
// ==========================================

{
  const esAdmin = false;
  const esEditor = false;

  const puedeEditar = esAdmin || esEditor;

  console.log(puedeEditar);
}
//¿Qué valor muestra por consola? True
//¿Por qué? Porque una de las dos costantes tiene que ser true para que muestre true
//Cambia esEditor a false. ¿Qué ocurre? Que ahora muestra false

// ==========================================
//               EJERCICIO 7
// ==========================================

{
  const logueado = false;

  console.log(logueado); //Muestra false
  console.log(!logueado); //Muestra true
}
//Si cambias logueado a true mostrara lo contrario
//El operador ! cambia el valor booleano al contrario

// ==========================================
//               EJERCICIO 8
// ==========================================

{
  const edad = 17;
  const acompañado = true;

  // Puede entrar si es mayor de edad O si va acompañado.
  const puedeEntrar = acompañado || edad >= 18;

  console.log(puedeEntrar);
}
{
  const usuario = "admin";
  const password = "1234";

  // El acceso solo es válido si usuario es "admin" Y password es "1234".
  const accesoValido = usuario == "admin" && password == "1234";
  console.log(accesoValido);
}

// ==========================================
//               EJERCICIO 9
// ==========================================

{
  console.log(true && true); //true
  console.log(true && false); //false
  console.log(false && true); //false
  console.log(false && false); //false

  console.log(true || true); //true
  console.log(true || false); //true
  console.log(false || true); //true
  console.log(false || false); //false

  console.log(!true); //false
  console.log(!false); //true
}
// && devuelve true cuando los dos son true
// || devuelve true cuando cuando minimo uno de los dos es true
// ! sirve para cambiar de true a false y de false a true

// ==================================================================
// Parte 3. Valores truthy/falsy, cortocircuito y valores por defecto
// ==================================================================

// ==========================================
//               EJERCICIO 10
// ==========================================

{
  if (false) {
    console.log("false es truthy");
  }

  if (0) {
    console.log("0 es truthy");
  }

  if ("") {
    console.log("cadena vacía es truthy");
  }

  if (null) {
    console.log("null es truthy");
  }

  if (undefined) {
    console.log("undefined es truthy");
  }

  if (NaN) {
    console.log("NaN es truthy");
  }
}
//No muestra nada por pantalla porque todos dan false

// ==========================================
//               EJERCICIO 11
// ==========================================

{
  if ("hola") {
    console.log('"hola" es truthy');
  }

  if ("0") {
    console.log('"0" es truthy');
  }

  if ("false") {
    console.log('"false" es truthy');
  }

  if (1) {
    console.log("1 es truthy");
  }

  if ([]) {
    console.log("[] es truthy");
  }

  if ({}) {
    console.log("{} es truthy");
  }
}
//Todos se muestran por pantalla porque todos son truthy

// ==========================================
//               EJERCICIO 12
// ==========================================

{
  const nombre = "";

  if (nombre) {
    console.log("Nombre introducido");
  } else {
    console.log("No se ha introducido nombre");
  }
}
//Con Ana da true e imprime nombre introducido y con una cadena vacia cuenta como false

// ==========================================
//               EJERCICIO 13
// ==========================================

{
  let nombreUsuario = null;

  const nombreMostrado = nombreUsuario || "Invitado";

  console.log(nombreMostrado);
}
//Devuelve Invitado si nombreUsuario es null o ""
//Si nombreUsuario es Ana devuelve Ana
//el operador || no sabe diferenciar entre (null o undefined) y (""). Si en tu programa permitir un nombre vacío fuera algo válido y correcto, usar || te arruinaría el dato sobreescribiéndolo con "Invitado"

// ==========================================
//               EJERCICIO 14
// ==========================================

{
  function saludar() {
    console.log("Hola desde la función");
    return true;
  }

  false && saludar();
}
//No se ejecuta saludar, al no ejecutarse la función, el console.log de su interior nunca llega a dispararse.
//Como el operador AND requiere que ambas condiciones sean verdaderas y la primera ya es false, se detiene el proceso inmediatamente y omitiendo la lectura de la parte derecha donde está la función.
//si ejecutas pones true en vez de false si que se ejecuta la funcion o si pones la funcion antes que el false

// ==========================================
//               EJERCICIO 15
// ==========================================

{
  function saludar() {
    console.log("Hola desde la función");
    return true;
  }

  true || saludar();
}
//Tampoco se ejecuta la funcion porque al haber un true ya da como buena la condicion directamente y no comprueba la segunda opcion
//Si pusiera false si que llegaria a ejecutarse

// =============================================
// Parte 4. Condicionales: if, if/else, else if
// =============================================

// ==========================================
//               EJERCICIO 16/17
// ==========================================

{
  const edad = 19;
  console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
}

// ==========================================
//               EJERCICIO 18
// ==========================================

{
  const nota = 8;
  if (nota >= 9) {
    console.log("Sobresaliente");
  } else if (nota >= 7) {
    console.log("Notable");
  } else if (nota >= 5) {
    console.log("Aprobado");
  } else {
    console.log("Suspenso");
  }
}

// ==========================================
//               EJERCICIO 19
// ==========================================

{
  const nota = 6.99;
  if (0 > nota > 10) {
    console.log("Nota no valida");
  } else if (nota >= 9) {
    console.log("Sobresaliente");
  } else if (nota >= 7) {
    console.log("Notable");
  } else if (nota >= 5) {
    console.log("Aprobado");
  } else {
    console.log("Suspenso");
  }
}

// ==========================================
//               EJERCICIO 20
// ==========================================

{
  let importeCompra = 100;
  let descuento = 0;
  if (importeCompra < 50) {
    console.log("Sin descuento");
  } else if (importeCompra < 100) {
    console.log("Descuento del 5%");
    descuento = 5;
  } else if (importeCompra >= 100) {
    console.log("Descuento del 10%");
    descuento = 10;
  }
  console.log(importeCompra * (1 - descuento / 100));
}

// ==========================================
//               EJERCICIO 21
// ==========================================
{
  const usuario = "admin";
  const password = "1234";
  if (usuario == "admin" && password == "1234") {
    console.log("Acceso permitido");
  } else {
    console.log("Acceso denegado");
  }
}

// ==========================================
//               EJERCICIO 22
// ==========================================

{
  const edad = 17;
  const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
  console.log(mensaje);
}

// ==========================================
//               EJERCICIO 23
// ==========================================

{
  const logueado = false;
  const textoBoton = logueado ? "Cerrar sesion " : "Iniciar sesion";
  console.log(textoBoton);
}

// ==========================================
//               EJERCICIO 24
// ==========================================

//Indica si usarías operador ternario o if/else en cada caso. Justifica brevemente.

//Elegir entre "Aprobado" y "Suspenso" según una nota. //Ternario
//Ejecutar 8 líneas distintas de código si un usuario es administrador. // if/else
//Asignar "mañana" o "tarde" según la hora. //ternario
//Validar un formulario completo con muchos campos. // if/else

// ==========================================
//               EJERCICIO 25
// ==========================================

{
  const nota = 8;

  const resultado =
    nota >= 9
      ? "Sobresaliente"
      : nota >= 7
        ? "Notable"
        : nota >= 5
          ? "Aprobado"
          : "Suspenso";

  console.log(resultado);
}

//¿Funciona? SI
//¿Es fácil de leer? No
//¿Qué estructura sería más recomendable para este caso en un nivel inicial? if/else

// ==========================================
//               EJERCICIO 26
// ==========================================

{
  dia = 7;
  switch (dia) {
    case 1:
      console.log("Lunes");

      break;
    case 2:
      console.log("Martes");

      break;
    case 3:
      console.log("Miercoles");
      break;
    case 4:
      console.log("Jueves");

      break;
    case 5:
      console.log("Viernes");

      break;
    case 6:
    case 7:
      console.log("Fin de semana");

      break;

    default:
      console.log("Dia no valido");

      break;
  }
}

// ==========================================
//               EJERCICIO 27
// ==========================================

{
  let opcion = 1;

  switch (opcion) {
    case 1:
      console.log("Mostrar lista de usuarios");

      break;
    case 2:
      console.log("Crear nuevo usuario");

      break;
    case 3:
      console.log("Borrar usuario");

      break;

    default:
      console.log("Opcion no válida");

      break;
  }
}

//¿Funciona igual si el case es 1 que si el valor es "1"? No no funciona igual
//¿Qué tipo de comparación utiliza switch? estricta

// ==========================================
//               EJERCICIO 28
// ==========================================

{
  const rol = "admin";

  switch (rol) {
    case "admin":
      console.log("Acceso total");

      break;
    case "editor":
      console.log("Puede editar contenido");

      break;
    case "invitado":
      console.log("Solo lectura");

      break;
    default:
      console.log("rol no reconocido");

      break;
  }
}

// ==========================================
//               EJERCICIO 29
// ==========================================

{
  const opcion = 1;

  switch (opcion) {
    case 1:
      console.log("Opción 1");
      break;
    case 2:
      console.log("Opción 2");
      break;
    case 3:
      console.log("Opción 3");
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

//¿Qué mensajes se muestran? Se muestran todos
//¿Por qué ocurre? porque no hay break; en ningun case
//Corrige el código usando break.

// ==========================================
//               EJERCICIO 30
// ==========================================

{
  let numero = 1;

  while (numero <= 5) {
    console.log(numero);
    numero++;
  }
}

// ==========================================
//               EJERCICIO 31
// ==========================================

{
  let numero = 10;
  while (numero > 0) {
    console.log(numero);
    numero -= 1;
  }
}

// ==========================================
//               EJERCICIO 32
// ==========================================

{
  let numero = 0;
  let suma = 0;
  while (numero <= 10) {
    suma += numero;
    numero++;
  }
  console.log("la suma de 1 a 10 es " + suma);
}

// ==========================================
//               EJERCICIO 33
// ==========================================

{
  let x = 1;

  while (x <= 5) {
    console.log(x);
    x++;
  }
}

//¿Qué problema tiene? ¿Por qué se produce un bucle infinito? x no se actualiza nunca por lo que no sale del bucle
//Corrige el código.

// ==========================================
//               EJERCICIO 34
// ==========================================

{
  let numero;

  do {
    numero = Number(prompt("Introduce un número mayor que 0"));
  } while (isNaN(numero) || numero >= 0);

  console.log("Número correcto:", numero);
}

// ==========================================
//               EJERCICIO 35
// ==========================================

{
  let password;

  do {
    password = prompt("Introduce la contraseña");
  } while (password !== "dwcc");
}

// ==========================================
//               EJERCICIO 36
// ==========================================

{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ==========================================
//               EJERCICIO 37
// ==========================================

{
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

// ==========================================
//               EJERCICIO 38
// ==========================================

{
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}

// ==========================================
//               EJERCICIO 39
// ==========================================

{
  const n = 5;

  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}

// ==========================================
//               EJERCICIO 40
// ==========================================

{
  let suma = 0;

  for (let i = 0; i <= 100; i += 2) {
    suma += i;
  }
  console.log("La suma de los numeros pares del 1 al 100 es: " + suma);
}

// ==========================================
//               EJERCICIO 41
// ==========================================

{
  for (let i = 0; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " es multiplo de 3 y 5");
    } else if (i % 3 == 0) {
      console.log(i + " es multiplo de 3");
    } else if (i % 5 == 0) {
      console.log(i + " es multiplo de 5");
    } else {
      console.log(i + " no cumple ninguna");
    }
  }
}

// ==========================================
//               EJERCICIO 42
// ==========================================

{
  let opcion = "";

  while (opcion !== "3") {
    opcion = prompt("Elige una opción: 1, 2 o 3");

    switch (opcion) {
      case "1":
        console.log("Opcion 1: Mostrar datos");

        break;
      case "2":
        console.log("Opcion 2: Añadir dato");

        break;
      case "3":
        console.log("Saliendo del menu");

        break;
      default:
        console.log("opcion no valida");

        break;
    }
  }
}

// ==========================================
//               EJERCICIO 43
// ==========================================

{
  const secreto = 7;
  let numero;
  while (numero !== secreto) {
    numero = Number(prompt("Intente adivinar el numero: "));
    if (isNaN(numero)) {
      console.log("Debes introducir un numero");
    } else {
      console.log("Has fallado, vuelve a intentarlo");
    }
  }
  console.log("Correcto el numero era el " + secreto);
}

// ==========================================
//               EJERCICIO 44
// ==========================================

{
  const secreto = 7;
  let numero;
  let intento = 0;
  while (numero !== secreto && intento !== 3) {
    numero = Number(prompt("Intente adivinar el numero: "));
    intento++;
    if (isNaN(numero)) {
      console.log("Debes introducir un numero");
    } else if (numero !== secreto) {
      console.log("Has fallado, vuelve a intentarlo");
    }
  }
  if (numero === secreto) {
    console.log("Correcto el numero era el " + secreto);
  } else {
    console.log(
      "Has agotado los intentos, el numero secreto era el " + secreto,
    );
  }
}

// ==========================================
//               EJERCICIO 45
// ==========================================

{
  const notas = [4, 7, 9, 3, 5];
  let aprobados = 0;
  let suspensos = 0;
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if (nota >= 5) {
      aprobados++;
    } else {
      suspensos++;
    }
  }
  console.log("Aprobados: " + aprobados + ", Suspensos: " + suspensos);
}

// ==========================================
//               EJERCICIO 46
// ==========================================

{
  const numeros = [8, 3, 15, 2, 10];
  let mayor = 0;
  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero > mayor) {
      mayor = numero;
    }
  }
  console.log("El numero mayor es el: " + mayor);
}

/*
Preguntas finales de repaso

¿Qué diferencia hay entre if, if/else e if/else if/else? 
if: ejecuta un bloque solo si la condición es verdadera.
if/else: añade un camino alternativo cuando es falsa.
if/else if/else: encadena varias condiciones; se ejecuta la primera verdadera y, si ninguna lo es, el else.

¿Cuándo usarías switch en lugar de varios else if?
Cuando comparas una misma variable con muchos valores concretos (por igualdad estricta). Queda más claro que una cadena larga de else if.

¿Qué diferencia hay entre && y ||?
&& (Y): verdadero solo si ambas condiciones lo son.
|| (O): verdadero si al menos una lo es.

¿Qué hace el operador !?
Niega un valor: convierte a booleano y lo invierte (!true → false, !0 → true).

Escribe tres valores falsy en JavaScript.
0, "" (cadena vacía), null. (También undefined, NaN, false y 0n.)

¿Por qué "false" es truthy?
Porque es una cadena no vacía, y todas las cadenas no vacías son truthy, sin importar su contenido.

¿Qué es el cortocircuito?
Que JavaScript deja de evaluar en cuanto el resultado ya está decidido: en a && b, si a es falsy no evalúa b; en a || b, si a es truthy no evalúa b.

¿Para qué puede usarse || como valor por defecto?
Devuelve el primer valor truthy, así que const nombre = entrada || "Anónimo"; usa "Anónimo" si entrada está vacía o es falsy. Ojo: también descarta 0 y ""; para eso existe ??.

¿Cuándo es adecuado usar el operador ternario?
Para elegir entre dos valores según una condición sencilla, en una sola línea: const estado = nota >= 5 ? "Aprobado" : "Suspenso";. Si se complica o se anida mucho, mejor if/else.

¿Qué problema puede provocar olvidar actualizar la variable de control en un while?
Que la condición nunca cambia y el bucle se vuelve infinito, bloqueando el programa.

¿Qué diferencia principal hay entre while y do...while?
while comprueba la condición antes de ejecutar (puede no ejecutarse nunca); do...while la comprueba después, así que se ejecuta al menos una vez.

¿Cuándo suele ser más cómodo usar for?
Cuando sabes de antemano cuántas vueltas das o recorres una secuencia (por ejemplo, un array con índice), porque inicialización, condición y actualización quedan juntas en la cabecera.

*/





















