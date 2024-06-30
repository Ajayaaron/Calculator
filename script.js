function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteLast() {
    var display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function calculate() {
    var display = document.getElementById('display').value;
    try {
        var result = eval(display);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}