function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

var acum = 0;
  
  for (var i = 0; i < arrayOfNums.length; i++) {
   acum = acum + arrayOfNums[i];
    }
    return acum;
      }


module.exports = agregarNumeros;
