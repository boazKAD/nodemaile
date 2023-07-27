const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: "boazkhalifa@gmail.com",
        pass: "lhuzgyutlnwymvfx"
    }
});
let receivers = ['mugiranezajx@gmail.com','perfect@samphone.co','mugiranezajx@gmail.com'];
let details = {
    from: "boazkhalifa@gmail.com",
    to: receivers,
    subject: "test subject",
    text: "test nodemailer", // Note the typo fix here: change "Text" to "text"
};

mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log("it has an error in sending email", err);
    } else {
        console.log("email sent successfully");
    }
});
