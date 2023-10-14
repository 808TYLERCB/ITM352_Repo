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

function populateTable() {
    let table = document.getElementById('productsTable');
    let tbody = table.querySelector('tbody');
    
    for(let i = 0; i < products.length; i++) {
        let row = tbody.insertRow();
    
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
    
        cell1.innerHTML = i + 1;
        cell2.innerHTML = products[i].name;
        cell3.innerHTML = product_quantities[i];
        cell4.innerHTML = "$" + products[i].price.toFixed(2);
        cell5.innerHTML = "$" + (products[i].price * product_quantities[i]).toFixed(2);
        
        // Attach event listener for each row
        row.addEventListener('click', function() {
            tbody.deleteRow(this.rowIndex - 1); // subtract 1 to account for the header row
        });
    }
}

function addNewRow() {
    let table = document.getElementById('productsTable');
    let tbody = table.querySelector('tbody');
    let newRow = tbody.insertRow();

    let numberOfCells = table.rows[0].cells.length;

    for (let i = 0; i < numberOfCells; i++) {
        let newCell = newRow.insertCell();
        newCell.innerHTML = "xxx";
    }

    // Attach event listener for the new row
    newRow.addEventListener('click', function() {
        tbody.deleteRow(this.rowIndex - 1); // subtract 1 to account for the header row
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateTable();

    let addRowBtn = document.getElementById('addRowBtn');
    addRowBtn.addEventListener('click', addNewRow);
});
