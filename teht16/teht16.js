const bookArray=[
    {'id_book' :"1", 'name' :"Everything You Ever Wanted to Know", 'author' :"Upton", 'isbn' :"082305649x"},
    {'id_book' :"2", 'name' :"Photography", 'author' :"Vilppu", 'isbn' :"205711499"},
    {'id_book' :"3", 'name' :"Drawing Manual Vilppu", 'author' :"Zelanshi", 'isbn' :"1892053039"},
    {'id_book' :"4", 'name' :"TBA", 'author' :"Zelanshi", 'isbn' :"0534613932"}
];

console.log("tietotyyppi:");
console.log(typeof bookArray);
console.log("");

console.log("bookArrayn sisältö:");
bookArray.forEach(element => {
    console.log(element);
});
console.log("");

console.log("bookArrayn ensimmäinen rivi:");
console.log(bookArray[0]);
console.log("");

console.log("ensimmäisen kirjan nimi:");
console.log(bookArray[0].name);
console.log("");

console.log("arrayn rivien määrä:");
console.log(bookArray.length);
console.log("");

console.log("kaikkien kirjojen nimet:");
bookArray.forEach(element => {
    console.log(element.name);
});