// 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// creating a Guest list Array.
let invitationList = ["Musa", "Danyal", "Bilal", "Salman"];

// Making a variable for those guest who cant come.
let dontCome = invitationList[0];

// print the name of guest who cant come.
console.log(dontCome, "said, I am not able to come.");

// Add or remove values from guest list array.
invitationList.splice(0, 1, "Ali");

// Printing Msg for Bigger Table.
console.log("I found a bigger dinner table.");

// Adding a new guest at starting index of array.
invitationList.unshift("Sajid");

// Adding a new guest at the ending index of array.
invitationList.push("Fahad");

// Math.floor --> for Round About (Round fig)
// Get the Middle index of array.
let middleIdx: number = Math.floor(invitationList.length / 2);

// Adding a new guest at the Middle index of array.
invitationList.splice(middleIdx, 0, "Haider");
// Print Messege of Updated list.
console.log("Updated list of our New Guest.");

// Sending the invitation msg to our guests one by one with thier name.
invitationList.forEach((person) =>
  console.log(`${person}, you are invite for annual Dinner party.`)
);

// Inform that only two guest can be invited for Dinner.
console.log("I can Invite only two people for Dinner.");
console.log(invitationList);

// Using While Loop to remove guest from the Array Until 2 guest remain.
while (invitationList.length > 2) {
  let removeGuest = invitationList.pop();
  console.log(`sorry, ${removeGuest} I can't invite you to dinner `);
}
// sending the invitation to the last two guest.
console.log("Invitation for Two Lucky peoples:");
invitationList.forEach((lastTwo) =>
  console.log(`Luckily ${lastTwo}, you still Invited..`)
);
console.log(invitationList);

// Removing last two guest from the list.
invitationList.pop();
invitationList.pop();
console.log("Empty List:", invitationList);
