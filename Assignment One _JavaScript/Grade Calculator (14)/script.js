function calculateGrade() {
    // Get the values from the input fields
    let physics = parseInt(document.getElementById('physics').value, 10);
    let chemistry = parseInt(document.getElementById('chemistry').value, 10);
    let biology = parseInt(document.getElementById('biology').value, 10);
    let mathematics = parseInt(document.getElementById('mathematics').value, 10);
    let computer = parseInt(document.getElementById('computer').value, 10);

    // Calculate total marks
    let totalMarks = physics + chemistry + biology + mathematics + computer;

    // Calculate percentage
    let percentage = (totalMarks / 500) * 100;

    // Determine grade based on percentage
    let grade;
    if (percentage >= 90) {
        grade = 'Grade A';
    } else if (percentage >= 80) {
        grade = 'Grade B';
    } else if (percentage >= 70) {
        grade = 'Grade C';
    } else if (percentage >= 60) {
        grade = 'Grade D';
    } else if (percentage >= 40) {
        grade = 'Grade E';
    } else {
        grade = 'Grade F';
    }

    // Prepare the result string
    let resultString = `
        Total marks = ${totalMarks}<br>
        Percentage = ${percentage.toFixed(2)}%<br>
        Grade = ${grade}
    `;

    // Display the result
    document.getElementById('result').innerHTML = resultString;
}
