/* Prompt the user to enter a number*/
var userInput = prompt("Enter a number:");

/* Convert the user input to a number */
var number = parseInt(userInput);

/*Check if the input is a valid number */
if (!isNaN(number)) {
	    /* Check if the number can be divided by both 3 and 4 */
	    if (number % 3 === 0 && number % 4 === 0) {
		            console.log("Yes");
		        } else {
				        console.log("No");
				    }
} else {
	    /* If the input is not a valid number, print an error message */
	    console.log("Error: Please enter a valid number.");
}
