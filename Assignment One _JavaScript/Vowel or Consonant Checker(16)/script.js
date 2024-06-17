function checkVowelOrConsonant() {
    // Get the value from the input field
    let alphabet = document.getElementById('alphabetInput').value.toLowerCase();

    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the input is a single alphabet character
    if (alphabet.length !== 1 || !(/[a-z]/.test(alphabet))) {
        document.getElementById('result').innerText = "Please enter a single alphabet character.";
        return;
    }

    // Check if the alphabet is a vowel or consonant
    if (vowels.includes(alphabet)) {
        document.getElementById('result').innerText = `${alphabet} is a Vowel.`;
    } else {
        document.getElementById('result').innerText = `${alphabet} is a Consonant.`;
    }
}
