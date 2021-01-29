var copy = {
    titol: {cat: "El meu primer web",
            esp: "Mi primera web",
            eng: "My first web page"},
    
    bio: {cat: "Hola! Benvinguts al primer web que faig amb HTML, CSS i JavaScript. Fes clic als botons per traduïr els textos.",
         esp: "¡Hola! Bienvenidos a la primera web que hago con HTML, CSS y JavaScript. Haz clic en los botones para traducir los textos.",
         eng: "Hi! Welcome to the first web page I did using HTML, CSS and JavaScript. Click on the buttons to translate the content."}
}

function lang(buttonValue) {
    for (const id in copy) {  // recorre les propietats de l'objecte copy
        document.querySelector(`#${id}`).innerHTML = copy[id][buttonValue] // copy.id.buttonValue
    }
}

export {lang};