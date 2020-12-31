// així es posa un comentari d'una sola linia

/*  així es posa
un comentari
multilinia     */

console.log("JavaScript carregat des de l'etiqueta <script> dins el <body>"); // console.log() mostra el text a la consola (F12)

// document.write("<p style='color: purple'>Això escriu dins el body</p>"); // document.write() afegeix el text a continuació de l'script



//* --------------------- Variables ---------------------

console.log("--------------------- Variables ---------------------");

var a;          // declara una variable (pot ser String, Number, Array, Object, Boolean)

a = 5;          // assigna un valor a una variable (=, +=, -=, *=, /=)

var b = 10;     // declara i assigna una variable

var c, d, e;    // declara més d'una variable

c = a;          // assigna a una variable el valor d'una altra
d = b;
e = c + d;      // fa operacions amb variables (+, -, *, /, **, %)

console.log("La suma de " + c + " i " + d + " és " + e);    // concatenació de Strings
console.log('Les variables string també es poden definir amb cometes simples');
console.log(`Si hem de posar variables dins una string és més fàcil amb un literal template: ${c} + ${d} = ${e}`);  // template literals



//* ------------------------- Strings --------------------------

console.log("--------------------- Strings ---------------------");

console.log("Això és una\nstring amb\nsalts de linia")   // els caràcters \n s'interpreten com un salt de línia

console.log(`        Dins els template literal
s'interpreten els espais
i els salts de línia`);     // els template literals funcionen com el <pre> a HTML

var nom, cognom, edat;

nom = "Manuel";
cognom = "Pérez";
edat = 47;

var frase = `El ${nom} ${cognom} té ${edat} anys`   // una string creada a partir de variables con template literal

console.log(frase);

console.log("%cAquest missatge té CSS", "color: blue; font-style: italic");     // afegir CSS a un missatge de consola amb %c



//* ------------------------- Funcions --------------------------

console.log("--------------------- Funcions ---------------------");

function funcioAmbReturn(nom) {     // definició d'una funció
return `Hola, ${nom}`;              // return acaba l'execució de la funció i retorna el valor indicat
}

function funcióSenseReturn(nom) {
    console.log(`Hola, ${nom}`);    // aquí la funció acaba quan s'acaba el codi
}

funcioAmbReturn("Eva");             // aquesta línia només perd el temps

funcióSenseReturn("Ricardo");       // aquesta mostra per la consola "Hola, Ricardo"

var saludoEva = funcioAmbReturn("Eva");     // guardem en una variable el que retorna la funció
console.log(saludoEva);                     // i aquí ho mostrem a la consola

// ---------------------------

function suma(a,b,c,d,e) {
    var resultat = a;               // inicialitza un acumulador del resultat
    
    resultat += b;                  //
    resultat += c + d;              // diferents maneres de sumar els paràmentres al resultat
    resultat = resultat + e;        //
    
    return resultat;                // retorna el resultat
}

// ---------------------------

function lasVegas(sexo,drogas,dinero){    // els paràmentres i les variables de dins d'una                          
var bodas;                                // funció només estan definides en l'àmbit de la funció
dinero = 0;                               // lo que pasa en lasVegas() se queda en lasVegas()

return dinero;                            // la única cosa que "surt" de lasVegas() és zero
}

console.log(lasVegas("poco", "LSD, MDMA, cocaína", 1000));  // això mostra "0" per la consola

// ---------------------------

var nombre = "Omar";

function modificarNombre(nombre2) {     // funció que modifica una variable externa
    nombre = nombre2;                   // asigna a la variable nombre el valor del paràmentre introduit
}

modificarNombre("Óscar");

console.log(nombre);

// ---------------------------

function modificarNombre2() {           
    nombre = "Sergi";                   // asigna a la variable nombre el valor "Sergi"
}

modificarNombre2();

console.log(nombre);

// ---------------------------

function nomCognoms(nom, cognom1, cognom2) {
    return `${nom} ${cognom1} ${cognom2}`;
}

function saludarNomCognoms(n, c1 = "Sánchez", c2 = "López") {   // aquesta funció te valors per defecte dels paràmentres c1 i c2
    var nomComplet = nomCognoms(n, c1, c2);                     // aquesta funció usa una crida a una altra funció
    
    console.log("El teu nom és " + nomComplet);
}

saludarNomCognoms("Yifei", "Báez", "Churión");

saludarNomCognoms("Genís", "Batllori");



//* ------------------------- Funcions arrow --------------------------

console.log("-------------------- Funcions arrow --------------------");

const funcioSenseParam = () => {
    return "valor retornat de la funció arrow";    //! ⚠️ la declaració return finalitza l'execució de la funció ⚠️
    console.log("Funció executada");               // si vull fer un console.log() per debugar a dins una funcio, sempre abans del return
}

funcioSenseParam();                 // això no fa res

console.log(funcioSenseParam());    // això pinta a la consola el valor retornat per la funció

// -------------------------------

const funcioAmbParam = (x, y) => {
    return "" + x + x + x + y + y + y;  // afegir una string buida "" al principi fa que els simbols + siguin concatenacions de strings
}

console.log(funcioAmbParam(3, 5));  // això pinta a la consola el valor retornat per la funció

// -------------------------------

const funcioReturnSolo = (base,exp) => base ** exp;  // si després de la fletxa només posem un statement, retorna aquest valor com si tingués un return

var potencia = funcioReturnSolo(3, 5);   // això asigna en valor retornat per la funció a la variable potència
console.log(potencia);

// -------------------------------

var diners = 0;

const afegirDiners = (quantitat) => {
    diners += quantitat;
}

afegirDiners(1000);
afegirDiners(500);

console.log(diners);

// -------------------------------

function mayusMinus(string, mode = "M") {   // podem fer funcions amb "modes" afegint un paràmetre que ens serveixi per sel·leccionar
if (mode == "M") {                      // quina part del codi s'executa
return string.toUpperCase();
} else if (mode == "m") {
    return string.toLowerCase();
} else {
    console.log(`%cEl modo introducido no es válido`, `color: red`);
}
}

console.log(mayusMinus("Omar", "M"));



//* ---------------------------- Condicionals ----------------------------------

console.log("--------------------- Condicionals ---------------------");

var condicio, condicio2, x;

condicio = "10" == 10;  // assigna a la variable el resultat d'una operació booleana (true o false)

console.log(condicio);

condicio = "23.4" === 23.4;     // l'operador '===' compara el tipus a més del valor

console.log(condicio);

condicio = x = 10;     //! ⚠️ l'operador '=' és d'assignació, no de comparació ⚠️

console.log(condicio);

condicio = 3 < 7;     // els operadors de comparació són <, >, <=, >=, !=

console.log(condicio);

condicio = 3 > 2 && 23 == "23.000";  // l'operador && és el AND lògic (només és true si s'acompleixen totes les condicions)

                                     //   a      b   =>   a && b
                                     //  true   true      true
                                     //  false  true      false
                                     //  true   false     false
                                     //  false  false     false

console.log(condicio);

condicio = 3 > 2 || 23 === "23.000";    // l'operador || és el OR lògic (és true sempre que s'acompleixi alguna de les condicions)

                                        //   a      b   =>   a || b
                                        //  true   true      true
                                        //  false  true      true
                                        //  true   false     true
                                        //  false  false     false

console.log(condicio);

condició = !(true == false || (12,4 == "12.4" && "Omar" === "Guapo"));      // l'operador ! és el NOT lògic (negació, inverteix el valor)

                                                                            //  a    =>   !a
                                                                            // true      false
                                                                            // false     true

console.log(condicio);

// --------------------------

condicio = false;

if (condicio) {     // la condició d'una estructura condicional ha de ser una variable o operació que tingui resultat true o false
    console.log("%cLa condició era %ctrue", "color: green", "color: green; font-style: italic")
} else {
    console.log("%cLa condició era %cfalse", "color: red", "color: red; font-style: italic")
}

function avaluacio() {
    return true;
}

if (avaluacio()) {
    console.log("%cLa condició era %ctrue", "color: green", "color: green; font-style: italic"); 
    // Aquest codi s'executa perquè la funció torna true
}

if (x = 3) {   //! ⚠️ l'operador '=' és d'assignació, no de comparació ⚠️
    console.log("%cLa condició era %ctrue", "color: green", "color: green; font-style: italic"); 
    // Aquest codi s'executa perquè el statement d'assignació torna el valor assignat (i els números diferents de zero son 'truthy')
}

if ("false") {
    console.log("%cLa condició era %ctrue", "color: green", "color: green; font-style: italic"); 
    // Aquest codi s'executa perquè tots els valors diferents de 0 son 'truthy'
}

(3 >= (1/3)**-1) ? console.log("És veritat") : console.log("És fals");   // operador ternari => una manera resumida de fer un if/else

// -------------------------------

// Diferents estructures condicionals:

if (condicio) {
    // aquest codi s'executa si condicio == true
} 


if (condicio) {
    // aquest codi s'executa si condicio == true
} else {
    // aquest codi s'executa si condicio == false
}


if (condicio) {
    // aquest codi s'executa si condicio == true
} else if (condicio2) {
    // aquest codi s'executa si condicio == false i condicio2 == true
}


if (condicio) {
    // aquest codi s'executa si condicio == true
} 
if (condicio2) {
    // aquest codi s'executa si condicio2 == true
}


if (condicio) {
    // aquest codi s'executa si condicio == true
} else if (condicio2) {
    // aquest codi s'executa si condicio2 == true
} else {
    // aquest codi s'executa si condicio == condicio2 == false
}

if (condicio) /* aquesta línia s'executa si condicio == true */ ; 
else if (condicio2) /* aquesta línia s'executa si condicio == false i condicio2 == true */ ;
else /* aquesta línia s'executa si condicio == condicio2 == false */ ;



//* ---------------------------- Mètodes numbers -------------------------------

console.log("------------------ Mètodes numbers ------------------");

var any, hora, millis, date;

any = 1990;                       // número entero (Int)
hora = 11.75;                     // número decimal (Float)
millis = new Date().getTime();    // número entero (milisegons passats des de 1970 fins ara)

console.log([any, hora, millis]);

// Passar un número a String:

var numero;

numero = any === "1990";             // compara un número amb una string amb el mateix valor
numero = "" + any === "1990";        // converteix el número en string concatenant una string buida ""
numero = any.toString() === "1990";  // converteix el número en string amb el mètode toString()

console.log(numero);

var decimal = 3.14159264;

// Diferents maneres de passar de decimal a sencer:

var sencer = parseInt(decimal);     // agafa els números fins a la coma
var sencer2 = Math.floor(decimal);  // arrodoneix cap a baix amb zero decimals (trunca)
var sencer3 = Math.ceil(decimal);   // arrodoneix cap a dalt amb zero decimals
var sencer4 = Math.round(decimal);  // arrodoneix amb zero decimals

console.log([sencer, sencer2, sencer3, sencer4]);

// Passar de String a número sencer:

var tallaSabata = "42";
tallaSabata = parseInt(tallaSabata);    // transforma una string en un número
tallaSabata2 = tallaSabata + 2;         // això concatena strings si no he fet el parseInt() abans

console.log(tallaSabata2);

// Passar de String a número decimal:

var alturaEnMetres, pesEnKg, IMC;

alturaEnMetres = "1.82";
pesEnKg = 95;
alturaEnMetres = parseFloat(alturaEnMetres);    // passa l'altura a número decimal
IMC = pesEnKg / alturaEnMetres**2;              // això donaria problemes si fos una suma (que es pot interpretar com a concatenació)

console.log(IMC);

// Ajustar la quantitat de decimals d'un número:

IMC = parseFloat(IMC.toPrecision(6));   // toPrecision(6) torna una string formada pel número amb 6 xifres significatives (6 dígits)

console.log(IMC);

IMC = parseFloat(IMC.toFixed(2));       // toFixed(2) torna una string formada pel número amb 2 decimals

console.log(IMC);

// Notació científica (exponencials)

var bigNum = 8927489423000000;
var smallNum = 0.000000274395;

console.log([bigNum.toExponential(), smallNum.toExponential()]);

console.log([bigNum.toExponential(3), smallNum.toExponential(2)]);  // podem especificar la quantitat de decimals

// L'objecte Math (mètodes i constants matemàtiques)

console.log(Math);

var sqrt2 = Math.pow(2, 1/2);   // calcula l'arrel quadrada de 2 (= 2**(1/2))
var pi = Math.PI;               // constant PI definida dins l'objecte Math

console.log([sqrt2, pi]);

// Números aleatoris

var randomNum, dado20, dado100;

randomNum = Math.random();             // genera un número aleatori entre 0 i 1
dado20 = Math.ceil(randomNum*20);      // genera un dau de 20 cares (1-20)
dado100 = Math.ceil(randomNum*100);    // genera un dau de 100 cares (1-100)

random5_15 = random(5, 15);

console.log([randomNum, dado20, dado100, random5_15]);

function random(min, max) {                                 // funció que torna un sencer entre min i max (inclosos)
    return Math.ceil(min + Math.random() * (max - min))
}



//* ---------------------------- Mètodes strings -------------------------------

console.log("------------------ Mètodes strings ------------------");

// Concatenació de strings

var str, str1, str2, str3;

str1 = "Hola, ";
str2 = "què";
str3 = "tal?";

str = str1 + ("Arnau, ").concat(str2, " ", str3);  // podem concatenar (unir) strings amb el símbol + o amb el mètode .concat()
str = `${str1}Arnau, ${str2} ${str3}`;       // concatenació usant template literals

console.log(str);

// Propietat lenght

console.log(str.length);     // podem obtenir la longitud de qualsevol string amb la propietat "length"

// Ús d'index dins una string

console.log(str[6]);         // puc sel·leccionar un caràcter concret amb l'índex de la seva posició

// Majúscules i minúscules

console.log([str.toUpperCase(), str.toLowerCase()]);    // mètodes per posar una string en majúscules o minúscules

// Sel·leccionar un tros d'una string

var nom = str.substring(6, 11);     // retorna els caràcters des del 6 fins al 11 (no inclòs)

console.log(nom);

// Comprovar si hi ha una string dins una altra

console.log(str.includes("què"));   // retorna true o false en funció de si la cadena inclou o no la cadena de l'argument

// Buscar una cadena dins una altra (admet expressions regulars RegEx)

console.log(str.search("Arnau"));   // retorna l'index del primer caràcter de la cadena buscada
console.log(str.search("Arnu"));   // retorna -1 si la cadena no inclou la cadena buscada

// Obtenir l'index d'una subcadena

console.log(str.indexOf(","));       // retorna l'index del primer caràcter de la primera aparició de la cadena buscada
console.log(str.lastIndexOf(","));   // retorna l'index del primer caràcter de la darrera aparició de la cadena buscada

console.log(str.indexOf(",,"));       // tornen -1 si no existeix la cadena
console.log(str.lastIndexOf(",,"));   //

// Substituir una subcadena dins una cadena

console.log(str.replace("Arnau", "Maria"));

// Obtenir un tros de la cadena (fins al final)

console.log(str.slice(6, -10));     // retorna la cadena des del caràcter 6 fins a 10 abans del final
console.log(str.slice(-8));         // retorna la cadena des del 8 abans del final fins al final
console.log(str.slice(6));          // retorna la cadena des del 6 fins al final
console.log(str.slice(6, 11));      // retorna la cadena des del 6 fins a l'11

// Separar trossos de cadena amb un separador

console.log(str.split(""));                             // retorna un array amb les lletres individuals (no hi ha separador)
console.log(str.split(" "));                            // retorna un array amb les paraules que estan separades per espais " "
console.log(("patates,naps,cols,préssecs").split(",")); // retorna un array amb les paraules que estan separades per comes ","

// Eliminar espais al principi i al final

var a, b;
a = "   flight         ";
b = "delayed";

console.log([a, a + b, a.trim() + " " + b]);



//* --------------------------- Bucle for ---------------------------------

console.log("--------------------- Bucle for ---------------------");

// Paràmentres del bucle for:
// declaració i inicialització de l'index; condició per seguir; canvi en l'index a cada repetició

for (let index = 0; index < 10; index++) {      // va de 0 a 9
    console.log(index);
}

// -------------------------------

for (let index = 10; index > 0; index--) {      // va de 10 a 1
    console.log(index);
}

// -------------------------------

for (let index = 0; index < 10; index += 2) {   // va de 0 a 8 passant només pels parells
    console.log(index);
}

// -------------------------------

for (let index = 0; index < 5; index++) {       // podem usar funcions dins de bucles
    funcióSenseReturn("Alumne " + (index + 1)); // saluda als alumnes del 1 al 5 (fent index + 1 perquè comença en 0)
}

// -------------------------------

for (let index = 0; index < 10000; index++) {   // podem usar condicionals dins de bucles
    if (index == 5) break;                      // la paraula clau break atura el bucle

    console.log("Hola, persona " + (index + 1));
}

// -------------------------------

for (let i = 0; i < 100; i++) { 
    if (i % 5 == 0) continue;               // la paraula clau continue fa que s'ignori la resta de codi i salti al i++

    console.log(i)
}

// -------------------------------

for (let i = 0; i < 100 ; i++) {    // pinta els números d'un color o un altre en funció de si són divisibles o no
    if (i % 2 == 0) console.log(`%c${i}`, "color: green");
    else if (i % 3 == 0) console.log(`%c${i}`, "color: purple");
    else if (i % 5 == 0) console.log(`%c${i}`, "color: red");
    else console.log(`%c${i}`, "color: black");
}

// -------------------------------

for (let i = 1; i < 101 ; i++) {    // fa una llista dels números de l'1 al 100 amb alguns dels seus divisors entre parèntesis
    var str = `${i} ( `

    if (i % 2 == 0) str += "2 ";
    if (i % 3 == 0) str += "3 ";
    if (i % 5 == 0) str += "5 ";

    str += ")";

    console.log(str);
}

// -------------------------------

var i = 0;

function iterativa() {  // funció iterativa equivalent a un bucle
    i++;
    
    if (i < 10) {
        iterativa();    //! ⚠️ compte perquè es poden fer bucles infinits ⚠️
    }
}

iterativa();

console.log(i);


// Bucle for/of per recòrrer elements d'un array o caràcters d'un string

var faces = ["🥰","😃","😌","😂"];

for (face of faces) {
    console.log(face);
}

// ---------------------------------

var alumnes = ["Ricardo", "Ester", "Eva", "David"];

for (alumne of alumnes) {
    console.log(`Hola, ${alumne}`);
}

// ---------------------------------

var paraula = "persona";

for (lletra of paraula) {
    console.log(lletra);
}


// Bucle for/in per recòrrer les propietats d'un objecte

var animal = {  especie: "cavall",
                mida: "gran",
                alimentacio: "herba",
                pes: 300,
                foto: function() {
                    console.log("🐎");
                }
};

for (propietat in animal) {
    console.log(`${propietat} -> ${animal[propietat]}`)
}

console.log(animal["mida"]);    // accedir a la propietat amb el nom de la propietat en string
console.log(animal.mida);       // accedir a la propietat com si fos una variable



//* -------------------------- Bucle while --------------------------------

console.log("-------------------- Bucle while --------------------");

// és equivalent al bucle for però hem de posar l'iterador i les condicions "a mà"

var n = 0;          // declaració i inicialització de l'index

while (n < 10) {    // condició per seguir
    n++;            //canvi en l'index a cada repetició
}

console.log(n);

// -------------------------

var word = "Af3fhhj4**'das??3asdFds";       // volem agafar aquesta cadena i separar lletres de coses que no són lletres
var w = "";
var other = "";

function lletres() {
    if ((/[a-zA-Z]/).test(word[0])) {       // filtre per saber si el caràcter és una lletra
        w += word[0];                       // Una altra manera: word[0].toLowerCase() != word[0].toUpperCase()
    } else {
        other += word[0];
    }
    word = word.slice(1);
}

while (word.length > 0) {
    lletres();
}

console.log([w, other]);

// podem usar do/while si volem que el codi s'executi al menys un cop

var x = 0                       //
                                //
do {                            //  Aquest bucle s'executa per primera vegada perquè la condició
    console.log("Hola");        //  està darrere del bloc de codi
    x++;                        //
} while (x != 0 && x < 5);      //


var x = 0                       //
                                //  
while (x != 0 && x < 5) {       //  Aquest bucle no s'executa mai perquè la condició
    console.log("Hola");        //  es comprova abans que entri al bloc de codi
    x++;                        //
}                               //




//* ------------------------- Mètodes arrays ------------------------------

console.log("------------------- Mètodes arrays --------------------");

// Un array és una llista ordenada d'elements, que poden ser numeros, strings, arrays, objectes, literals, variables...

var arr1, arr2, arr3, arr4;     // declaro variables
var arr3 = [];                  // declaro i assigno un array buit         

arr1 = ["🐶","🐱","🐭","🐰"];   // assigno un array a la variable
arr2 = ["🥰","😃","😌","😂"];

// Accedir a un element d'un array

var gos = arr1[0];   // puc accedir a un element d'un array amb el seu index entre parèntesis cuadrats
var gat = arr1[1];

arr1[2] = "🦊";     // puc sobreesciure un element d'un array amb una declaració d'assignació 

console.log(arr1);

// Obtenir l'index d'un element

console.log(arr1.indexOf("🐱"));    // el mètode indexOf() en torna l'index de la primera aparició del que busquem
console.log(arr1.indexOf("🐭"));    // i torna -1 si l'argument no es troba a l'array

// Transformar un array en string

console.log(arr1.toString());      // el mètode toString() torna tots els elements de l'array separats per comes
console.log(arr1.join("&"));       // el mètode join() torna tots els elements de l'array separats per la cadena introduida

// Afegir un array a un altre

arr3 = arr1 + arr2;     // l'operador + converteix en strings els arrays

console.log(arr3);

arr3 = arr1.concat(arr2);    // si volem "sumar" dos arrays, hem d'usar el mètode concat()

console.log(arr3);

// Comprovar si un array conté un element

console.log(arr3.includes("😃"));
console.log(arr3.includes("💩"));

// Afegir o treure elements d'un array

var emoji;

emoji = arr2.pop();     // el mètode pop() retorna i elimina l'ultim element d'un array

console.log(emoji);
console.log(arr2);

arr2.push("amor");           // el mètode push() afegeix al final d'un array un o més elements
arr2.push(emoji, "💩");

console.log(arr2);

// --------------------

emoji = arr2.shift();     // el mètode shift() retorna i elimina el primer element d'un array

console.log(emoji);
console.log(arr2);

arr2.unshift("caca");         // el mètode unshift() afegeix al principi d'un array un o més elements
arr2.unshift(emoji, "💩");

console.log(arr2);

// Agafar una part d'un array

arr4 = arr2.slice(6);       // el mètode slice() crea un array amb els elements des de l'index fins al final

console.log(arr4);
console.log(arr2);

// Agafar i substituir una part d'un array

arr4 = arr2.splice(2,1);                    // el mètode splice() elimina 1 element a partir de la posició 2
arr4 = arr4.concat(arr2.splice(4,1));       // agafo l'element en la posició 4 i l'afegeixo al arr4

console.log(arr4);
console.log(arr2);

//! ⚠️ El mètode slice no modifica l'array original, el mètode splice sí ⚠️

// Ordenar elements d'un array

var arr5 = ["patata", "unstable", "unicorns", "rookie", "exploding", "comunismo"];

arr5.sort();        // el mètode sort() ordena alfabèticament els elements d'un array (modificant l'original)

console.log(arr5);

arr5.reverse();     // el mètode reverse() inverteix l'ordre dels elements d'un array (modificant l'original)

console.log(arr5);

// ---------------------------

var arr6 = [4, 0, 12, 3.15, 15, -25, 3/5, Math.sqrt(2)];

arr6.sort();        //! ⚠️ El mètode sort() no ordena números ⚠️

console.log(arr6);

// arr6.sort(ordenar);         // per ordenar numèricament li he de passar al mètode sort() la definició d'una funció
//                                la funció ordenar es coneix com a "callback" (una funció cridada des d'una funció)                            
// function ordenar(a,b) {
//     return a - b;
// }

arr6.sort( (a,b) => a - b );     // aquesta línia fa el mateix però definim una funció arrow anònima (que no te nom)

console.log(arr6);



//* ------------------------- Iteració arrays ------------------------------

console.log("------------------- Iteració arrays --------------------");

// Executar una funció per cada element d'un array

alumnes.forEach(callback);              // el mètode forEach() executa una funció per cada element d'un array (funció callback)
                                        // ⚠️ la funció callback la passem sense () perquè li estem donant la definició
function callback(item) {
    funcióSenseReturn(item);
}

alumnes.forEach(e => funcióSenseReturn(e));     // tot això se simplifica fent que la funció callback sigui una funció arrow anònima

// ------------------------------

var paraules = "";

arr5.forEach(element => {               
    paraules += element + " ";
});

console.log(paraules);

// -------------------------------

arr5.forEach((element, i, a) => {       // els paràmetres de la funció callback són: l'element actual, l'index i l'array
    if (i % 2 == 0) {
        a[i] = element.toUpperCase();
    }
})

console.log(arr5);

// -------------------------------

var suma = 0;

arr6.forEach(element => {             // el mètode forEach() executa una funció per cada element d'un array
    suma += element;
})

console.log({"array": arr6, "suma dels elements": suma});

// Crear un nou array a partir de l'anterior

var arr7;

arr7 = arr6.map(v => v * 3);         // torna un nou array amb cada element de l'array multiplicat per 3

console.log(arr7);

// Reduïr els elements d'un array a un únic valor

var triple;

triple = arr6.reduce((total, valor) => total + 3 * valor, 0);   /* el mètode reduce té com a arguments la funció callback 
                                                                   i el valor inicial de l'acumulador (si no hi ha valor
                                                                   inicial, agafa el valor del primer element) ⚠️ */

suma = arr6.reduce((total, valor) => total + valor);            // aquí el primer valor és el del primer element

console.log({"array": arr6, suma, triple});

// --------------------------------------

var emojis1, emojis2;

emojis1 = arr1.reduce((acc, v) => acc + v + "💩")       // sense valor inicial
emojis2 = arr1.reduce((acc, v) => acc + v + "💩","")    // amb valor inicial ⚠️

console.log({"array": arr1, emojis1, emojis2});


// Nota: hi ha més mètodes iteratius amb arrays que només veurem si els necessitem (filter(), some(), every()...)



//* ------------------------------ Objectes -------------------------------------

console.log("--------------------- Objectes ---------------------");

var animal2 = {  especie: "tortuga",        // cada paraula clau és una propietat de l'objecte
                mida: "mitjana",
                alimentacio: "herba",
                pes: 10,
                foto: function() {          // el valor d'una propietat pot ser la definició d'una funció ---> mètode de l'objecte
                    console.log("🐢");
                }
};

// Accedir a les propietats d'un objecte

console.log(`La ${animal2.especie} és una animal de mida ${animal2.mida} que menja ${animal2.alimentacio} i pesa ${animal2.pes} kg`);


// Usar mètodes d'objectes

animal2.foto();     // s'accedeix als mètodes d'un objecte igual que ho fem amb els de strings o arrays .metode()

var classe = {  nomClasse: "Classe de Lenin",
                alumnes: 5,
                alumnesGuais: 0,
                noms: ["Alex", "David", "Dani", "Sergi", "Joselyn"],
                alumnesAmbCamera: ["David", "Sergi"],
                alumnesAmbVeu: ["Alex", "Joselyn"],
                passarLlista: function () {                                                             // mètode sense return
                        this.noms.forEach((alumne) => console.log(alumne + " presente"))
                    },
                audiovisuals: function () {                                                             // mètode amb return
                        return this.alumnesAmbCamera.length + this.alumnesAmbVeu.length
                    },        
                buscarGuais: function () {                                                              // funció que modifica una
                        this.alumnesGuais = this.alumnesAmbCamera.length + this.alumnesAmbVeu.length    // propietat del mateix objecte
                    }
}

// la paraula clau this dins d'un objecte es refereix al mateix objecte i ens permet accedir a les seves propietats i mètodes
//!                           ⚠️ la paraula clau this no funciona dins d'una funció arrow ⚠️


classe.passarLlista();                  // executa el mètode passarLlista() de l'objecte classe

console.log(classe.audiovisuals());

console.log(classe.alumnesGuais);
classe.buscarGuais();                   // aquest mètode no te output, només modifica una propietat
console.log(classe.alumnesGuais);

console.log(classe);

classe.horari = "8:45 - 14:45";         // puc afegir propietats de la mateixa manera que es declara i assigna una variable

console.log(classe);



// Nota: més endavant veurem com funcionen les classes (constructors d'objectes) i la deconstrucció d'objectes i arrays (destructuring)



console.log("-------------------- FI DEL REPÀS --------------------");