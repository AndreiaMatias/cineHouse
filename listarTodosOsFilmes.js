let catalogo = require("./database/catalogo.json");
function listarTodosOsFilmes(catalogo){
    for(var i = 0; i<catalogo.length;i++){
        console.log("Filme " + i + " " + catalogo[i].titulo);
    }
}

module.exports = listarTodosOsFilmes;