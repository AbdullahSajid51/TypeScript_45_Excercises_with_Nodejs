"use strict";
// 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Definea Function to print each magician name from an array:
function show_magicians(magicians) {
    magicians.forEach((names) => console.log(names));
}
// Define an array containing magicians name:
let magicians = ["Harry porter", "ABD Villers", "Jason"];
// Call the Function to print each magician name:
show_magicians(magicians);
// OR
// function show_magicians(magicians: string[]) {
//   magicians.forEach((names) => console.log(names));
// }
// // Define an array containing magicians name:
// let magician_names = ["Harry porter", "ABD Villers", "Jason"];
// // Call the Function to print each magician name:
// show_magicians(magician_names);
