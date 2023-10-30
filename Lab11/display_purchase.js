let params = (new URL(document.location)).searchParams;

if (params.has("qty_textbox")) {
    const qty = params.get("qty_textbox");
    if (isValidPositiveInteger(qty)) {
        document.body.innerHTML = `Thank you for ordering ${qty} things!`;
    } else {
        document.body.innerHTML = "Invalid quantity. Press the back button and try again.";
    }
} else {
    document.body.innerHTML = "Invalid request. Please go back and try again.";
}

function isValidPositiveInteger(value) {
    const num = parseInt(value, 10);
    return Number.isInteger(num) && num >= 0;
}