// 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Musa", "Danyal", "Bilal", "Kashan", "Ali"];
var Greetings = "May Allah gave you a long live.";
names.forEach(function (friendnames) { return console.log(friendnames, Greetings); }); ////--> 1st method
names.forEach(function (friendnames) { return console.log("Hello ".concat(friendnames, ", how are you!")); } //// 2nd method
);
