function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var acum = 0;
 
  for (var i = 0; i < resultadosTest.length; i++){
    acum = acum + resultadosTest[i];
  }
  var acum2 = acum / resultadosTest.length
  return acum2
}

module.exports = promedioResultadosTest;
