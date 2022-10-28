"use script"

const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < listNumber.length; i++) {

    if (i % 2 !== 0) {
        sum = sum + listNumber[i];

    } 
}

console.log(sum);