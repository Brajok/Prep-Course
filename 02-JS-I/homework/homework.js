// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Joel';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 22;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return (str)
}

function suma(x, y) {
  return x +y;  
}
suma(4,2)
6

function resta(x, y) {
  return x -y;  
}
resta(4,2)
2


function multiplica(x, y) {
  return x *y;  
}
multiplica(4,2)
8

function divide(x, y) {
  return x /y; 
}
divide(4,2)
2

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
 if ('str1'='str2') {
 return true;
 } else {
   return false;
 }
}

function menosQueNoventa(num) {
  if (num<90) {
    return true;
  } else {
    return false;
  }
}
  


function mayorQueCincuenta(num) {
  if (num<50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  var x /y 
}
  
function esPar(num) {
  if (num 2 % === 0) {
    return true;
  } else {
    return false;
  }
}
  

function esImpar(num) {
  if (num 2 % === 1) {
    return true;
  } else {
    return false;
  }
}
}

function elevarAlCuadrado(num) {
  return match.pow(num, 2);
}

function elevarAlCubo(num) {
  return num **=num;
}

function elevar(num, exponent) {
  return num ** expponent;
}

function redondearNumero(num) {
  return num++
}

function redondearHaciaArriba(num) {
  return match.random (num)
}

function numeroRandom() {
  return match.random ()
}

function esPositivo(numero) {
  if numero === 0;
  return false; { 
  else if (numero < 0)}
  return 'Es Negativo' 
  {
    else if (numero > 0)}
  return 'Es Positivo';
}

function agregarSimboloExclamacion(str) {
  return 'str' + '!'
}

function combinarNombres(nombre, apellido) {
  var combinado = Joel + '' + Klos;
  return combinado;
}

function obtenerSaludo(nombre) {
  return 'Hola' + nombre + '!'';
}

function obtenerAreaRectangulo(alto, ancho) {
  return (alto * ancho);
}


function retornarPerimetro(lado){
  return lado *4
}


function areaDelTriangulo(base, altura){
  return base * altura/2
}


function deEuroAdolar(euro){
  return euro *1.2;
}


function esVocal(letra){
  if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
