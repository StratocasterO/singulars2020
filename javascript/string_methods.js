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

var NOMBRE = nombre.toUpperCase(); // passa a majúscules

console.log(NOMBRE)

var nombrecito = nombre.toLowerCase();  // passa a mínúscules

console.log(nombrecito);

var nomAmbEspais = "   Pepe   ";

console.log(nomAmbEspais.trim());   // elimina espais al principi i al final

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

nombre2 = nombre.slice(12)  // retorna la cadena a partir del caràcter indicat

console.log(nombre2);

var elements = nombre.split(" ");   // retorna un array amb cadenes separades pel separador indicat

console.log(elements)

// -----------------------------------------------------------------------------------

// Exercici nom i cognoms. S'introdueix una string de tres paraules i les torna per separat 
// amb la primera lletra en majúscules

var nom1, nom2, nom3;
var nom = "Un coche rojo" //prompt("Introdueix el nom i els cognoms separats per espais");

// Usant el mètode split
// arr = nom.split(" ");
// nom1 = arr[0];
// nom2 = arr[1];
// nom3 = arr[2];

var primerEspai = nom.indexOf(" ");
nom1 = nom.substring(0,primerEspai);
var segonEspai = nom.indexOf(" ", primerEspai + 1);
nom2 = nom.substring(primerEspai + 1, segonEspai);
nom3 = nom.substring(segonEspai + 1);

nom1 = capitalize(nom1);
nom2 = capitalize(nom2);
nom3 = capitalize(nom3);

console.log({"nom": nom1, "primer cognom": nom2, "segon cognom": nom3});

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1);
}

// -----------------------------------------------------------------------------------

nom = nom.replace("rojo", "azul"); // canvia una paraula per una altra

console.log(nom);

// -----------------------------------------------------------------------------------

console.log(nom1 + " " + nom2 + " " + nom3);

console.log(nom1.concat(" ", nom2, " ", nom3)); // concatena els arguments a la string original

var string1 = "paraula";

console.log(string1.charAt(3)); // retorna el caràcter a la posició 3

console.log(string1.charCodeAt(3)); // retorna el codi UFT del caràcter a la posició 3