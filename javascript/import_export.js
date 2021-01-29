import {lang as llenguatge} from "./lang.js"  // li dono un altre nom a la funcio que importo

document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => {
        llenguatge(button.value);  // executa la funció per canviar de llenguatge
    })
})

llenguatge("cat");  // carrega el primer llenguatge (es pot evitar posant el llenguatge per defecte a l'HTML) 