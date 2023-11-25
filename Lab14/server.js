const fs = require('fs');
const express = require('express');
const app = express();
const filename = 'user_data.json';

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

// Login form with "sticky" behavior and error message display
app.get("/login", function (request, response) {
    let previousData = request.query;
    let errorMessage = "";

    if (previousData.error) {
        errorMessage = `<p style="color: red;">${previousData.error}</p>`;
    }

    const form = `
    <body>
    <form action="/login" method="POST">
        ${errorMessage}
        <input type="text" name="username" size="40" placeholder="enter username" value="${previousData.username || ''}"><br />
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
        // Redirect back to the login form with the username and an error message
        response.redirect(`/login?username=${encodeURIComponent(username)}&error=Invalid%20username%20or%20password`);
    }
});

// Register form
app.get("/register", function (request, response) {
    const form = `
    <body>
    <form action="/register" method="POST">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
        <input type="email" name="email" size="40" placeholder="enter email"><br />
        <input type="submit" value="Submit" id="submit">
    </form>
    </body>
    `;
    response.send(form);
});

// Process register form POST
app.post("/register", function (request, response) {
    let username = request.body.username;
    let password = request.body.password;
    let repeat_password = request.body.repeat_password;
    let email = request.body.email;

    // Check if the username does not exist and the passwords match
    if (!users_reg_data.hasOwnProperty(username) && password === repeat_password) {
        users_reg_data[username] = {
            'password': password,
            'email': email
        };

        fs.writeFileSync(filename, JSON.stringify(users_reg_data, null, 2));
        response.redirect('/login');
    } else {
        response.redirect('/register');
    }
});

// Start the server
app.listen(8080, () => console.log(`listening on port 8080`));
