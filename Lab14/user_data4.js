const fs = require('fs');
const filename = 'user_data.json';

// Check if the file exists
if (fs.existsSync(filename)) {
    // Read the file content as a UTF-8 encoded string
    const data = fs.readFileSync(filename, 'utf-8');

    // Parse the JSON string into an object
    const users_reg_data = JSON.parse(data);

    // Output the users_reg_data object to the console
    console.log(users_reg_data);

    // Get file statistics
    const stats = fs.statSync(filename);

    // Output the file size in characters
    console.log(`user_data.json has ${stats.size} characters`);
} else {
    console.log(`The file ${filename} does not exist.`);
}
