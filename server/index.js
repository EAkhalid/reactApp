const express = require('express');
const { default: transporter } = require('../src/services/sendEmail');
const app = express();
const PORT = process.env.PORT || 5000;

// Define routes or middleware as needed
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the server!',
  };
  res.json(data);
});

app.post('api/sendMessage', (req, res) => {
  const { name,surname,website, email, message } = req.body;
  // Create the email message
  const mailOptions = {
    from: email,
    to: "contact@pty-trade.com",
    subject:`${name} ${surname} Message from your website`,
    text:message +' '+website,
  };
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true });
    }
  });
  res.json({ success: true }); 

});

// Serve static files for the React app
app.use(express.static('build'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
