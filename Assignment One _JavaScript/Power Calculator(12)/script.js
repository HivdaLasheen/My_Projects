function calculatePower() {
    // Get the values from the input fields
    let base = document.getElementById('baseInput').value;
    let exponent = document.getElementById('exponentInput').value;

    // Parse the values
    base = parseInt(base, 10);
    exponent = parseInt(exponent, 10);

    // Check if the inputs are valid numbers
    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById('result').innerText = "Please enter valid integers for both base and exponent.";
        return;
    }

    // Calculate the power
    let result = Math.pow(base, exponent);

    // Display the result
    document.getElementById('result').innerText = `${base}^${exponent} = ${result}`;
}
