var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tanfmar9@gmail.com',
    pass: '0987654321mar'
  }
});

var mailOptions = {
  from: 'tanfmar9@gmail.com',
  to: 'tanfouri.mohamed.marwan@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});