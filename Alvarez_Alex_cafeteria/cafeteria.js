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