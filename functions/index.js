const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const config = require('./config')

admin.initializeApp(config);

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'victormutaijambo@gmail.com',
    pass: 'isystems1234'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
      from: 'Your Victor Mutai <victormutaijambo@gmail.com>',
      to: dest,
      subject: 'I\'M A PICKLE!!!',
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
        <br />
        <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro){
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
