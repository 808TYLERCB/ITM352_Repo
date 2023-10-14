// Array definition for quantities
let product_quantities = [1, 3, 5, 10, 8, 3];

// Array definition for product details
let products = [
 { 'name': 'small gumball', 'price': 0.02 },
 { 'name': 'medium gumball', 'price': 0.05 },
 { 'name': 'large gumball', 'price': 0.07 },
 { 'name': 'small jawbreaker', 'price': 0.06 },
 { 'name': 'large jawbreaker', 'price': 0.10 }
];

// Looping through the array and inserting into the table
window.onload = function() {
    let table = document.getElementById('productsTable');

    for(let i = 0; i < products.length; i++) {
        let row = table.insertRow();
    
        // Insert cells for Product #, Name, Quantity, Price, and Extended Cost
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
    
        cell1.innerHTML = i + 1; // Product #
        cell2.innerHTML = products[i].name; // Name
        cell3.innerHTML = product_quantities[i]; // Quantity
        cell4.innerHTML = "$" + products[i].price.toFixed(2); // Price
        cell5.innerHTML = "$" + (products[i].price * product_quantities[i]).toFixed(2); // Extended Cost
    }
}
