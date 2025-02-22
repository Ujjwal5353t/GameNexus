const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vivek33123@gmail.com',
        pass: '12345' // Use an app password if using Gmail
    }
});

// Function to send email
const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: 'gamenexus342@gmail.com',
        to: 'yadavujjwalgamer@gmail.com' ,  to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

// Payment confirmation route (simulate webhook)
app.post('/payment-success', (req, res) => {
    const { email, steamId, password } = req.body;

    if (email && steamId && password) {
        const subject = 'Your Steam Account Details';
        const message = `Thank you for renting a game!\n\nHere are your login details:\nSteam ID: ${steamId}\nPassword: ${password}`;

        // Send the email
        sendMail(email, subject, message);

        res.status(200).send('Email sent successfully!');
    } else {
        res.status(400).send('Missing email, Steam ID, or password.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
