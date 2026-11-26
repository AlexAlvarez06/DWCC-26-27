/*
 * Autor: Alex Álvarez
 * Fecha: 24/11/2026
 * Programa de pedidos para la cafetería del CIFP: muestra la carta, toma el pedido,
 * aplica el descuento del alumnado, desglosa el IVA, cobra y muestra el ticket en la consola.
 */

const PRODUCTOS = [
  "Café solo",
  "Café con leche",
  "Cacao con leche",
  "Zumo de naranja",
  "Tostada",
  "Croissant",
  "Bocadillo",
  "Agua",
];
const PRECIOS = [1.1, 1.3, 1.4, 2.0, 1.5, 1.2, 3.0, 0.8]; // IVA incluido
const IVA = 0.1; // 10 %
const DESCUENTO_ALUMNADO = 0.1; // 10 %
const CANTIDAD_MAXIMA = 10; // unidades máximas por línea de pedido
const pedidoCodigos = []; // posición del producto en PRODUCTOS
const pedidoCantidades = []; // unidades pedidas de ese producto

/**
 * Cobra el pedido: pregunta si es alumno, calcula descuento, total e IVA,
 * pide el importe entregado y muestra el ticket en la consola.
 * @returns {boolean} true si se ha pagado, false si el pedido está vacío o se cancela
 */
function pagar() {
  if (pedidoCodigos.length === 0) {
    alert("La cesta está vacía");
    return false;
  }

  // Preguntar si es alumno hasta que responda s o n
  let esAlumno = false;
  let respuesta;
  let valido = false;
  do {
    respuesta = prompt("¿Eres alumno? s/n");
    if (respuesta === null) {
      return false;
    }
    respuesta = respuesta.toLowerCase().trim();
    if (respuesta !== "s" && respuesta !== "n") {
      alert("Introduce s o n");
    } else {
      valido = true;
    }
  } while (!valido);
  if (respuesta === "s") {
    esAlumno = true;
  }

  // Cálculos (los precios ya incluyen el IVA)
  const subtotal = calcularSubtotal();
  const descuento = calcularDescuento(subtotal, esAlumno);
  const total = redondear2(subtotal - descuento);
  const base = calcularBaseImponible(total);
  const cuotaIva = redondear2(total - base);

  // Pedir el importe entregado (admite coma y no puede ser menor que el total)
  let textoPago = "";
  let pago = 0;
  valido = false; // se reinicia porque ya valía true del bucle anterior
  do {
    textoPago = prompt("Introduzca el importe entregado");
    if (textoPago === null) {
      return false;
    }
    pago = Number(textoPago.replace(",", "."));
    if (textoPago.trim() === "") {
      alert("No has escrito nada");
    } else if (isNaN(pago)) {
      alert("Tienes que escribir una cifra");
    } else if (pago < total) {
      alert("El importe no llega al total");
    } else {
      valido = true;
    }
  } while (!valido);
  const cambio = redondear2(pago - total);

  // Ticket
  console.log("==============================");
  console.log("  CAFETERÍA CIFP – TICKET");
  console.log(
    "  " +
      new Date().toLocaleDateString("es-ES") +
      "  " +
      new Date().toLocaleTimeString("es-ES"),
  );
  console.log("------------------------------");
  mostrarPedido(); // líneas del pedido y subtotal
  if (esAlumno) {
    console.log("Descuento alumnado: " + formatearEuros(-descuento));
  }
  console.log("TOTAL (IVA incluido): " + formatearEuros(total));
  console.log("  Base imponible: " + formatearEuros(base));
  console.log("  IVA (10 %): " + formatearEuros(cuotaIva));
  console.log(
    "Entregado: " +
      formatearEuros(pago) +
      " | Cambio: " +
      formatearEuros(cambio),
  );
  console.log("==============================");
  return true;
}

/**
 * Calcula la base imponible (el importe sin IVA) a partir del total con IVA
 * @param {number} totalConIva - Total del pedido con el IVA incluido
 * @returns {number} Base imponible redondeada a dos decimales
 */
function calcularBaseImponible(totalConIva) {
  return redondear2(totalConIva / (1 + IVA));
}

/**
 * Calcula el descuento del alumnado con el operador ternario
 * @param {number} subtotal - Suma de todas las líneas del pedido
 * @param {boolean} esAlumno - true si el cliente es alumno
 * @returns {number} El descuento redondeado, o 0 si no es alumno
 */
function calcularDescuento(subtotal, esAlumno) {
  return esAlumno ? redondear2(subtotal * DESCUENTO_ALUMNADO) : 0;
}

/**
 * Quita la última línea del pedido (de los dos arrays) y muestra qué se ha quitado
 */
function quitarUltimo() {
  if (pedidoCodigos.length === 0) {
    console.log("No hay nada que quitar, el pedido está vacío");
  } else {
    const cantidadQuitada = pedidoCantidades.pop();
    const codigoQuitado = pedidoCodigos.pop();
    console.log(
      "Quitado: " + cantidadQuitada + " x " + PRODUCTOS[codigoQuitado],
    );
  }
}

/**
 * Muestra en la consola cada línea del pedido con su importe y el subtotal
 */
function mostrarPedido() {
  let pedido = "";
  if (pedidoCodigos.length === 0) {
    console.log("El pedido está vacío");
    return;
  }
  for (let i = 0; i < pedidoCodigos.length; i++) {
    pedido +=
      pedidoCantidades[i] +
      " x " +
      PRODUCTOS[pedidoCodigos[i]] +
      " = " +
      formatearEuros(
        calcularImporteLinea(PRECIOS[pedidoCodigos[i]], pedidoCantidades[i]),
      ) +
      "\n";
  }
  pedido += "Subtotal: " + formatearEuros(calcularSubtotal());
  console.log(pedido);
}

/**
 * Recorre el pedido y suma el importe de todas las líneas
 * @returns {number} Subtotal redondeado a dos decimales
 */
function calcularSubtotal() {
  let suma = 0;
  for (let i = 0; i < pedidoCodigos.length; i++) {
    suma += calcularImporteLinea(
      PRECIOS[pedidoCodigos[i]],
      pedidoCantidades[i],
    );
  }
  return redondear2(suma);
}

/**
 * Calcula el importe de una línea del pedido
 * @param {number} precio - Precio de una unidad del producto
 * @param {number} cantidad - Unidades pedidas
 * @returns {number} precio × cantidad, redondeado a dos decimales
 */
function calcularImporteLinea(precio, cantidad) {
  return redondear2(precio * cantidad);
}

/**
 * Pide el número de producto y la cantidad, y los añade al pedido.
 * Si el usuario cancela en cualquier momento, no añade nada.
 */
function añadirProducto() {
  const numeroProducto = leerEntero(
    "Escoja el producto a añadir:" + "\n" + mostrarCarta(),
    1,
    PRODUCTOS.length,
  );

  if (numeroProducto === null) {
    return;
  }

  const cantidadProducto = leerEntero(
    "Cantidad del producto que quiere comprar (1 a " + CANTIDAD_MAXIMA + "):",
    1,
    CANTIDAD_MAXIMA,
  );

  if (cantidadProducto === null) {
    return;
  }

  // El usuario ve los productos del 1 al 8, pero en el array van del 0 al 7
  pedidoCodigos.push(numeroProducto - 1);
  pedidoCantidades.push(cantidadProducto);
  console.log(
    "Añadido: " + cantidadProducto + " x " + PRODUCTOS[numeroProducto - 1],
  );
}

/**
 * Recorre los productos y los precios y devuelve la carta numerada
 * @returns {string} La carta con productos y precios
 */
function mostrarCarta() {
  let carta = "";
  for (let i = 0; i < PRODUCTOS.length; i++) {
    carta +=
      i + 1 + ". " + PRODUCTOS[i] + " - " + formatearEuros(PRECIOS[i]) + "\n";
  }
  return carta;
}

/**
 * Redondea un número a dos decimales
 * @param {number} numero - Número a redondear
 * @returns {number} Número redondeado
 */
function redondear2(numero) {
  return Math.round(numero * 100) / 100;
}

/**
 * Da formato de euros a un número
 * @param {number} numero - Número al que dar formato
 * @returns {string} El número con dos decimales y el símbolo del euro al final
 */
function formatearEuros(numero) {
  return numero.toFixed(2) + " €";
}

/**
 * Saluda en función de la hora del día
 * @returns {string} El saludo según la hora
 */
function saludoSegunHora() {
  const hora = new Date().getHours();
  if (hora < 12) {
    return "Buenos días";
  } else if (hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

/**
 * Pide un número entero con prompt y repite hasta que sea válido y esté entre min y max
 * @param {string} mensaje - El mensaje que aparece en el prompt
 * @param {number} min - Valor mínimo permitido
 * @param {number} max - Valor máximo permitido
 * @returns {number|null} El número válido, o null si el usuario cancela
 */
function leerEntero(mensaje, min, max) {
  let texto;
  let numero;
  let valido = false;
  do {
    texto = prompt(mensaje);
    // Primero null: si cancela, texto.trim() daría error
    if (texto === null) {
      return null;
    }
    numero = Number(texto);
    // Number("") vale 0, por eso se comprueba el texto vacío antes
    if (texto.trim() === "") {
      alert("No has escrito nada");
    } else if (isNaN(numero)) {
      alert("Tienes que escribir un número");
    } else if (!Number.isInteger(numero)) {
      alert("Tienes que escribir un número entero");
    } else if (numero < min || numero > max) {
      alert("Número fuera de rango");
    } else {
      valido = true;
    }
  } while (!valido);

  return numero;
}

/**
 * Muestra el menú principal y gestiona las opciones hasta pagar o salir.
 */
function iniciarCafeteria() {
  alert(saludoSegunHora());
  let opcion;
  const mensajeMenu =
    "MENÚ PRINCIPAL\n1. Ver carta\n2. Añadir producto\n3. Ver pedido\n4. Quitar último producto\n5. Pagar\n0. Salir";
  do {
    opcion = leerEntero(mensajeMenu, 0, 5);
    // Cancelar el menú es lo mismo que salir
    if (opcion === null) {
      opcion = 0;
    }

    switch (opcion) {
      case 1:
        console.log(mostrarCarta());
        break;

      case 2:
        añadirProducto();
        break;

      case 3:
        mostrarPedido();
        break;

      case 4:
        quitarUltimo();
        break;

      case 5:
        // Si se ha pagado, el programa termina
        if (pagar()) {
          opcion = 0;
        }
        break;

      case 0:
        console.log("Hasta pronto");
        break;
    }
  } while (opcion !== 0);
}
iniciarCafeteria();

/*
 * =====================================================================
 * AUTOEVALUACIÓN
 * =====================================================================
 *
 * A. Proyecto y entorno
 *   A1. cafeteria.js enlazado desde index.html ......................... Sí
 *   A2. Sin errores en rojo en la consola en ningún caso de prueba ..... Sí
 *   A3. Cabecera con nombre, fecha y qué hace el programa .............. Sí
 *
 * B. Variables, constantes y tipos
 *   B1. No uso var en ningún sitio ...................................... Sí
 *   B2. const para lo que no se reasigna, let solo cuando reasigno ...... Sí
 *       (los arrays del pedido son const porque solo cambia su contenido
 *       con push y pop)
 *   B3. Nombres descriptivos ............................................ Sí
 *   B4. Convierto con Number() lo que devuelve prompt ................... Sí
 *   B5. Sé explicar por qué Number("") da 0 y no NaN .................... Sí
 *       (Number convierte el texto vacío en 0, por eso compruebo
 *       texto.trim() === "" antes de mirar si es NaN)
 *
 * C. Entrada de datos y validación
 *   C1. Compruebo null antes de usar el texto ........................... Sí
 *   C2. Detecto el texto vacío .......................................... Sí
 *   C3. Detecto valores no numéricos (NaN) .............................. Sí
 *   C4. Detecto números fuera de rango .................................. Sí
 *   C5. Rechazo decimales cuando pido un entero ......................... Sí
 *   C6. Acepto importes con coma ........................................ Sí
 *   C7. La respuesta s/n funciona con mayúsculas y espacios ............. Sí
 *
 * D. Estructuras de control
 *   D1. El menú se repite con do...while hasta pagar o salir ............ Sí
 *   D2. switch con break en cada case ................................... Sí
 *   D3. if / else if / else en el saludo y en las validaciones .......... Sí
 *   D4. Operador ternario en el descuento ............................... Sí
 *   D5. Uso operadores lógicos con sentido .............................. Sí
 *       (&& en la respuesta s/n, || en el rango de leerEntero,
 *       ! en !valido)
 *   D6. Uso siempre === y !== ........................................... Sí
 *   D7. No hay bucles infinitos: se puede cancelar en todos los prompt .. Sí
 *
 * E. Funciones
 *   E1. Están todas las funciones mínimas del R3 ........................ Sí
 *   E2. Cada función hace una sola tarea ........................... A medias
 *       (pagar() pregunta, calcula, cobra y muestra el ticket; se podría
 *       separar el ticket en una función mostrarTicket)
 *   E3. Las funciones de cálculo devuelven el resultado con return ...... Sí
 *   E4. He probado funciones sueltas en la consola ...................... Sí
 *       (redondear2(1.10 * 3) -> 3.3)
 *   E5. No repito el mismo bloque de código ............................. Sí
 *       (el ticket reutiliza mostrarPedido() y el subtotal usa
 *       calcularImporteLinea())
 *
 * F. Arrays
 *   F1. Relaciono bien los arrays paralelos ............................. Sí
 *   F2. Convierto bien el número del usuario (1-8) en índice (0-7) ...... Sí
 *   F3. Uso length en los bucles, sin tamaños fijos ..................... Sí
 *   F4. push añade a los dos arrays y pop quita de los dos .............. Sí
 *
 * G. Objetos predefinidos y cálculos
 *   G1. El saludo cambia según la hora (Date) ........................... Sí
 *   G2. El ticket muestra la fecha y la hora ............................ Sí
 *   G3. Redondeo con Math.round y muestro con toFixed(2) ................ Sí
 *   G4. No sigo calculando con el resultado de toFixed .................. Sí
 *       (toFixed solo se usa dentro de formatearEuros)
 *   G5. Base + IVA suma el total ........................................ Sí
 *   G6. El cambio es correcto y no se acepta un pago insuficiente ....... Sí
 *
 * H. Calidad y pruebas
 *   H1. Código bien sangrado y fácil de leer ............................ Sí
 *   H2. Cada función tiene comentario de cabecera ....................... Sí
 *   H3. He ejecutado todos los casos P1-P16 ............................. Sí
 *       (todos correctos)
 *   H4. Mensajes claros y sin faltas de ortografía ...................... Sí
 *
 * ---------------------------------------------------------------------
 * REFLEXIÓN FINAL
 * ---------------------------------------------------------------------
 *
 * 1. ¿Qué parte te ha costado más y cómo la resolviste?
 *    La opción de pagar, sobre todo los bucles de validación. Al principio
 *    usaba || en lugar de && en la respuesta s/n y siempre salía el aviso.
 *    También se me olvidaba volver a poner valido a false antes del segundo
 *    bucle. Lo resolví repasando la condición paso a paso con un ejemplo.
 *
 * 2. ¿Qué error has tenido más veces en la consola? ¿Qué significaba?
 *    "... is not defined" y "Cannot access 'total' before initialization".
 *    El primero salía por usar una variable que no existía en esa función
 *    (había copiado nombres de otra). El segundo, por usar una const antes
 *    de la línea donde se crea.
 *
 * 3. ¿Cómo explicarías la diferencia entre "", null y NaN?
 *    "" es lo que devuelve prompt si pulsas Aceptar sin escribir: un texto
 *    vacío. null es lo que devuelve si pulsas Cancelar: no hay texto, y si
 *    haces .trim() falla. NaN es lo que da Number() cuando el texto no es un
 *    número, como "abc" o "2,50". Por eso se comprueba primero null, después
 *    el vacío y después NaN.
 *
 * 4. ¿Qué contenido de la UD1 necesitas repasar más?
 *    Los operadores lógicos dentro de las condiciones y el orden en que hay
 *    que declarar las variables.
 *
 * 5. ¿Has hecho algún reto de ampliación? ¿Cuál?
 *    No.
 */
