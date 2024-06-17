function printEvenNumbers() {
    // Get the value from the input field
    let num = document.getElementById('numberInput').value;

    // Parse the number
    num = parseInt(num, 10);

    // Check if the input is a valid number
    if (isNaN(num) || num <= 0) {
        document.getElementById('result').innerText = "Please enter a valid positive integer.";
        return;
    }

    // Generate even numbers up to the entered number
    let evenNumbers = "";
    for (let i = 2; i <= num; i += 2) {
        evenNumbers += i + " ";
    }

    // Display the result
    document.getElementById('result').innerText = evenNumbers.trim();
}
