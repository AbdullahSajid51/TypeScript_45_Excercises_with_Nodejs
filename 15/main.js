// 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var invitationList = ["Musa", "Danyal", "Bilal"];
// invitationList.splice(2, 1, "Ali");
// invitationList.forEach((person) =>
//   console.log(`${person}, you are invite for annual Dinner party.`)
// );
var dontCome = invitationList[0];
console.log(dontCome, "said, I am not able to come.");
invitationList.splice(0, 1, "Ali");
invitationList.forEach(function (person) {
    return console.log("".concat(person, ", you are invite for annual Dinner party."));
});
