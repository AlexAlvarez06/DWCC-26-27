// 1. Una función anónima asignada a una constante
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// 2. Una función flecha con llaves y return explícito
const multiplicar = (a, b) => {
  return a * b;
};

// 3. Una función flecha compacta (return implícito)
const dividir = (a, b) => a / b;

// 4. Una función calcular que recibe un callback
function calcular(a, b, operacion) {
  return operacion(a, b);
}

// 5. Dos llamadas a calcular (función declarada y función flecha inline)
function sumar(x, y) {
  return x + y;
}

const resultadoDeclarada = calcular(10, 5, sumar);
const resultadoInline = calcular(10, 5, (x, y) => x - y);

// 6. Ejemplo correcto de setTimeout (pasando la referencia de la función, sin paréntesis)
function mostrarAviso() {
  console.log("Este mensaje aparece tras 2 segundos.");
}

setTimeout(mostrarAviso, 2000);

/*
1. Función anónima:
Es una función que carece de un nombre identificador tras la palabra clave 'function'. 
Se utiliza comúnmente para asignarla a una variable o para pasarla "al vuelo" como argumento a otra función.

2. Función flecha (Arrow function):
Es una sintaxis más corta y moderna (introducida en ES6) para escribir funciones usando '=>'. 
Si la función tiene una sola línea de código, permite omitir las llaves {} y la palabra reservada 'return' (conociéndose como return implícito).

3. Callback:
Es una función que se envía como argumento (parámetro) a otra función. 
La función receptora se encarga de ejecutar ese callback en su interior en el momento adecuado (por ejemplo, tras un cálculo o un tiempo de espera).

4. Diferencia entre pasar una función y ejecutarla:
- Ejecutar una función: Se utilizan paréntesis (ej. 'sumar(2, 2)'). El código se procesa en ese exacto instante y se evalúa su resultado.
- Pasar una función: Se utiliza solo el nombre de la función sin paréntesis (ej. 'sumar'). En lugar de ejecutarla, entregas la "receta" o referencia para que otra función decida cuándo llamarla (como ocurre en setTimeout o calcular).
*/
