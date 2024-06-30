"use strict";
// 31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Creating an Array.
let userNames = ["Musa", "Bilal", "Danyal", "Admin", "Ali"];
userNames = [];
// let userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty, You need to find some users!");
}
else
    userNames.forEach((names) => {
        if (names === "Admin") {
            console.log(`\nHello ${names}, would you like to see a status report?`);
        }
        else
            console.log(`\nHello ${names}, thank you for logging in again.`);
    });
