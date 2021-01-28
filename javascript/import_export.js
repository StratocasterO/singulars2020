import {lang} from "./lang.js"

document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => {
        lang(button.value);  // executa la funció per canviar de llenguatge
    })
})

console.log(copy); // copy no està importat -> no s'hi pot accedir des d'aquí