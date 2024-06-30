"use strict";
// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Define Variables.
let apple = "apple";
let upperCaseApple = "APPLE";
// Test for equality and inequality with strings.
console.log("Is apple equals to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equals to apple?");
console.log(apple != "apple");
// Test using Lower case function.
console.log("\nIs APPLE equal to apple after converting to lower case function?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE not equals to apple after converting to lower case function?");
console.log(upperCaseApple.toLowerCase() != "apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;
// Equals to:
console.log("\nIs ten equal to twenty?");
console.log(ten == twenty);
// Not Equals to:
console.log("\nIs ten not equals to twenty?");
console.log(ten != twenty);
// Greater than:
console.log("\nIs ten greater than zero?");
console.log(ten > 0);
// Less than:
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
// Greater than Equals to:
console.log("\nIS ten greater than or equals to 5?");
console.log(ten >= 5);
// Less than Equals to:
console.log("\nIS twenty is less than or equals to 10?");
console.log(twenty <= ten);
// • Tests using "and" and "or" operators
// Using && (and)
// "and" operators gives true if both conditions answer is true.
console.log("\ntwenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equals to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
// OR operator gives True if anyone condition -> ans is true (Dono mese koi aik bhi condition true hogi tu answer true ayega)
console.log("\n20 is greater than 50 OR 20 is equals to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n20 is greater than 50 OR 20 is Not equals to 20");
console.log(20 > 50 || twenty != 20);
// • Test whether an item is in a array
let fruits = ["apple", "banana", "orange"];
console.log("\nIs orange include in my fruits array?");
console.log(fruits.includes("orange"));
// • Test whether an item is not in a array
// console.log("\nIs mango include in my fruits array?");
// console.log(fruits.includes("mango"));
console.log("\nIs orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
