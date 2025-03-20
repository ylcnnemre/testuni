const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

/* xnxs rxqc pdgd xewt */

app.use(express.json());
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jsftrx@gmail.com",
        pass: "xnxsrxqcpdgdxewt",
    },
});

let mailOptions = {
    from: "jsftrx@gmail.com",
    to: "yalcnnemre@gmail.com",
    subject: "Test Email",
    html: "<h1>Hello</h1>",
};

app.get("/test", (req, res) => {
    res.json({
        msg: "selam"
    })
});

app.get("/version", (req, res) => {
    res.json({
        version: "1.0.0"
    })
});

/* transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
 */

app.listen(7000, () => {
    console.log("Server is running on port 3000");
});

