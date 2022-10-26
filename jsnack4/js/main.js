"use strict"

const guestsList = ["Aldo", "Giovanni", "Giacomo"];

const newGuest = prompt ("Inserisci il tuo nome:");

let listed = false;

for (let i = 0; i < guestsList.length; i++){
    let name = guestsList[i];

    if (name == newGuest){
        listed = true;
    }
}

if (listed === true){
    alert("PUOI ENTRARE!");
} else {
    alert("NON SEI IN LISTA!");
}