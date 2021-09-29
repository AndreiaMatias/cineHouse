/*var readline = require('readline');

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual o cinema em que gostaria de ver as sessões?\n", function(answer){
    let cinema = answer;
    console.log(cinema);
    console.log("Sessões para o Cinema " + cinema);
    leitor.close();
});

let sessao = {
    nomeFilme: 'Titanic',
    valorSessao: 20.45,
    classificacao: 0,
    aberta: false
}*/

let catalogo =[
    {
        codigo: 1,
        titulo: "Asas do Desejo",
        duracao: 2,
        atores: ["Bruno Ganz", "Solveig Dommartin", "Otto Sander", "Peter Falk", 
        "Curt Bois", "Hans Martin Stier", "Elmar Wilms", "Sigurd Rachman", "Beatrice Manowski"
        ],
        anoDeLancamento: 1987,
        emCartaz: 0
    },
    {
        codigo: 2,
        titulo: "Luca",
        duracao: 2,
        atores: ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman", "Maya Rudolph", 
        "Jim Gaffigan", "Marco Barricelli", "Saverio Raimondo"
        ],
        anoDeLancamento: 2021,
        emCartaz: 1
    }
]

/*var filmeObj = {
    codigo:0,
    titulo:"",
    duracao:0,
    atores: ["",""],
    anoDeLancamento:0,
    emCartaz: 0
}

var filmeCatalogo = new filmeObj()*/

function adicionarFilme(codigoFilme, tituloFilme, duracaoFilme, atoresFilme, anoFilme, cartazFilme){
    
    if(catalogo.indexOf(codigoFilme)== -1){
        let filme = {   
        codigo: codigoFilme,
        titulo: tituloFilme,
        duracao: duracaoFilme,
        atores: atoresFilme,
        anoDeLancamento: anoFilme,
        emCartaz: cartazFilme    
        }
        catalogo.push(filme)
    }else{
        console.log("Filme já adicionado.")
    }
};
    

adicionarFilme(3, "Edward Mãos de Tesoura", 1.6, ["Johnny Depp", "Winona Ryder", "Anthony Michael Hall", "Vincent Price", "Alan Arkin"],
1990, 0);
console.log(catalogo);

function buscarFilme(codigoFilme){
    let busca = catalogo.filter(x => x.codigo == codigoFilme)
    console.log("Código: " + busca.map(x => x.codigo));
    console.log("Título: " + busca.map(x => x.titulo));
    console.log("Duração: " + busca.map(x => x.duracao) + " horas");
    console.log("Atores: " + busca.map(x => x.atores));
    console.log("Ano de lançamento: " + busca.map(x => x.anoDeLancamento));
    console.log("Em Cartaz: " + busca.map(x => x.emCartaz==1 ? "Sim" : "Não"));

};

buscarFilme(2);

function alterarStatusEmCartaz(codigoFilme){
    catalogo.filter(x => x.codigo == codigoFilme).map(x => x.emCartaz ==1? x.emCartaz = 0 : x.emCartaz = 1);
};

alterarStatusEmCartaz(2);
buscarFilme(2)
