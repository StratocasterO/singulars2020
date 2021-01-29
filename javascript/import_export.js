import {lang} from "./lang.js"

document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => {
        lang(button.value);  // executa la funció per canviar de llenguatge
    })
})

lang("cat");  // carrega el primer llenguatge (es pot evitar posant el llenguatge per defecte a l'HTML) 