const fs = require('fs');
const filename = 'user_data.json';
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Check if the user_data.json file exists
if (!fs.existsSync(filename)) {
    console.log(`The file ${filename} does not exist.`);
    process.exit(1);
}

// Read the file content as a UTF-8 encoded string
const data = fs.readFileSync(filename, 'utf-8');

// Parse the JSON string into an object
const users_reg_data = JSON.parse(data);

// Get file statistics
const stats = fs.statSync(filename);
console.log(`user_data.json has ${stats.size} characters`);

// Login form
app.get("/login", function (request, response) {
    const form = `
    <body>
    <form action="/login" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(form);
});

// Process login form POST
app.post("/login", function (request, response) {
    let username = request.body.username;
    let password = request.body.password;

    if (users_reg_data[username] && users_reg_data[username].password === password) {
        response.send(`<h1>${username} logged in</h1>`);
    } else {
        response.redirect('/login');
    }
});

// Start the server
app.listen(8080, () => console.log(`listening on port 8080`));
