// 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Creating a Function with Parameters which Return a value in String:
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Calling a Function and Prints a Returned value:
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("New York", "USA"));

console.log(city_country("Mumbai", "India"));
