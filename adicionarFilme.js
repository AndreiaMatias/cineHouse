let catalogo = require("./database/catalogo.json");
let filmeObjA = require("./filmeObj");



   

function indicaInclusaoFilme(FilmeObjA){
    console.log(filmeObjA.titulo + " adicionado com sucesso.")
}

function adicionarFilme(filmeObjA){
    
    if(catalogo.indexOf(filmeObjA)== -1){
        catalogo.push(filmeObjA);
        indicaInclusaoFilme(filmeObjA);
    }else{
        console.log("Filme já adicionado.");
    }
};

module.exports = adicionarFilme;
