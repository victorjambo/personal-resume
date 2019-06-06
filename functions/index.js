const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'victormutaijambo@gmail.com',
        pass: 'jzulyozstaqmnvyh'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = 'victor.mutai@andela.com' // req.query.dest;

    const mailOptions = {
        from: 'Victor Mutai <victormutaijambo@gmail.com>',
        to: dest,
        subject: 'Thank you',
        html: `<p style="font-size: 16px;">Thank you for leaving Victor Mutai a message. He will get back to you as soon as possible</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
    };

    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.send(error.toString());
        }
        return res.send('Email Sent');
    });
  });
});