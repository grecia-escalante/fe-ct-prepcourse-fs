function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
var resultado = []
array.forEach(function(elemento) {
   resultado.push(elemento*2)
})

return resultado
}

module.exports = duplicarElementos;
