function printNumbers() {
    // Get the value from the input field
    let num = document.getElementById('numberInput').value;

    // Parse the number
    num = parseInt(num, 10);

    // Check if the input is a valid number
    if (isNaN(num) || num <= 0) {
        document.getElementById('result').innerText = "Please enter a valid positive integer.";
        return;
    }

    // Generate the number sequence
    let sequence = "";
    for (let i = 1; i <= num; i++) {
        sequence += i + ", ";
    }

    // Remove the trailing comma and space
    sequence = sequence.slice(0, -2);

    // Display the result
    document.getElementById('result').innerText = sequence;
}
