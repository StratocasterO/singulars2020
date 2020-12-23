var any = "1990"

console.log((1990).toString() === any); // .toString() converteix números en strings

// ----------------------------------------------------------------------------------------

var num = "12.765";

floatNum = parseFloat(num); // converteix la string en un número decimal

console.log(floatNum);

intNum = parseInt(num);     // converteix la string en un número sencer (truncant)

console.log(intNum);

roundNum = floatNum.toFixed(0);     // arrodoneix el número decimal

console.log(roundNum);

presNum = floatNum.toPrecision(4)  // retorna el número amb 4 dígits de precisió

console.log(presNum);

// ----------------------------------------------------------------------------------------

var bigNum = 2398462193846235;

console.log(bigNum.toExponential(3)); // transforma a notació científica

var smallNum = 0.0000234791254;

console.log(smallNum.toExponential(3)); // transforma a notació científica

// ----------------------------------------------------------------------------------------

console.log(new Date().getTime()); // retorna els milisegons quan han passat des del 1/1/1970

// ----------------------------------------------------------------------------------------

console.log(Math.PI);  // carrega la constant PI de l'objecte predefinit Math

// Números aleatoris:

console.log(Math.random()) // un número aleatori entre 0 i 1

console.log(Math.ceil(Math.random()*20))    // un número aleatori entre 1 i 20 (mètode Omar, que és molt més maco)

console.log(parseInt(Math.random()*21))     // un número aleatori entre 1 i 20 (mètode tradicional)

// ----------------------------------------------------------------------------------------

// Sel·lecció aleatòria d'un dia entre 1900 i 2020:

var cumple = { "dia" : 0,       // objecte amb les propietats dia, mes i any
               "mes" : 0,
               "any" : 0
             };

var trenta = [4, 6, 9, 11];

cumple.any = random(1900,2020); // genera l'any

cumple.mes = random(1,12);     // genera el mes

traspas = (cumple.any % 400 == 0) || (cumple.any % 4 == 0 && cumple.any % 100 != 0)

if (cumple.mes == 2) {
    if (traspas) {
        cumple.dia = random(1,29);
    } else {
        cumple.dia = random(1,28);
    }
} else if (trenta.includes(cumple.mes)) {
    cumple.dia = random(1,30);
} else {
    cumple.dia = random(1,31);
}

mesos = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];

console.log(`El teu aniversari és el ${cumple.dia} de ${mesos[cumple.mes - 1]} del ${cumple.any}`);

// funció que retorna un sencer entre min i max, inclosos
function random(min, max){
    return min + parseInt(Math.random()*(max - min + 1));
}

