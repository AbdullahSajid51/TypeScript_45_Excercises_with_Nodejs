"use strict";
// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Making a Function:
function make_shirt(size = "Large", text = "I love TypeScript") {
    console.log(`Creating a ${size} size shirt with the ${text} prints on it.`);
}
// Calling a Function with by Default Values:
make_shirt();
// Calling a Function with Medium Size shirt and Default Values:
make_shirt("Medium");
// Calling a Function with Small Size and Differnt print meesseg:
make_shirt("Small", "I love JavaScript");
