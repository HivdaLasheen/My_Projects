// Function to get the maximum of three integers
function getMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Function to get the minimum of three integers
function getMin(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Main program
function main() {
    // Getting input from the user
    let input = prompt("Enter three integers separated by spaces:");
    // Splitting the input into three parts
    let numbers = input.split(' ').map(Number);
    
    // Checking if the user entered exactly three numbers
    if (numbers.length !== 3) {
        alert("Please enter exactly three integers.");
        return;
    }

    // Finding the maximum and minimum of the three numbers
    let maxNumber = getMax(numbers[0], numbers[1], numbers[2]);
    let minNumber = getMin(numbers[0], numbers[1], numbers[2]);
    
    // Printing the result
    console.log("Max element =", maxNumber);
    console.log("Min element =", minNumber);
    alert("Max element = " + maxNumber + "\nMin element = " + minNumber);
}

// Running the main function
main();
