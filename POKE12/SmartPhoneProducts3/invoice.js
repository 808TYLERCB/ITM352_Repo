// Extracting the query string parameters
let params = (new URL(document.location)).searchParams;
let quantities = [];

// Using a loop to go through the expected parameters and populate the quantities array
for (let i = 0; i < products.length; i++) {
    let paramValue = params.get("quantity" + i);
    if (paramValue === null || paramValue === "") {
        quantities.push(-1); // Indicates an empty input
    } else {
        quantities.push(parseInt(paramValue));
    }
}

// function to validate quantity from data
function validateQuantity(quantity) {
    let errors = [];
    if (isNaN(quantity)) errors.push("Not a number!");
    if (quantity < 0) errors.push("Negative inventory!");
    if (!Number.isInteger(Number(quantity))) errors.push("Not an integer!");
    return errors.join(' ');
}

// function to generate rows based on data and errors
function generate_item_rows() {
    let invoiceTable = document.getElementById('invoiceTable');
    let subtotal = 0;

    for(let i in products) {
        if (quantities[i] === -1) {
            continue; // Skip this iteration if the quantity indicates an empty input
        }

        let error = validateQuantity(quantities[i]);
        
        let extended_price = 0;
        let errorText = "";
        if (error.length > 0) {
            extended_price = 0;
            errorText = '<div style="color:red;">' + error + '</div>';
        } else {
            extended_price = products[i].price * quantities[i];
        }

        if (quantities[i] !== 0 || error.length > 0) {
            let row = invoiceTable.insertRow();
            row.insertCell().innerHTML = products[i].brand;
            row.insertCell().innerHTML = errorText || quantities[i];
            row.insertCell().innerHTML = products[i].price.toFixed(2);
            row.insertCell().innerHTML = extended_price.toFixed(2);

            if(error.length === 0) subtotal += extended_price;
        }
    }

    // Tax, shipping, and total calculations
    let tax = subtotal * 0.0575;
    let shipping = 0;
    if (subtotal <= 50) {
        shipping = 2;
    } else if (subtotal > 50 && subtotal <= 100) {
        shipping = 5;
    } else {
        shipping = 0.05 * subtotal;
    }
    let total = subtotal + tax + shipping;

    document.getElementById("subtotal_cell").innerHTML = "$" + subtotal.toFixed(2);
    document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("shipping_cell").innerHTML = "$" + shipping.toFixed(2);
    document.getElementById("total_cell").innerHTML = "<strong>$" + total.toFixed(2) + "</strong>";
}

// Trigger the generation of invoice rows upon loading the script
generate_item_rows();
