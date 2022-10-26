"use strict"

const firstWord = prompt ("prima parola:");
const secondWord = prompt ("seconda parola:");

if (firstWord.length > secondWord.length){
    console.log(firstWord, secondWord);
} else{
    console.log(secondWord, firstWord)
}