console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:");



//* ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi

console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

// TODO: aquí la definició de psicolog() 

psicologo();


// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta() 

pregunta("la pizza");


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta2() 

console.log(pregunta2("la pizza") + " amb piña?");


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 

mostrarSolució();


// exercici 5: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners() 

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

// exercici 6: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

var talla = prompt("Aquí el missatge del prompt")  // TODO: editar el missatge del prompt()

// TODO: estructura condicional que digui per la consola la talla escollida


// exercici 7: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes

cercle(radi, mode);


// exercici 8: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()

poligon(costat, costats);


// exercici 9: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

// TODO: defineix la funció botiga()

var carrito = botiga();

console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"



//* ---------------------------- Mètodes numbers -------------------------------

// 


//* ---------------------------- Mètodes strings -------------------------------

// separar paraules

// lletra aleatoria

// paraula aleatoria



//* ------------------------------ Bucle for ------------------------------------



//* ----------------------------- Bucle while -----------------------------------



//* ---------------------------- Mètodes arrays ---------------------------------