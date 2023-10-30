function updateMessage(textbox) {
    const messageSpan = document.getElementById('qty_textbox_message');
    const value = textbox.value;

    if (isValidPositiveInteger(value)) {
        messageSpan.innerHTML = value;
    } else {
        messageSpan.innerHTML = 'Error: Please enter a valid positive integer';
    }
}

function isValidPositiveInteger(value) {
    const num = parseInt(value, 10);
    return Number.isInteger(num) && num > 0;
}