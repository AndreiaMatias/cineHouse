let catalogo = require("./database/catalogo.json")
function alterarStatusEmCartaz(codigoFilme){
    catalogo.filter(x => x.codigo == codigoFilme).map(x => x.emCartaz == true? x.emCartaz = false : x.emCartaz = true);
};

module.exports = alterarStatusEmCartaz;
