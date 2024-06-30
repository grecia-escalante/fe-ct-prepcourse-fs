function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
var resultante = []

array.forEach(function(elemento){
    resultante.push(elemento.toUpperCase());
})
 return resultante

}

module.exports = convertirStringAMayusculas;
