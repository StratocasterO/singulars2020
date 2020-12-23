console.log("JavaScript carregat des d'un document .js dins el <body>");

document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:")



// ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

/* aquí el teu codi */

console.log(primer,segon);  // ha de mostrar 2 1



// ------------------------- Funcions --------------------------

// exercici 2: definició de funcions

// (A) defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

/* aquí la definició de psicolog() */

psicologo();


// (B) defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

/* aquí la definició de pregunta() */

pregunta("la pizza");


// (C) defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

/* aquí la definició de pregunta2() */

console.log(pregunta("la pizza") + " amb piña?");


// (D) defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

/* aquí les definicions de metresCubicsALitres() i mostrarSolució() */

mostrarSolució();


// (E) defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

/* definició de afegirDiners() i gastarDiners() */

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20

