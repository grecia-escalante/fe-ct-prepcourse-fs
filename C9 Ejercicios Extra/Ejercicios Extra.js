/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
var array = []

for (const propiedad in objeto) {
  var arrayPequeño = []
 arrayPequeño.push(propiedad)
arrayPequeño.push(objeto[propiedad])
array.push(arrayPequeño)
}
  return array
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

var arrayOrdenado = string.split("").sort().join("")
var objeto = {}
var conteo = 1

for (let i = 0; i < arrayOrdenado.length; i++) {
    if(arrayOrdenado[i] === arrayOrdenado[i + 1]) {
objeto[arrayOrdenado[i]] = conteo + 1
conteo++
    } else{
      objeto[arrayOrdenado[i]] = conteo
      conteo = 1
    }
    }
    return objeto
  }
  

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:


var minúsculas = []
var mayúscula = []


for (let i = 0; i < string.length; i++) {
  if(string[i] === string[i].toUpperCase()) {
    mayúscula.push(string[i])
  } else {
    minúsculas.push(string[i])
  }
}

var concatenada = mayúscula.concat(minúsculas)
var letras = concatenada.join("")
return letras 
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var palabras = frase.split(" ")
 

  var resultado = palabras.map(function(palabra){
  return palabra.split("").reverse().join("")
});

return resultado.join(" ")
}



function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

 var palabra = numero.toString()
  var array = palabra.split("").reverse().join("")
var original = palabra.split("").join("")
if(original === array){
 return "Es capicua"
}else return"No es capicua"
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

var array = string.split("")

var filtrada = array.filter((letra) => letra !== "a" && letra !== "b" && letra !== "c").join("")

return filtrada
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  var orden = arrayOfStrings.sort((a, b) => a.length - b.length)
  return orden


}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:


  var interseccion = []

  array1.forEach(numero => {
       for (let i = 0; i < array2.length; i++) {
      if (numero === array2[i]) {
        interseccion.push(array2[i]);
        break;
      }
    }
  });

  return interseccion;
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
