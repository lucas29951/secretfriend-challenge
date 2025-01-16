// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function actualizarListaAmigos() {
    let listaAmigos = document.querySelector('.name-list');

    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < friendsList.length; i++) {
        let item = document.createElement('li');
        item.textContent = friendsList[i];
        listaAmigos.appendChild(item);
    }
}
