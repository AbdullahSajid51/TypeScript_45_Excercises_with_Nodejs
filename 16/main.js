// 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// creating a Guest list Array.
var invitationList = ["Musa", "Danyal", "Bilal"];
// Making a variable for those guest who cant come.
var dontCome = invitationList[0];
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
var middleIdx = Math.floor(invitationList.length / 2);
// Adding a new guest at the Middle index of array.
invitationList.splice(middleIdx, 0, "Haider");
// Print Messege of Updated list.
console.log("Updated list of our New Guest.");
// Sending the invitation msg to our guests one by one with thier name.
invitationList.forEach(function (person) {
    return console.log("".concat(person, ", you are invite for annual Dinner party."));
});
