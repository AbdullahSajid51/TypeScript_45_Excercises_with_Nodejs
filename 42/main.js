"use strict";
// 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define a Function to show magicians names:
function show_magicians(magicians) {
    magicians.forEach((names) => console.log(names));
}
// Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`);
}
// Define an array containing magicians name:
let magician_names = ["Harry porter", "ABD Villers", "Jason"];
// Call make_great Function to modify magicians names:
let great_magicians = make_great(magician_names);
// Call Show magician function that show modified list of magicians:
show_magicians(great_magicians);
