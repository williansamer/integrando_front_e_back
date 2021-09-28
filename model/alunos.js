module.exports = {
    posts: [{id: "moim324a",
            name: "Airton Senna",
            age: 34,
            group: "Mason"}],
    getAll(){return this.posts},
    newPost(name, age, group){
        this.posts.push({id: generateId(), name, age, group})
    }
}

function generateId(){
    return Math.random().toString(36).substring(2,9);
}