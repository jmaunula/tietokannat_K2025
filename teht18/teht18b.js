const prompt = require('prompt-sync')();

let word = prompt("Anna sana: ");
let reversed = word.split('').reverse().join("");
console.log("Takaperin sana on: " + reversed);

if(reversed === word)
{
    console.log("Antamasi sana " + word + " on palindromi");
}
else
{
    console.log("Antamasi sana " + word + " ei ole palindromi");
}