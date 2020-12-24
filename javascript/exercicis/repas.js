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



//* ---------------------------- Mètodes strings -------------------------------



//* ---------------------------- Bucle for ------------------------------------



//* ----------------------------- Bucle while -----------------------------------



//* ---------------------------- Mètodes arrays ---------------------------------



















console.log("----------------------------------------");