function checkNumberSign() {
    // Get the value from the input field
    let number = parseFloat(document.getElementById('numberInput').value);

    // Check if the input is a valid number
    if (isNaN(number)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    // Check if the number is positive, negative, or zero
    if (number > 0) {
        document.getElementById('result').innerText = `${number} is Positive.`;
    } else if (number < 0) {
        document.getElementById('result').innerText = `${number} is Negative.`;
    } else {
        document.getElementById('result').innerText = `${number} is Zero.`;
    }
}
