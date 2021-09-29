let catalogo = require("./database/catalogo.json");
function listarFilmesEmCartaz(catalogo){
    let catalogoCartaz = [];
    console.log("Filmes em cartaz: ")
    for(var i=0; i< catalogo.length; i++){
        catalogo[i].emCartaz ? catalogoCartaz.push(catalogo[i]) : "";
    }
    return catalogoCartaz;
}

module.exports = listarFilmesEmCartaz;