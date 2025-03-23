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
    html: `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unisyn Email Template</title>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #EDEDF4; padding: 20px 0; ">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="650" style="background-color: white;">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 12px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td valign="middle" style="vertical-align: middle; height: 40px;">
                                        <img src="https://test.kodafor.com/logo.png" alt="Unisyn"
                                            style="height: 30px; display: block;">
                                    </td>
                                    <td align="right" valign="middle" style="vertical-align: middle; height: 40px;">
                                        <a href="https://www.unisyn.app"
                                            style="color: #0066CC; text-decoration: none;">www.unisyn.app</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Blue Banner -->
                    <tr>
                        <td style="background-color: #0066CC; padding: 30px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td width="60%">
                                        <h1 style="margin: 0; font-size: 35px; color: white;">Action Required</h1>
                                    </td>
                                    <td width="40%" align="right">
                                        <img src="https://test.kodafor.com/cyber1.png" alt="Security Icon"
                                            style="width: 150px; height: 150px;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 30px;">
                            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Lorem Ipsum Dolor Sit Amet</h2>
                            <p style="color: black;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
                                sapien tristique eros porta sodales.</p>
                            <p style="color: black;">If you have any questions, please reply to this email.</p>
                            <p style="margin-top: 20px; font-weight: bold;">
                                Cheers,<br>
                                The Unisyn Team
                            </p>
                        </td>
                    </tr>

                    <!-- Quick Links Section -->
                    <tr>
                        <td style="">
                            <div style="border-top: 1px solid #D3D4DB;">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEF1FF"
                                    style="margin: 20px 0px 0px 0px; ">
                                    <tr style="text-align: left;">
                                        <td style="padding: 30px; padding-left: 50px; padding-bottom: 25px;">
                                            <h3 style="margin-top: 0; color: #333;">Quick Links For You</h3>
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td width="50%" valign="top">
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/calendar-plus.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Calendar booking</span>
                                                        </a>
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/paperclip.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Secure File Uploads</span>
                                                        </a>
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/briefcase.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Demo Scheduling</span>
                                                        </a>

                                                    <td width="50%" valign="top">
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/list.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Application Forms</span>
                                                        </a>
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/cloud.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Secure File Uploads</span>
                                                        </a>
                                                        <a href="#"
                                                            style="color: black; text-decoration: none; display: block; margin-bottom: 10px;">
                                                            <img src="https://test.kodafor.com/compass.png" alt=""
                                                                style="height: 20px; vertical-align: middle; margin-right: 3px; display: inline-block;">
                                                            <span
                                                                style="display: inline-block; vertical-align: middle;">Go
                                                                to Onboarding AI</span>
                                                        </a>

                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 0 30px ;border-bottom: 1px solid #D3D4DB; ">
                            <div style="padding-top: 20px;">
                                <p style="color: black; font-size: 13px;">This email was intended for [ User Name ] at [
                                    User Email address ]. If you need assistance or have questions, please contact <a
                                        href="mailto:customerservice@unisyn.com"
                                        style="color: #0066CC; text-decoration: none;">customerservice@unisyn.com</a>
                                </p>
                                <p style="color: black; font-size: 13px;">You can visit our <a href="#"
                                        style="color: #0066CC; text-decoration: none;">Help Center</a> page for your
                                    questions or contact us through the <a href="#"
                                        style="color: #0066CC; text-decoration: none;">Contact Form</a>.</p>
                                <p style="color: black; font-size: 13px;">Address: 7251 w Lake Mead Blvd Suite 300 Las
                                    Vegas, NV 89128 Phone: <a href="tel:+17025949579"
                                        style="color: #0066CC; text-decoration: none;">+1-702-594-9579</a></p>
                            </div>
                        </td>
                    </tr>

                    <!-- Copyright and Social -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td>
                                        <p style="margin: 0;">2024 - Unisyn Technologies LLC. All Rights Reserved.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                            style="margin-top: 20px;">
                                            <tr>
                                                <td>
                                                    <img src="https://test.kodafor.com/filelock.png" alt="FileLocker"
                                                        style="height: 20px;">
                                                </td>
                                                <td align="right">
                                                    <a href="#" style="margin-left: 10px;"><img
                                                            src="https://test.kodafor.com/linkedin.png" alt="LinkedIn"
                                                            style="height: 25px;"></a>
                                                    <a href="#" style="margin-left: 10px;"><img
                                                            src="https://test.kodafor.com/insta.png" alt="Instagram"
                                                            style="height: 25px;"></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
    `,
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

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});


app.listen(4545, () => {
    console.log("Server is running on port 3000");
});

