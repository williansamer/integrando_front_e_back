document.addEventListener("DOMContentLoaded", ()=>{
    clearInput();
})

function clearInput(){
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let message = document.querySelector("#message");

        setTimeout(()=>{
            email.value = "";
            subject.value = "";
            message.value = "";
        }, 3000)
    
}