const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const hardcodedEmail = 'user@gmail.com';
const hardcodedPassword = 'password123';

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Print email and password to the console
    console.log('Received email:', email);
    console.log('Received password:', password);

    // Check if email and password match the hardcoded credentials
    if (email === hardcodedEmail && password === hardcodedPassword) {
        console.log('Login successful');
        res.status(200).send('Login successful');
    } else {
        console.log('Invalid login attempt');
        res.status(401).send('Invalid email or password');
    }
});

// Server setup
app.listen(5000, () => {
    console.log('Server running on port 5000');
});

console.log("Server is up and running");