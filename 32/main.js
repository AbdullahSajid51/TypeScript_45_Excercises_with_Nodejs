"use strict";
// 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Array of Current Users.
let current_users = ["Abdullah", "ALI", "Danyal", "Musa", "Bilal"];
// Array of New Users.
let new_users = ["Salman", "ali", "Abbas", "Hussain", "Musa"];
// Loopt hrough new_users to check for usernames availability
new_users.forEach((new_one_user) => {
    // Making a Condition for username already axist and save in our_condition variable.
    let our_condition = current_users.some((current_one_user) => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // Print Different messeges using If-else statements.
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available.`);
    }
});
//// Some function --> to compare the values of Array.
