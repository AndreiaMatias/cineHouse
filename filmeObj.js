 function filmeObj(codigoFilme, tituloFilme, duracaoFilme, atoresFilme, anoFilme, cartazFilme){
    this.codigo = codigoFilme,
    this.titulo = tituloFilme,
    this.duracao = duracaoFilme,
    this.atores = atoresFilme,
    this.anoDeLancamento = anoFilme,
    this.emCartaz = cartazFilme
};

module.exports = filmeObj;