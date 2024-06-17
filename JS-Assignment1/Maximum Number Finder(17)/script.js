function findMaximum() {
    // Get the values from the input fields
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    // Find the maximum number
    let max = Math.max(num1, num2);

    // Display the result
    document.getElementById('result').innerText = `Maximum Number: ${max}`;
}
