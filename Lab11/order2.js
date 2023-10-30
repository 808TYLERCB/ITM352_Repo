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
    return Number.isInteger(num) && num >= 0;
}

function displayPurchase() {
    const value = document.getElementById('quantity').value;

    if (isValidPositiveInteger(value)) {
        document.body.innerHTML = `Thank you for ordering ${value} things!`;
    } else {
        alert('Please enter a valid non-negative integer before purchasing.');
    }
}