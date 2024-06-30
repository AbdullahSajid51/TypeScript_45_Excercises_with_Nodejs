// 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Making an Array and print its original order.
let favPlaces: string[] = ["Denmark", "China", "Najaf", "Brazil", "Australia"];
console.log("Original Order:", favPlaces);

// Print the Array in Alphabetical Order without Modifying the actual list.
console.log("Alphabetical Order:", [...favPlaces].sort()); //// ...dots say original array change nhi hoti(Copy banay k liye used hote hain 3dots)
// console.log("Alphabetical Order:", favPlaces.sort());

// Show that the array is still in original order.
console.log("Still in Original Order:", favPlaces);

// Print the Array in reverse Order without Modifying the actual Array list.
console.log("Reverse Order:", [...favPlaces].reverse());

// Show that the array is still in original order.
console.log("Still in Original Order:", favPlaces);

// We have Changed the orignal Array order.
console.log("Original Array Reversed:", favPlaces.reverse());

// Print the array to show that it back to its original order.
console.log("Back to Orginal Order:", favPlaces.reverse());

// Print the Array to show that its order has been changed in Alphabetical Order.
console.log("Sorted in Alphabetical Order:", favPlaces.sort());

// We have Changed the orignal Array order Again.
console.log("Original Array Reversed Again:", favPlaces.reverse());
