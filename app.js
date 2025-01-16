// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function agregarAmigo() {
    let newFriend = document.getElementById('amigo').value;
    
    if(newFriend !== '') {
        friendsList.push(newFriend);
    } else {
        alert('Por favor, inserte un nombre.');
    }

    document.getElementById('amigo').value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.querySelector('.name-list');

    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < friendsList.length; i++) {
        let item = document.createElement('li');
        item.textContent = friendsList[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    let result = document.getElementById('resultado');

    if(friendsList.length >= 0) {
        let elegido = Math.floor(Math.random() * friendsList.length);
        result.innerHTML = 'El amigo secreto sorteado es: ' + friendsList[elegido];
    }
}
