import cors from 'cors';
import nodemailer from 'nodemailer';
import functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'victormutaijambo@gmail.com',
    pass: 'isystems1234'
  }
});

export default functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const { dest } = req.query;

    const mailOptions = {
      from: 'Your Victor Mutai <victormutaijambo@gmail.com>',
      to: dest,
      subject: 'I\'M A PICKLE!!!',
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
        <br />
        <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
    };

    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      console.log(info);
      return res.send('Sended');
    });
  });
});
