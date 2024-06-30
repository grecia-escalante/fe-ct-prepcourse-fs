const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:


  var cuenta = 0
  for (const propiedades in objeto) {
    if (propiedades) {
      cuenta++
    }
};
 return cuenta
}
module.exports = contarPropiedades;
