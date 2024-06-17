function generateTable() {
    // Get the value from the input field
    let num = document.getElementById('numberInput').value;

    // Parse the number
    num = parseInt(num, 10);

    // Check if the input is a valid number
    if (isNaN(num) || num <= 0) {
        document.getElementById('result').innerText = "Please enter a valid positive integer.";
        return;
    }

    // Generate the multiplication table up to 12
    let table = "";
    for (let i = 1; i <= 12; i++) {
        table += `${num} x ${i} = ${num * i}<br>`;
    }

    // Display the result
    document.getElementById('result').innerHTML = table;
}
