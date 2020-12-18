console.log("Aquest script s'ha carregat des d'un document extern");

document.write(`<p>Això s'ha afegit des de un document .js extern</p>`);

function escriure() {
    document.write(`<p>Això s'ha carregat des de un <i>document.write()</i> dins una funció que s'activa amb un botó`);
}