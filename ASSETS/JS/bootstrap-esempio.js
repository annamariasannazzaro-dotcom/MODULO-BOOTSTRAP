//VARIABILI



//ELEMENTI DOM

const form = document.querySelector("form");


//GESTIONE EVENTI
form.addEventListener('submit', (e) =>{
    e.preventDefault();//blocca il refresh
    form.reset();
})