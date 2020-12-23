// Mètodes arrays:

var elMeuPrimerArray = ["Oscar", "Ester", 27.8, "Sergi"];

// sel·lecciono l'element amb index 2
alumne1 = elMeuPrimerArray[2];

console.log(alumne1);

// mostra tot el contingut separat per comes
console.log(elMeuPrimerArray.toString());

// JOIN() mostra tot el contingut separat pel separador definit
console.log(elMeuPrimerArray.join(" - "));

// POP() elimina i retorna l'ultim element de l'array
var sergi = elMeuPrimerArray.pop()

console.log([sergi, elMeuPrimerArray]);

// PUSH() afegeix al final els elements
elMeuPrimerArray.push("Sergi", "Dani");

console.log(elMeuPrimerArray);

// SHIFT() elimina i retorna el primer element de l'array
var oscar = elMeuPrimerArray.shift();

console.log([oscar, elMeuPrimerArray]);

// UNSHIFT() afegeix al principi els elements
elMeuPrimerArray.unshift("Oscar", "Alex");

console.log(elMeuPrimerArray);

// SPLICE() elimina i retorna 1 element a partir de la posició 3 i afegeix a la mateiax posició els elements
var eliminados = elMeuPrimerArray.splice(3,1,"Ricardo","Eva","Karina");

console.log([eliminados, elMeuPrimerArray]);

var elMeuSegonArray = ["Bruno", "Pikachu", "Alsik", "Black", "Khaleesi"];

// CONCAT() concatena dos arrays
console.log(elMeuPrimerArray.concat(elMeuSegonArray));

// SLICE() retorna els elements de l'array des de l'element indicat
var sliced = elMeuSegonArray.slice(2);

console.log([sliced, elMeuSegonArray]);

console.log("----------------------------------------------");

// -----------------------------------------------------------------------------------------------

// Ordenació Arrays

// SORT() ordena alfabeticament
elMeuSegonArray.sort();

console.log(elMeuSegonArray);

// REVERSE() inverteix l'ordre dels elements
elMeuSegonArray.reverse();

console.log(elMeuSegonArray);

// el mètode sort() no funciona amb números
elMeuTercerArray = [54, 16, 1, -5, 4, 3.14, 4, 1/3];

elMeuTercerArray.sort();

console.log(elMeuTercerArray);

// perquè funcioni li definim una funció anònima (amb funcions arrow) per fer la comparació
elMeuTercerArray.sort((a,b) => a - b);      // "(a,b) => a - b" és la definició de la funció anònima amb paràmetres a i b que retorna a - b

console.log(elMeuTercerArray);

console.log("----------------------------------------------");

// --------------------------------------------------------------------------------------------------

// Recòrrer els elements d'un array

var alumnes = "";

for (alumne of elMeuPrimerArray){   // i = 0; i < 10; i++
    alumnes += alumne + " ";
    console.log("Hola, " + alumne);
}

console.log(alumnes)

console.log("----------------------------------------------");

// -----------------------------------------------------------------------------------

// Exercici llista de la compra:

// agafa els productes en un diàleg
var productes = prompt("Introdueix els productes separats per comes ','");

// separa els productes en elements d'un array
productes = productes.split(",");

console.log(productes);

// elimina els espais al principi i al final d'un string
// (uso el for amb un índex perque vull reescriure cada element de l'array)
for (i = 0; i < productes.length; i++) {
    productes[i] = productes[i].trim();
}

// ordena els prodcutes alfabèticament
productes.sort();

console.log("Has de comprar:");

// (uso el for/of per pintar els elements a la consola)
for (producte of productes) {
    console.log(`  - ${producte}`)
}