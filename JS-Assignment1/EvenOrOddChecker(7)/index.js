function checkEvenOdd() {
    // Get the value from the input field
    let number = document.getElementById('numberInput').value;

    // Parse the number
    number = parseInt(number, 10);

    // Check if the input is a valid number
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid integer number.";
        return;
    }

    // Check if the number is even or odd
    if (number % 2 === 0) {
        document.getElementById('result').innerText = "even";
    } else {
        document.getElementById('result').innerText = "odd";
    }
}
