// Function to determine if the number is negative or positive
function determineSign(num) {
    if (num < 0) {
        return "negative";
    } else {
        return "positive";
    }
}

// Main program
function main() {
    // Getting input from the user
    let input = prompt("Enter an integer:");
    // Converting the input to a number
    let number = parseInt(input, 10);
    // Determining if the number is negative or positive
    let result = determineSign(number);
    // Printing the result
    console.log("Output:", result);
    alert("Output: " + result);
}

// Running the main function
main();
