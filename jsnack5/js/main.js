"use strict"

const numbers = [];

for (let i = 0; i < 346; i++){
    let newNumber = Number(prompt("inserisci numero:"));
    if (newNumber % 2 != 0 ){
        numbers.push(newNumber);
    }
}

console.log(numbers);