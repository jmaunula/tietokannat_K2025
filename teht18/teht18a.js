const prompt = require('prompt-sync')();
let luku1 = prompt("Anna ensimmäinen luku: ");
let luku2 = prompt("Anna toinen luku: ");

if(luku1 > luku2)
{
    console.log("Antamasi luku " + luku1 + " on isompi");
}
else
{
    console.log("Antamasi luku " + luku2 + " on isompi");
}