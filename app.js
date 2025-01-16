// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendsList = [];

function sortearAmigo() {
    let result = document.getElementById('resultado');

    if(friendsList.length >= 0) {
        let elegido = Math.floor(Math.random() * friendsList.length);
        result.innerHTML = friendsList[elegido];
    }
}
