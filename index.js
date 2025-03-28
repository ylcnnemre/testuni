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
        pass: "xnxs rxqc pdgd xewt",
    },
});

let mailOptions = {
    from: "jsftrx@gmail.com",
    to: "codefayt@gmail.com",
    subject: "GİF TEST",
    html: `
<!DOCTYPE html>
<html lang="en">
<!-- DONE -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account - Unisyn</title>
    <style type="text/css">
        /* Reset styles */
        body, html {
            margin: 0;
            padding: 0;
            width: 100% !important;
        }
        
        /* Responsive styles */
        @media only screen and (max-width: 650px) {
            .main-table {
                width: 100% !important;
            }
            
            .content-cell {
                padding: 20px 15px !important;
            }
            
            .banner-cell {
                padding: 20px 15px !important;
            }
            
            .banner-image {
                width: 100px !important;
                height: 100px !important;
            }
            
            .mobile-stack {
                display: block !important;
                width: 100% !important;
            }
            
            .mobile-center {
                text-align: center !important;
            }
            
            h1 {
                font-size: 28px !important;
            }
            
            .features-table td {
                display: block !important;
                width: 100% !important;
                padding: 10px 0 !important;
            }
            
            .feature-icon {
                margin: 0 auto !important;
                display: block !important;
            }
            
            .feature-text {
                text-align: center !important;
            }
            
            .feature-wrapper {
                width: 100% !important;
            }
            
            .feature-column {
                width: 100% !important;
                display: block !important;
                padding-bottom: 15px !important;
            }
            
            .button-link {
                font-size: 24px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #EDEDF4;padding: 20px 0;">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="650" class="main-table" style="background-color: white;">
                    <!-- Header -->
                    <tr>
                        <td class="content-cell" style="padding: 12px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td valign="middle" style="vertical-align: middle; height: 40px;" class="mobile-center">
                                        <img src="https://test.kodafor.com/logo.png" alt="Unisyn"
                                            style="height: 30px; display: block; max-width: 100%;">
                                    </td>
                                    <td align="right" valign="middle" style="vertical-align: middle; height: 40px;" class="mobile-center">
                                        <a href="https://www.unisyn.app"
                                            style="color: #0066CC; text-decoration: none;">www.unisyn.app</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Blue Banner -->
                    <tr>
                        <td class="banner-cell" style="background-color: #0066CC; padding: 30px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td width="60%" class="mobile-stack mobile-center">
                                        <h1 style="margin: 0; font-size: 35px; color: white; line-height: 1.2;">Create
                                            An Account<br>With Us!</h1>
                                    </td>
                                    <td width="40%" align="right" class="mobile-stack mobile-center">
                                        <img src="../public/CreateAccount.gif" alt="Account Icon"
                                            style="width: 150px; height: 150px;" class="banner-image">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td class="content-cell" style="padding: 30px;padding-bottom: 20px;">
                            <p
                                style="color: black; margin-top: 0; margin-bottom: 10px; font-size: 18px;line-height: 24px;">
                                You are invited to our platform! Please click on the button below to create an account
                                and get started today.</p>

                            <!-- Create Account Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <table cellpadding="0" cellspacing="0" border="0"
                                            style="background-color: #F0F3FF; width: 100%; border-radius: 8px;">
                                            <tr>
                                                <td align="center" style="padding: 15px;">
                                                    <a href="#" class="button-link"
                                                        style="font-size: 30px; color: #0066CC; text-decoration: none; font-weight: 800;">Create
                                                        Account</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <p style="color: black;margin-top: 0;">If you have any questions, please reply to this
                                email.</p>
                            <p style="margin-top: 20px; font-weight: bold;">
                                Cheers,<br>
                                The Unisyn Team
                            </p>
                        </td>
                    </tr>

                    <!-- Features Section -->
                    <tr>
                        <td style="padding-top: 20px; border-top: 1px solid #D3D4DB;">
                            <table style="background-color: #E6EBFF; padding: 30px 20px;" width="100%" cellpadding="0"
                                cellspacing="0" border="0" class="features-table">
                                <tr>
                                    <td width="200" valign="middle" class="mobile-stack"
                                        style="padding-right: 15px; padding-left: 10px; vertical-align: middle;">
                                        <p style="margin: 0; font-weight: 500; font-size: 18px; line-height: 1.3;" class="mobile-center">
                                            Find
                                            More About Our<br>Features
                                            <span style="font-weight: bold;">
                                                & More
                                            </span>
                                        </p>
                                    </td>
                                    <td class="mobile-stack">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" class="feature-wrapper">
                                            <tr>
                                                <td width="50%" style="padding: 0 0 15px 0;" class="feature-column">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="middle" class="mobile-center"
                                                                style="padding-right: 10px; vertical-align: middle;">
                                                                <img src="https://test.kodafor.com/frame_4.png"
                                                                    alt="Core Platform" class="feature-icon"
                                                                    style="width: 40px; height: 40px; padding: 8px; background-color: white;border-radius: 50%; display: block;">
                                                            </td>
                                                            <td valign="middle" style="vertical-align: middle;" class="feature-text">
                                                                <p
                                                                    style="margin: 0; font-weight: 500; font-size: 14px; line-height: 1.3;">
                                                                    Core Platform<br>Capabilities</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="50%" style="padding: 0 0 15px 0;" class="feature-column">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="middle" class="mobile-center"
                                                                style="padding-right: 10px; vertical-align: middle;">
                                                                <img src="https://test.kodafor.com/frame_2x.png"
                                                                    alt="SafeForms" class="feature-icon"
                                                                    style="width: 40px; height: 40px; padding: 8px; background-color: white;border-radius: 50%; display: block;">
                                                            </td>
                                                            <td valign="middle" style="vertical-align: middle;" class="feature-text">
                                                                <p
                                                                    style="margin: 0; font-weight: 500; font-size: 14px; line-height: 1.3;">
                                                                    SafeForms™<br>Builder</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="50%" style="padding: 0;" class="feature-column">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="middle" class="mobile-center"
                                                                style="padding-right: 10px; vertical-align: middle;">
                                                                <img src="https://test.kodafor.com/framex.png"
                                                                    alt="RiskVision AI" class="feature-icon"
                                                                    style="width: 40px; height: 40px; padding: 8px; background-color: white; border-radius: 50%; display: block;">
                                                            </td>
                                                            <td valign="middle" style="vertical-align: middle;" class="feature-text">
                                                                <p
                                                                    style="margin: 0; font-weight: 500; font-size: 14px; line-height: 1.3;">
                                                                    RiskVision AI™</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="50%" style="padding: 0;" class="feature-column">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="middle" class="mobile-center"
                                                                style="padding-right: 10px; vertical-align: middle;">
                                                                <img src="https://test.kodafor.com/frame_4.png"
                                                                    alt="DocEasy" class="feature-icon"
                                                                    style="width: 40px; height: 40px; padding: 8px; background-color: white; border-radius: 50%; display: block;">
                                                            </td>
                                                            <td valign="middle" style="vertical-align: middle;" class="feature-text">
                                                                <p
                                                                    style="margin: 0; font-weight: 500; font-size: 14px; line-height: 1.3;">
                                                                    DocEasy™ AI<br>Parser</p>
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

                    <!-- Footer -->
                    <tr>
                        <td class="content-cell" style="padding: 0 30px; border-bottom: 1px solid #D3D4DB;">
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
                        <td class="content-cell" style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td class="mobile-center">
                                        <p style="margin: 0;">2024 - Unisyn Technologies LLC. All Rights Reserved.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                            style="margin-top: 20px;">
                                            <tr>
                                                <td class="mobile-center">
                                                    <img src="https://test.kodafor.com/filelock.png" alt="FileLocker"
                                                        style="height: 20px;">
                                                </td>
                                                <td align="right" class="mobile-center">
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
        msg: "test endpoint"
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

