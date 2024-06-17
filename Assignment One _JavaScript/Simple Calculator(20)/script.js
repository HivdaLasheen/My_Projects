function appendToScreen(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    let result = document.getElementById('result').value;
    let output;

    try {
        output = eval(result);
    } catch (e) {
        output = 'Error';
    }

    document.getElementById('result').value = output;
}
