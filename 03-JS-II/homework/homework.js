// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x > y) {
      return x;
    }
      return y;
   {
      if(x = y);
       return x || y;
      }
  }


function mayoriaDeEdad(edad) {
  if(edad >= 18) {
    return 'Allowed';
  }
    return 'Not Allowed';
}
  
  
function conection(status) {
  if(status == 1) {
    return 'Online';
  }
  if(status == 2) {
    return 'Away'
  }
  if(status <= 3) {
    return 'Ofline'
}
}


function saludo(idioma) {
  if(idioma === 'aleman') {
    return 'Guten Tag' + '!';
      } else if(idioma === 'mandarin') {
    return 'Ni Hao' + '!';
      } else if(idioma === 'ingles') {
    return 'Hello' + '!';
      } else if(idioma === 'NaN') {
    return 'Hola' + '!'
    }
  }

function colors(color) {
  switch(color) {
      case 'blue':
  return 'This is blue';
      case 'green':
  return 'This is green';
      case 'red':
  return 'This is red';
      case 'orange':
  return 'This is orange';
  default:
  return 'Color not Found';
    }
  }

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5
}

function estaEnRango(numero) {
  return numero < 50 && numero > 20
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
  if(numero )
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero


function operadoresLogicos(num1, num2, num3) {

  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {
  for(var numero = 7; numero < 100; 1++){
  }
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor) {
  switch(valor) {
      case 'boolaneo':
    return 'Soy Verdadero';
      default:
    return 'Soy Falso';
   }
  }

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
