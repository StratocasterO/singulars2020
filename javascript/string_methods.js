var nombre = "Omar Olmedo Ferrer"

longitud = nombre.length // retorna el valor de la propietat "lenght", la longitud de la cadena

console.log(`La cadena de caràcters "${nombre}" té ${longitud} caràcters`)

// -----------------------------------------------------------------------------------

var segonCognom = nombre.substring(12)  // retorna la cadena des del caràcter 12

segonCognom = nombre.substr(-6)

console.log(segonCognom)

var primerCognom = nombre.substr(5,6) // retorna la cadena que comença al caràcter 5 i té longitud 6

primerCognom = nombre.substring(5,11) // retorna la cadena que comença al caràcter 5 i acaba al 11

console.log(primerCognom)

// -----------------------------------------------------------------------------------

console.log(nombre[12]) // retorna el caràcter a la posició 12

// -----------------------------------------------------------------------------------

var NOMBRE = nombre.toUpperCase();

console.log(NOMBRE)

var nombrecito = nombre.toLowerCase()

console.log(nombrecito);

// -----------------------------------------------------------------------------------

var espais = nombre.indexOf("r")    // retorna l'index de la primera aparició del caràcter "r"

console.log(espais)

espais = nombre.indexOf("r", espais+1)    // retorna l'index de la primera aparició del caràcter "r" a partir del caràcter número espais+1

console.log(espais)

espais = nombre.indexOf("r", espais+1)

console.log(espais)

espais = nombre.indexOf("r", espais+1)

console.log(espais)

espais = nombre.indexOf("r", espais+1)

console.log(espais)   // quan retorna -1 ja no hi ha més aparicions

// -----------------------------------------------------------------------------------

var ferrer = nombre.indexOf("er")   // retorna l'index del començament de la string "Ferrer"

console.log(ferrer)

var lastSpace = nombre.lastIndexOf(" ") // retorna l'index de l'ultima aparició del caràcter " "

console.log(lastSpace)

// -----------------------------------------------------------------------------------

nombre2 = nombre.slice(12)

console.log(nombre2);