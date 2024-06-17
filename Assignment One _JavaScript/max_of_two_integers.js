// Function to get the maximum of two integers
function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Main program
function main() {
    // Getting input from the user
    let input = prompt("Enter two integers separated by a space:");
    // Splitting the input into two parts
    let numbers = input.split(' ').map(Number);
    // Finding the maximum of the two numbers
    let maxNumber = getMax(numbers[0], numbers[1]);
    // Printing the result
    console.log("Output:", maxNumber);
    alert("Output: " + maxNumber);
}

// Running the main function
main();
