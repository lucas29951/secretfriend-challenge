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
}