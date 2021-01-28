// import, export

var copy = {
    titol: {id: "titol",
            cat: "El meu primer web",
            esp: "Mi primera web",
            eng: "My first web page"},
    
    bio: {id: "bio",
         cat: "Hola! Benvinguts al primer web que faig amb HTML, CSS i JavaScript. Fes clic als botons per traduïr els textos.",
         esp: "¡Hola! Bienvenidos a la primera web que hago con HTML, CSS y JavaScript. Haz clic en los botones para traducir los textos.",
         eng: "Hi! Welcome to the first web page I did using HTML, CSS and JavaScript. Click on the buttons to translate the content."}
}

function lang(lang) {
    for (const key in copy) {
        if (Object.hasOwnProperty.call(copy, key)) {
            const element = copy[key];
            document.querySelector(`#${element.id}`).innerHTML = element[lang]
        }
    }
}

export {copy, lang};