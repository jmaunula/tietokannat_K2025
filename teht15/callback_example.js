//Callback funktio
setTimeout(doSomething,5000);
function doSomething()
{
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Anonyymi funktio
setTimeout(function()
{
    console.log("Demonstrating the callbacks");
},2000);
console.log("The application is started");

//Nuolifunktio
setTimeout(()=>{
    console.log("Demonstrating the callbaks");
},2000);
console.log("The application is started");