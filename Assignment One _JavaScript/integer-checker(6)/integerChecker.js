        function checkEvenOdd() {
            // Get the number from the user
            let number = prompt("Please enter an integer number:");

            // Parse the number
            number = parseInt(number, 10);

            // Check if the input is a valid number
            if (isNaN(number)) {
                alert("Please enter a valid integer number.");
                return;
            }

            // Check if the number is even or odd
            if (number % 2 === 0) {
                alert("The number " + number + " is even.");
            } else {
                alert("The number " + number + " is odd.");
            }
        }
