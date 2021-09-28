module.exports = {
    posts: [{id: "moim324a",
            name: "Airton Senna",
            age: 34,
            group: "Mason"}],
    getAll(){return this.posts},
    newPost(name, age, group){
        this.posts.push({id: generateId(), name, age, group}) //Como são os mesmos nomes das chaves('name' por ex), pode ser apenas {name}, se fosse diferente, teria que ser: {name: nome} por ex.
    }
}

function generateId(){
    return Math.random().toString(36).substring(2,9);
}