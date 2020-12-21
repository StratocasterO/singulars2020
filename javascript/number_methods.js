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