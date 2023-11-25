const fs = require('fs');

// Read the file content as a UTF-8 encoded string
const data = fs.readFileSync('user_data.json', 'utf-8');

// Parse the JSON string into an object
const users_reg_data = JSON.parse(data);

// Output the users_reg_data object to the console
console.log(users_reg_data);