// 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Define a Function to create a car object with optional options:
function create_cars(manufacturer: string, model: string, ...options) {
  // Initialize a car object with manufacturer and model:
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

  // Add Additional options to the car object:
  options.forEach((option) => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });
  return car;
}

// Call the Function to create a car object:
let my_car = create_cars("Toyota", "Corolla", "Color: Black", "Sunroof: True");

// Print the Variable to ensure all thr information is stored correctly in the car object:
console.log(my_car);
