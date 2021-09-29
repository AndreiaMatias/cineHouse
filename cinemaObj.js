let catalogo = require("./database/catalogo.json");
let adicionaFilme = require("./adicionarFilme");
let buscaFilme = require("./buscarFilme");
let alteraStatus = require("./alterarStatusEmCartaz");
var readline = require('readline');
let filme = require("./filmeObj");
let listaTodos = require("./listarTodosOsFilmes");
let listarTodosOsFilmes = require("./listarTodosOsFilmes");
let listarFilmesEmCartaz = require("./listarFilmesEmCartaz");

let dados = catalogo.filter(listarFilmesEmCartaz);
console.log(dados);

/*let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


for (let prop in novoFilme){
    leitor.question(prop + ":", (answer) =>{
        novoFilme[prop] = answer;
    });
};*/
let novoFilme = new filme();
novoFilme.codigo = 3;
novoFilme.titulo = "Edward Mãos de Tesoura";
novoFilme.duracao = 1.6;
novoFilme.atores =  ["Johnny Depp", "Winona Ryder", "Anthony Michael Hall", "Vincent Price", "Alan Arkin"];
novoFilme.anoDeLancamento = 1990;
novoFilme.emCartaz = false;


adicionaFilme(novoFilme)
/*console.log(catalogo);*/



/*buscaFilme(2);*/


alteraStatus(3);
buscaFilme(3);
listarFilmesEmCartaz(catalogo);