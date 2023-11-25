const fs = require('fs');

// Load and parse the JSON file
let rawdata = fs.readFileSync('user_data.json');
let users_reg_data = JSON.parse(rawdata);

// Output the entire users_reg_data object
console.log(users_reg_data);

// Get the password for the username 'kazman'
console.log("Password for kazman:", users_reg_data.kazman.password);