function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var Mayores = []

  array.filter(function(elementos){
    if(elementos>10){
      Mayores.push(elementos)
    }
  })

return Mayores.length
}

module.exports = contarElementosMayoresA10;
