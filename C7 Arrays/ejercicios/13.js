function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var pares = []

array.filter(function(elementos){
  if(elementos % 2 === 0){
    pares.push(elementos)}
}) 
  return pares
}

module.exports = filtrarNumerosPares;
