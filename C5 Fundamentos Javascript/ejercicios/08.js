function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if (typeof numero !== "number") {
    return false;
  }
  else if (numero % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

// también se puede hacer con 
// la función del objeto nmber de js predeterminada:

// Number.isInteger(numero)


module.exports = esNumeroEntero;