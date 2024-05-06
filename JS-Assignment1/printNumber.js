/** Prompt the user to enter a number **/
var userInput = prompt("Enter a number:");

/** Convert the user input to a number **/
var number = parseFloat(userInput);

/** Check if the input is a valid number **/
if (!isNaN(number)) {
	    /* Print the number*/
	console.log("Output: " + number);}
else {
	/**If the input is not a valid number, print an error message */
	console.log("Error: Please enter a valid number.");
}

