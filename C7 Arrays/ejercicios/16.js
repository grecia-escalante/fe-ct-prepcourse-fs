function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

var indicesArray = []

array.forEach(function(elemento){
indicesArray.push(elemento * array.indexOf(elemento))
})

return indicesArray
}

module.exports = multiplicarElementosPorIndice;
