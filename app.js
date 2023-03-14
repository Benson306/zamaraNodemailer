let express = require('express');

let app = express();

let bodyParser = require('body-parser');

const nodemailer = require('nodemailer');

app.use(bodyParser.json())


let urlencodedParser = bodyParser.urlencoded({ extended: false });

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.smtpbucket.com',
    port: 8025,
    secure: false,
    // auth: {
    //   user: 'your-smtpbucket-username',
    //   pass: 'your-smtpbucket-password'
    // }
  });

  const message = {
    from: 'bnkimtai@gmail.com>',
    to,
    subject,
    text
  };

  await transporter.sendMail(message);
};

//module.exports = sendEmail;


app.post('/', (req, res)=>{
    sendEmail(req.body.to,req.body.subject, req.body.body)
    res.json('success')
})


app.listen(3000)

