
   // Product data
   
   // Declare Product Quantities
   let product_quantities = [1, 3, 5, 10, 8, 3]; 
   
    let product1 = {
        itemName: 'Plate Lunch',
        quantity: product_quantities[0], // Using the first value from product_quantities for product1
        price: 100.00,
        extendedPrice: function() {
            return this.quantity * this.price;
        }
    };

// Change the quantity of product1 to 0
//product1.quantity = 0;

// Adding SKU# property to product1
//product1["SKU#"] = 1234;

// Deleting SKU# property to product1
//delete product1["SKU#"];

// Using product_quantities for other products
let quantity1 = product_quantities[1];  // Meat Jun
let quantity2 = product_quantities[2];  // Kalbi
let quantity3 = product_quantities[3];  // Kimchi
let quantity4 = product_quantities[4];  // Rice
let quantity5 = product_quantities[5];  // Mac Salad

    let item1 = 'Meat Jun';
    let price1 = 10;
    let extended_price1 = quantity1 * price1;

    let item2 = 'Kalbi';
    let price2 = 20;
    let extended_price2 = quantity2 * price2;

    let item3 = 'Kimchi';
    let price3 = 7;
    let extended_price3 = quantity3 * price3;

    let item4 = 'Rice';
    let price4 = 5;
    let extended_price4 = quantity4 * price4;

    let item5 = 'Mac Salad';
    let price5 = 2;
    let extended_price5 = quantity5 * price5;

    // Writing the table to the HTML 
    let invoiceTable = document.getElementById('invoiceTable');




    // Item row for product1
    let row = invoiceTable.insertRow();
    row.insertCell().innerHTML = product1.itemName;
    row.insertCell().innerHTML = product1.quantity;
    row.insertCell().innerHTML = product1.price.toFixed(2);
    row.insertCell().innerHTML = product1.extendedPrice().toFixed(2);

    //// Item1 row 
    row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item1;
    row.insertCell().innerHTML = quantity1;
    row.insertCell().innerHTML = price1.toFixed(2);
    row.insertCell().innerHTML = extended_price1.toFixed(2);

    // Item row 2
    row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item2;
    row.insertCell().innerHTML = quantity2;
    row.insertCell().innerHTML = price2.toFixed(2);
    row.insertCell().innerHTML = extended_price2.toFixed(2);

    // Item row 3
    row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item3;
    row.insertCell().innerHTML = quantity3;
    row.insertCell().innerHTML = price3.toFixed(2);
    row.insertCell().innerHTML = extended_price3.toFixed(2);

    // Item row 4
    row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item4;
    row.insertCell().innerHTML = quantity4;
    row.insertCell().innerHTML = price4.toFixed(2);
    row.insertCell().innerHTML = extended_price4.toFixed(2);

    // Item row 5
    row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item5;
    row.insertCell().innerHTML = quantity5;
    row.insertCell().innerHTML = price5.toFixed(2);
    row.insertCell().innerHTML = extended_price5.toFixed(2);


// Calculating the subtotal, tax, and total cells
let subtotal = product1.extendedPrice() + extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;
let tax = subtotal * 0.0575;
let total = subtotal + tax;

document.getElementById("subtotal_cell").innerHTML = "$" + subtotal.toFixed(2);
document.getElementById("tax_cell").innerHTML = "$" + tax.toFixed(2);
document.getElementById("total_cell").innerHTML = "$" + total.toFixed(2);

