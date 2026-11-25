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
    "Cantidad del producto que quiere comprar:",
    1,
    CANTIDAD_MAXIMA,
  );

  if (cantidadProducto === null) {
    return;
  }

  pedidoCodigos.push(numeroProducto - 1);
  pedidoCantidades.push(cantidadProducto);
  console.log(
    "Añadido: " + cantidadProducto + " x " + PRODUCTOS[numeroProducto - 1],
  );
}

/**
 * Recorre los precios y los productos y devuelve la carta con estos
 * @returns {string} devuelve la carta con productos y precios
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
 * Redondea un numero a dos decimales
 * @param {number} numero - Numero a redondear
 * @returns {number} Numero redondeado
 */
function redondear2(numero) {
  numero = numero.toFixed(2);
  return Number(numero);
}

/**
 * Da formato de euros a un numero
 * @param {number} numero - Numero para darle formato a €
 * @returns {string} El numero redondeado a dos decimales con el simbolo del euro al final
 */
function formatearEuros(numero) {
  return numero.toFixed(2) + " €";
}

/**
 * Saluda en funcion de que hora del dia es
 * @returns {string} el saludo dependiendo de la hora
 */
function saludoSegunHora() {
  const hora = new Date().getHours();
  if (hora < 12) {
    return "Buenos dias";
  } else if (hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

/**
 * muestra un mensaje pide un numero y comprueba la validez del numero y que este en el rango de min max y lo devuelve
 * @param {string} mensaje - el mensaje que ira en el prompt para el usuario
 * @param {number} min - rango minimo del numero que puede introducir el usuario
 * @param {number} max - rango maximo del numero que puede introducir el usuario
 * @returns {number|null} el numero valido o nullsi el usuario cancela
 */
function leerEntero(mensaje, min, max) {
  let texto;
  let numero;
  let valido = false;
  do {
    texto = prompt(mensaje);
    if (texto === null) {
      return null;
    }
    numero = Number(texto);
    if (texto.trim() === "") {
      alert("No has escrito nada");
    } else if (isNaN(numero)) {
      alert("Tienes que escribir un numero");
    } else if (!Number.isInteger(numero)) {
      alert("Tienes que escribir un numero entero");
    } else if (numero < min || numero > max) {
      alert("Numero introducido fuera de rango");
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
    if (opcion === null) {
      opcion = 0;
    }

    switch (opcion) {
      case 1:
        alert(mostrarCarta());
        break;

      case 2:
        añadirProducto();
        break;

      case 3:
        console.log("pendiente");

        break;

      case 4:
        console.log("pendiente");

        break;

      case 5:
        console.log("pendiente");

        break;

      case 0:
        console.log("Hasta pronto");

        break;
    }
  } while (opcion !== 0);
}
iniciarCafeteria();
