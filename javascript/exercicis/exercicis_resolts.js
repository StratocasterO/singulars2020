console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("-------------------- INICI EXERCICIS -----------------");



//* ------------------------ Variables --------------------------

console.log("----------------- Exercicis de variables ---------------");

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;
segon = 2;

var aux = primer;  // manera amb variable auxiliar
primer = segon;
segon = aux;

[primer, segon] = [segon, primer]  // manera amb desestructuració

console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

console.log("----------------- Exercicis de funcions ---------------");

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

function psicologo() {
    console.log("Com estàs?")
}

psicologo();


// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

const pregunta = (menjar) => {
    console.log(`T'agrada ${menjar}?`);
    
    // var string = "T'agrada "          <= matar mosques a canonades 💣
    // string =  string + menjar
    // string = string + "?"
    // console.log(string)
}

pregunta("la pizza");
pregunta("el sushi");


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

const pregunta2 = (menjar) => {
    return `T'agrada ${menjar}`
}

console.log(pregunta2("la pizza") + " amb piña?");
console.log(pregunta2("el sushi") + " de tonyina?");


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

const metresCubicsALitres = (m) => m*1000

function mostrarSolució() {
    console.log(`${m3} metres cúbics són ${metresCubicsALitres(m3)} litres`);
}

mostrarSolució();


// exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

const afegirDiners = quantitat => {
    diners += quantitat;    // diners = diners + quantitat
    console.log(diners);
}
const gastarDiners = quantitat => {
    diners -= quantitat;    // diners = diners - quantitat
    console.log(diners);
} 

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

console.log("----------------- Exercicis de condicionals ---------------");

// exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

var talla = prompt("Escriu la talla que vols (S, M, L, XL)")

if (talla == null || talla == ""){
    console.log("%cSi us plau, introdueix una talla", "color: red");
} else if (talla.toUpperCase() == "S" || talla.toUpperCase() == "M" || talla.toUpperCase() == "L" || talla.toUpperCase() == "XL") {
    console.log("Has escollit la talla " + talla.toUpperCase());
} else {
    console.log(`%c${talla} no és una talla vàlida. Escull entre S, M, L i XL`, "color: red");
}


// exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

function cercle(r, m) {
    if (m == "P") console.log(`El perímetre d'un cercle de radi ${r} és ${(2*Math.PI*r).toFixed(2)}`);
    else if (m == "A") console.log(`L'àrea d'un cercle de radi ${r} és ${(Math.PI*r**2).toFixed(2)}`);
    else console.log("%cEl mode escollit no és vàlid", "color: red");
}

cercle(radi, mode);

radi = 7;
mode = "A";
cercle(radi, mode);

radi = 9;
mode = "R";
cercle(radi, mode);


// exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

function poligon(c,n) {
    var a = c / (2*Math.tan(Math.PI/n))
    var area = c*n*a / 2
    
    console.log(`El perímetre i l'àrea d'un polígon regular de ${n} costats i de costat ${c} són ${c*n} i ${area.toFixed(2)} respectivament`);
}

poligon(costat, costats);


// exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

function botiga() {
    var item = prompt("Sel·lecciona l'article (samarreta, pantaló o barret)");
    var items = ["samarreta", "pantaló", "pantalo", "barret"];
    
    var article, talla, color
    
    // comprova que l'article és vàlid
    if (item != null && items.includes(item.toLowerCase())) {
        if (item.toLowerCase() == "barret") {
            var tipus = prompt("De quin tipus vols el barret? (copa, pirata, gorra, llana)");
            var tipusBarret = ["copa", "pirata", "gorra", "llana"];
            
            // comprova el tipus de barret
            if (tipus != null && tipusBarret.includes(tipus)){
                if (tipus == "gorra"){
                    article = "una gorra"
                } else {
                    article = `un barret de ${tipus}`
                }
                color = ""
            } else {
                return console.log("%cIntrodueix un tipus de barret vàlid (copa, pirata, gorra, llana)", "color: red")
            }
        } else {
            color = prompt("De quin color?");
            
            if (item == "samarreta") {
                article = "una samarreta "
            } else {
                article = "un pantaló "
            }
        }
        
        talla = prompt("De quina talla?");
        var talles = ["S", "M", "L", "XL"];
        
        // comprova que la tella sigui vàlida
        if (talles != null && talles.includes(talla.toUpperCase())){
            talla = talla.toUpperCase();
        } else {
            return console.log("%cIntrodueix una talla vàlida (S, M, L, XL)", "color: red")
        }
    } else {
        return console.log("%cIntrodueix un article vàlid (samarreta, pantaló o barret)", "color: red")
    }
    
    return `Has sel·leccionat ${article}${color} (talla ${talla})`
}

var carrito = botiga();

if (carrito) console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"



//* ---------------------------- Mètodes numbers -------------------------------

console.log("----------------- Exercicis de numbers ---------------");

// exercici 11: defineix una funció calculadora que agafi com a paràmetres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, **, sqrt i cbrt)

calculadora();

function calculadora() {
    var simbols = ["+","-","*","/","**", "SQ", "CB"]
    var num1 = prompt("Introdueix el primer número")
    
    if (num1 == null || isNaN(num1)) {      // comprovació primer número
        return console.log(`%c"${num1}" no és un número vàlid`, `color: red`);
    }
    
    var sim = prompt("Introdueix el símbol de la operació (+, -, *, /, **, SQ i CB)")
    
    if (sim != null && simbols.indexOf(sim.toUpperCase()) != -1) {      // equivalent a simbols.includes(sim.toUpperCase())
        // arrels
        if (sim.toUpperCase() == "SQ" || sim.toUpperCase() == "CB") {
            if (sim.toUpperCase() == "SQ") {
                console.log(`L'arrel quadrada de ${num1} és ${Math.sqrt(num1)}`);
            } else {
                console.log(`L'arrel cúbica de ${num1} és ${Math.cbrt(num1)}`);
            }
        } else {
            var num2 = prompt("Introdueix el segon número")
            
            if (num2 != null && isNaN(num2)) {      // comprovació segon número
                return console.log(`%c"${num2}" no és un número vàlid`, `color: red`);
            }
        }
        
        // resta d'operacions
        if (sim == "+") {
            console.log(`${num1} més ${num2} és ${num1+num2}`); 
        } else if (sim == "-") {
            console.log(`${num1} menys ${num2} és ${num1-num2}`);
        } else if (sim == "*") {
            console.log(`${num1} multiplicat per ${num2} és ${num1*num2}`);
        } else if (sim == "/" && num2 != 0) {
            console.log(`${num1} dividit per ${num2} és ${num1/num2}`);
        } else if (sim == "/" && num2 == 0) {    // excepció dividir per zero
            console.log(`%cNo es pot dividir per zero!`, `color: red`); 
        } else if (sim == "**") {
            console.log(`${num1} elevat a ${num2} és ${num1**num2}`);
        } 
        
    } else {
        // simbols que no siguin (+, -, *, /, **, SQ o CB)
        console.log(`%c"${sim}" no és una operació vàlida`, `color: red`);
    }
}


// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle aplicant el
// teorema de Pitàgores (a**2 == b**2 + c**2 és "true" pels triangles rectangles quan "a" és el seu costat més llarg)

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 6;
c2 = 5;
c3 = 4;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false

function triangleRectangle(a, b, c) {
    return (pitagoras(a, b, c) || pitagoras(b, c, a) || pitagoras(c, a, b))
}

function pitagoras(a, b, c) {
    return a*a == b*b + c*c
}


// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle
//// PISTA: les funcions trigonomètriques estan definides a l'objecte Math

c1 = 30;
c2 = 40;

const calculaHipotenusa = (a,b) => `La hipotenusa del triangle amb catets ${a} i ${b} és ${(Math.sqrt(a*a + b*b)).toFixed(2)}`

const calculaAngles = (a,b) => `Els angles són ${(180*Math.atan(a/b)/Math.PI).toFixed(2)}º i ${(180*Math.atan(b/a)/Math.PI).toFixed(2)}º`

console.log(calculaHipotenusa(c1,c2));  // ha de donar 50

console.log(calculaAngles(c1,c2));      // ha de donar 53.13º i 36.87º



//* ---------------------------- Mètodes strings -------------------------------

console.log("----------------- Exercicis de strings ---------------");

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

function convertirEnEnter(str) {
    var i = 0;
    var num = "";
    
    while (isNaN(str[i])) {     // busca el principi dels números
        i++;
    }
    
    while (/[0-9]/.test(str[i])) {      // acumula fins que s'acaben els números
    num += str[i];
    i++;
}

return parseFloat(num);
}

function convertirEnEnter2(str) {
    var num = "";
    
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) num += str[i];
        else if (num != '' && isNaN(str[i])) break;
    }
    
    return parseFloat(num);
}

console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45

console.log(convertirEnEnter2("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter2("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter2("amor45.9odi"));   // ha de tornar 45


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

function convertirEnDecimal(str) {
    var num = "";
    var comes = ["'", ".", ","];
    var jaTeUnaComa = false;        // marcador per saber si ja té coma
    
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) num += str[i];
        else if (num != '' && comes.includes(str[i]) && !jaTeUnaComa) {
            num += ".";
            jaTeUnaComa = true;     // canvia l'estat del marcador
        } else if (num != '' && isNaN(str[i])) break;
    }
    
    return num;
}

console.log(convertirEnDecimal("hola89'23.4"));    // ha de tornar 89.23
console.log(convertirEnDecimal("43'35adeu"));      // ha de tornar 43.35
console.log(convertirEnDecimal("amor45.9odi"));    // ha de tornar 45.9


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

const valorAbsolut = num => {
    // num = String(num);
    // if (num[0] == "-") return num.slice(1)
    // else return num
    
    return String(num)[0] == "-" ? String(num).slice(1) : String(num);  // if/else resumit en un operador ternari
    
    // return num < 0 ? 0 - num : num;      <= mètode matemàtic
}

console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678


// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "aaaa, abcd ef!?* omar-olmedo-ferrer @";

console.log("Lletra random: " + lletraRandom(lletres));     // torna una lletra entre la a i la f

function lletraRandom(word) {
    do {
        var char = word[Math.floor(Math.random() * word.length)]
    } while (char.toUpperCase() == char.toLowerCase())  // mentre sigui un simbol
    
    return char
}


// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

function separarParaules(str) {
    var words = ""
    
    for (const char of str) {
        // si és una lletra o si és un espai i l'últim caràcter acumulat és un espai
        //       words[words.length - 1] retorna l'ultim caràcter de words
        if (char.toLowerCase() != char.toUpperCase() || (char == " " && words[words.length - 1] != " ")) words += char;  
    }
    
    return words
}

console.log(paraules);


// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log("Paraula random: " + paraulaRandom(text));
console.log("Paraula random: " + paraulaRandom2(text));

function paraulaRandom(words) {
    var paraules = separarParaules(words);
    words = paraules;
    
    var numParaules = 1;
    
    // conta els espais
    while (paraules.indexOf(" ") != -1) {
        numParaules++;
        paraules = paraules.slice(paraules.indexOf(" ") + 1);
    }
    
    // sorteja la paraula sel·leccionada
    indexParaula = Math.floor(Math.random() * numParaules);
    
    // elimina paraules fins a arribar a la sel·leccionada
    for (let i = 0; i < indexParaula; i++) {
        words = words.slice(words.indexOf(" ") + 1);
    }
    
    // elimina les paraules a partir de la seleccionada
    words = words.slice(0,words.indexOf(" "))
    
    return words
}

// mètode trampa perquè usa arrays
function paraulaRandom2(words) {
    words = separarParaules(words);
    arr = [];
    
    while (words.indexOf(" ") != -1) {
        arr.push(words.slice(0,words.indexOf(" "))); 
        words = words.slice(words.indexOf(" ") + 1);
    }
    
    return arr[Math.floor(Math.random() * arr.length)]
}


// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

function horoscop() {
    var data, dia, mes, signe
    
    // agafa la data d'un prompt
    data = prompt("Quan és el teu aniversari (DD/MM)?");

    if (data) {
        dia = data.slice(0,2);
        mes = data.slice(3);
    } else {
        return console.log("%cNo has introduit una data vàlida", "color: red");
    }
    
    if ((data.length != 5 || data[2] != "/") ||
        !(((1 <= dia && dia <= 31) && (mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12) ) ||
        ((1 <= dia && dia <= 30) && (mes==4||mes==6||mes==9||mes==11) ) ||
        ((1 <= dia && dia <= 29) && (mes==2) ))) {

        return console.log("%cNo has introduit una data vàlida", "color: red");
    }

    // defineix signes i prediccions
    var signes = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    var prediccions = ["The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way","The stars and planets will not affect your life in any way"];

    switch (parseInt(mes)) {    //! ⚠️ El switch compara també el tipus de literal ⚠️
        case 1:
            signe = dia > 19 ? 11 : 10;
            break;
        case 2:
            signe = dia > 18 ? 12 : 11;
            break;
        case 3:
            signe = dia > 20 ? 1 : 12;
            break;
        case 4:
            signe = dia > 19 ? 2 : 1;
            break;
        case 5:
            signe = dia > 20 ? 3 : 2;
            break;
        case 6:
            signe = dia > 20 ? 4 : 3;
            break;
        case 7:
            signe = dia > 22 ? 5 : 4;
            break;
        case 8:
            signe = dia > 22 ? 6 : 5;
            break;
        case 9:
            signe = dia > 22 ? 7 : 6;
            break;
        case 10:
            signe = dia > 22 ? 8 : 7;
            break;
        case 11:
            signe = dia > 22 ? 9 : 8;
            break;
        case 12:
            signe = dia > 21 ? 10 : 9;
            break;
        default:
            return console.log("%cNo has introduit una data vàlida", "color: red");
    }

    console.log(signes[signe - 1] + ":\n" + prediccions[signe - 1]);
}

horoscop();


// exercici 20.1: crea una funció que generi prediccions aleatòries

// TODO defineix la funció prediccio()


// exercici 20.2: crea una funció que implementi l'horòscop xinès

// TODO defineix la funció horoscopXines()


//* ------------------------------ Bucle for ------------------------------------

console.log("----------------- Exercicis de bucles ---------------");

// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

// TODO el codi aquí


// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

// TODO el codi aquí


// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)
//// PISTA: usa la paraula clau "break"

var max = prompt("Fins quin número vols contar (1-1000)?");

// TODO defineix aquí la funció contar()

contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit


// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola
//// PISTA: un número primer només és divisible per 1 i per si mateix

// TODO el codi aquí


// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
//// PISTA: usa la paraula clau "continue"

var digits = prompt("Quins digits vols mostrar (1-9)?");

// TODO defineix la funció mostrarDigits()

mostrarDigits(digits);      // si digits és "2 3 4", això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."



//* ----------------------------- Bucle while -----------------------------------

// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua
//// PISTA: l'ultim console.log() mostrarà un string amb salts de línia "\n"

// TODO aquí el codi



//* ---------------------------- Mètodes arrays ---------------------------------

console.log("----------------- Exercicis d'arrays ---------------");

// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]

// TODO aquí el codi


// exercici 28: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

var cadena = "blaucacavermellcacagroccacamarrócacaverd"

// TODO defineix aquó la funció separar()

console.log(separar(cadena, "caca"));   // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 29: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

var array = ["primer", "segon", "tercer", "quart", "cinquè"]

// TODO defineix aquí la funció moure()

console.log(moure(array, 2));       // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]


// exercici 30: adapta l'exercici de la llista de la compra (ex. 26) perquè fiqui els elements en un array i
// els ordeni alfabèticament

// TODO aquí el codi


// exercici 31: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

// TODO aquí el codi



//* ------------------------------ Objectes -------------------------------------

console.log("----------------- Exercicis d'objectes ---------------");


// exercici 32: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

var persona = { // TODO aquí les propietats de l'objecte
}

persona.calcularEdat();

// TODO console.log() que digui "La Maria va nèixer el 1995 i té 25 anys" agafant les propietats de l'objecte


// exercici 33: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

var frase = { string : "blaucacavermellcacagroccacamarrócacaverd",
// TODO aquí el mètode de l'objecte  
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada);     // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 34: adapta l'exercici de la llista de la compra (ex. 26 i 29) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")

// TODO: aqui el codi


// exercici 35: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la
//// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// TODO gestionar el csv perquè acabi sent una cosa com la de sota

arrGeneral = csv.split('\n'); 

let header = arrGeneral[0].split(',');
let objecteCSV = [];

for(let i = 1; i < arrGeneral.length; i++) {
    let data = arrGeneral[i].split(',');
    let obj = {};
    for(var j = 0; j < data.length; j++) {
        obj[header[j].trim()] = data[j].trim();
    }
    objecteCSV.push(obj);
}

console.log(objecteCSV);


// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");