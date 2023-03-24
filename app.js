const express = require("express");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// POST route to send email
app.post('/sendEmail', (req, res) => {
  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'devarajpraj369@gmail.com',
      pass: 'odbxowidllayrlmg'
    }
  });

  // Setup email data
  const mailOptions = {
    from: 'devarajpraj368@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: ' + error.message);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});