document.addEventListener("DOMContentLoaded", ()=>{
    updatePost();
})

function updatePost(){
    fetch("http://192.168.1.103:3001/api/cadastro")
        .then((res)=>{
            //console.log(res)
            return res.json();
        }).then((json)=>{
            //console.log(json)
            let posts = JSON.parse(json);
            let container = document.querySelector(".container");
            let elements = "";
            //console.log(posts)
            posts.forEach((post)=>{
                let element = `<div class="each-container">
                                    <div class="name-container">Nome: <span>${post.name}</span></div>
                                    <div class="age-container">Idade: <span>${post.age}</span></div>
                                    <div class="group-container">Turma: <span>${post.group}</span></div>
                                </div>`;

                elements += element;
            })
            container.innerHTML = elements;
        });
}

function newPost(){
    let name = document.querySelector("#na").value;
    let age = document.querySelector("#ag").value;
    let group = document.querySelector("#gr").value;

    let post = {name, age, group};

    let options = {method: "POST",
                headers: new Headers({"content-type": "application/json"}),
                body: JSON.stringify(post)};

    fetch("http://192.168.1.103:3001/api/cadastro/new", options)
        .then(()=>{
            updatePost();
            document.querySelector("#na").value = "";
            document.querySelector("#ag").value = "";
            document.querySelector("#gr").value = "";
        })
}