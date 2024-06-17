function checkVowelOrConsonant() {
    // Get the value from the input field
    let char = document.getElementById('charInput').value.toLowerCase();

    // Check if the input is a single character
    if (char.length !== 1 || !char.match(/[a-z]/i)) {
        document.getElementById('result').innerText = "Please enter a valid single alphabet character.";
        return;
    }

    // Check if the character is a vowel or consonant
    if ('aeiou'.includes(char)) {
        document.getElementById('result').innerText = "vowel";
    } else {
        document.getElementById('result').innerText = "consonant";
    }
}
