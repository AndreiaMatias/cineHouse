let catalogo = require("./database/catalogo.json");

function buscarFilme(codigoFilme){
    let busca = catalogo.filter(x => x.codigo == codigoFilme)
    console.log("Código: " + busca.map(x => x.codigo));
    console.log("Título: " + busca.map(x => x.titulo));
    console.log("Duração: " + busca.map(x => x.duracao) + " horas");
    console.log("Atores: " + busca.map(x => x.atores));
    console.log("Ano de lançamento: " + busca.map(x => x.anoDeLancamento));
    console.log("Em Cartaz: " + busca.map(x => x.emCartaz== true ? "Sim" : "Não"));
};

module.exports = buscarFilme;