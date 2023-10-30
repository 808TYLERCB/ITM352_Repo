let params = (new URL(document.location)).searchParams;

function updateMessage(theTextBox) {
    const messageSpan = document.getElementById('qty_textbox_message');
    const value = theTextBox.value;

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

function validateOnLoad() {
    const quantity_form = document.forms["quantity_form"];

    if (params.has('quantity_textbox')) {
        quantity_form["quantity_textbox"].value = params.get('quantity_textbox');
        checkQuantityTextbox(quantity_form["quantity_textbox"]);
    }
}

function checkQuantityTextbox(textBox) {
    const value = textBox.value;
    const outputDiv = document.getElementById('output');

    if (isValidPositiveInteger(value)) {
        outputDiv.innerHTML = `Thank you for ordering ${value} things!`;
        window.stop();
    } else {
        outputDiv.innerHTML = "Invalid quantity. Please correct it and try again.";
        window.stop();
    }
}
