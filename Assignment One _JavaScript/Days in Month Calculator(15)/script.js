function calculateDays() {
    // Get the value from the input field
    let monthNumber = document.getElementById('monthInput').value;

    // Parse the month number
    monthNumber = parseInt(monthNumber, 10);

    // Validate the month number
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        document.getElementById('result').innerText = "Please enter a valid month number (1-12).";
        return;
    }

    // Define days in each month (assuming non-leap year)
    const daysInMonth = [
        31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    // Get days for the input month
    let days = daysInMonth[monthNumber - 1];

    // Display the result
    document.getElementById('result').innerText = `Days in Month: ${days}`;
}
