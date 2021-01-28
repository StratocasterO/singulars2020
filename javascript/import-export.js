import {copy, lang} from "./lang.js"

document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => {
        lang(button.value);  // executa la funció per canviar de llenguatge
    })
})

console.log(copy);