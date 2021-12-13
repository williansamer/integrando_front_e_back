//É aqui que acontece a mágica da ligação do FRONT com o BACK.
//Com o 'fetch' e suas premissas(promisses), ele possibilita esta ligação
//NOTA: Observe que o 'console.log' aqui aparece no navegador. Em arquivo BACKEND, o 'console.log' aparece no terminal NODE.

document.addEventListener("DOMContentLoaded", ()=>{
    updatePost();
})

function updatePost(){
    fetch("http://192.168.1.119:3001/api/cadastro") //Fazendo a ligação com a ROTA GET(router.get) do 'api/cadastro'
        .then((res)=>{
            //console.log(res)
            return res.json(); //retorna promisse
        }).then((json)=>{
            //console.log(json)
            let posts = JSON.parse(json); //transformando o 'json' em 'parse' para trabalhar com o arquivo
            let container = document.querySelector(".container");
            let elements = "";
            //console.log(posts)
            posts.forEach((post)=>{ //Fazendo loop no BD para pegar cada objeto lá dentro e..
                let element = `<div class="each-container">
                                    <div class="name-container">Nome: <span>${post.name}</span></div>
                                    <div class="age-container">Idade: <span>${post.age}</span></div>
                                    <div class="group-container">Turma: <span>${post.group}</span></div>
                                </div>`;

                elements += element; //concatenando com o elements, que é o que será apresentado na tela.
            })
            container.innerHTML = elements; //inserindo dentro da 'div' container
        });
}

function newPost(){
    let name = document.querySelector("#na").value;
    let age = document.querySelector("#ag").value;
    let group = document.querySelector("#gr").value;

    let post = {name, age, group}; //Pegando os valores e colocando em objeto com um só nome(post)

    let options = {method: "POST", //Definindo o 'method'
                headers: new Headers({"content-type": "application/json"}), //Definindo o 'header' do tipo json, pois é uma string que temos que enviar para o BD
                body: JSON.stringify(post)}; //Enviando os objetos em tipo string no BODY(Lá no BACK, o 'name' por ex será 'req.body.name')

    fetch("http://192.168.1.119:3001/api/cadastro/new", options) //Fazendo a ligação com a ROTA POST(router.post) do 'api/cadastro/new'. E enviando, pelo meio do options, os dados a serem gravados no BD.
        .then(()=>{
            updatePost(); //Atualizando a página
            document.querySelector("#na").value = ""; //limpando os values dos inputs
            document.querySelector("#ag").value = "";
            document.querySelector("#gr").value = "";
        })
}