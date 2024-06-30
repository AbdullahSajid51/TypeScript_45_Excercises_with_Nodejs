// 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names = ["Musa", "Danyal", "Bilal", "Kashan", "Ali"];
let Greetings = "May Allah gave you a long live.";
names.forEach((friendnames) => console.log(friendnames, Greetings)); ////--> 1st method

names.forEach(
  (friendnames) => console.log(`Hello ${friendnames}, how are you!`) //// 2nd method
);
