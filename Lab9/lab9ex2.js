
/* Inital Code
// Define the variable
let attributes = "<name>;<age>;<major>";

// Use the String's split() method to divide the string into an array based on a separator
let parts = attributes.split(";");

let name = parts[0];  // '<name>'
let age = parts[1];   // '<age>'
let major = parts[2]; // '<major>'

console.log(parts); // This will output: [ '<name>', '<age>', '<major>' ]

*/


let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

for (let i = 0; i < pieces.length; i++) {
    console.log(`Part: ${pieces[i]}, Data Type: ${typeof pieces[i]}`);
}

// Output of typeof pieces
console.log(typeof pieces); // This will output: 'object'
