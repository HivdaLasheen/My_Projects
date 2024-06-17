function checkEvenOrOdd() {
    // Get the value from the input field
    let number = parseInt(document.getElementById('numberInput').value);

    // Check if the input is a valid number
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    // Check if the number is even or odd
    if (number % 2 === 0) {
        document.getElementById('result').innerText = `${number} is Even.`;
    } else {
        document.getElementById('result').innerText = `${number} is Odd.`;
    }
}
