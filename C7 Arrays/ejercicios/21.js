function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:


  var acum = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      acum.push(array[i]);
    }
  }

  if (acum.length === 3) {
    return acum;
  } 
  else {
    return "No se encontraron los meses pedidos";
  }
}

DICE QUE ESTÁ MAAAL

