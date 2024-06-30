function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var arreglo = []
  for (let i = array.length - 1; i >= 0  ; i--) {
    arreglo.push(array[i])
  }
 return arreglo;
}

module.exports = invertirArray;
