// // 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// // Rest Parameter (...) => 1 hi parameter main multiples arguments add karwata hai rest parameter.

// // Define a function with Rest Parameter that accepts items arguments representing our Sandwich:

function makeSandwich(...items: string[]) {
  console.log("\nMaking a Sanwich with the following items:\n");

  items.forEach((singleItem) => console.log("-", singleItem));

  console.log("\nNow Enjoy your Sanwich.");
}

// Calling the Function 3 times with three diffrent no.of argument:
makeSandwich("Chicken", "Cheese", "Sausage", "Mayo", "Ketchup", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "BBQ Chicken");

// // OR

// // Define a function with Rest Parameter that accepts items arguments representing our Sandwich:
// function makeSandwich(...items: string[]) {
//   console.log("\nMaking a Sandwich with the following items:\n");

//   items.forEach((singleItem, index) => {
// console.log(`${index + 1}. ${singleItem}`);
//   });

//   console.log("\nNow enjoy your sandwich!");
//   console.log(items);
// }

// // Calling the function 3 times with different numbers of arguments:
// makeSandwich("Chicken", "Cheese", "Sausage", "Mayo", "Ketchup", "Egg");
// makeSandwich("Turkey", "Swiss Cheese", "Pickles");
// makeSandwich("Peanut Butter", "Jelly");
