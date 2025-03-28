const express = require("express");
const nodemailer = require("nodemailer");
const app = express();



app.use(express.json());
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jsftrx@gmail.com",
        pass: "",
    },
});

let mailOptions = {
    from: "jsftrx@gmail.com",
    to: "",
    subject: "Welcome success gif",
    html: `
<!DOCTYPE html>
<html lang="en">
<!-- DONE-->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unisyn Email Template</title>
    <style type="text/css">
        /* Reset styles */
        body,
        html {
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

            .quick-links-table td {
                display: block !important;
                width: 100% !important;
            }

            .mobile-stack {
                display: block !important;
                width: 100% !important;
            }

            .mobile-center {
                text-align: center !important;
                margin-top: 15px !important;
            }

            h1 {
                font-size: 24px !important;
            }

            h2 {
                font-size: 16px !important;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #EDEDF4; padding: 20px 0; ">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="650" class="main-table"
                    style="background-color: white;">
                    <!-- Header -->
                    <tr>
                        <td class="content-cell" style="padding: 12px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td valign="middle" style="vertical-align: middle; height: 40px;"
                                        class="mobile-center">
                                        <img src="https://test.kodafor.com/logo.png" alt="Unisyn"
                                            style="height: 30px; display: block; max-width: 100%;">
                                    </td>
                                    <td align="right" valign="middle" style="vertical-align: middle; height: 40px;"
                                        class="mobile-center">
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
                                        <h1 style="margin: 0; font-size: 30px; color: white;">
                                            Two-Step Authentication Enabled!
                                        </h1>
                                    </td>
                                    <td width="40%" align="right" class="mobile-stack mobile-center">
                                        <img src="https://test.kodafor.com/rubic_cube.gif" alt="Security Icon"
                                            style="width: 150px; height: 150px;" class="banner-image">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td class="content-cell" style="padding: 30px;">
                            <!-- <h2 style="color: #333; margin-top: 0; font-size: 18px;">Let's Follow The Steps!</h2> -->
                            <p style="color: black; font-size: 17px;">
                                When logging into Unisyn, you will need to enter a code generated by your aunthenticator
                                app in addition to entering your usual email address and password.
                            </p>

                            <p style="color: black;">If you have any questions, please reply to this email.</p>
                            <p style="margin-top: 20px; font-weight: bold;">
                                Cheers,<br>
                                The Unisyn Team
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td class="content-cell" style="border-top: 1px solid #D3D4DB;padding-top: 20px; padding: 20px 30px;">
                            <div >
                                <table width="100%" cellpadding="0" cellspacing="5" border="0">
                                    <tr>
                                        <td style="color: #333; font-size: 16px; padding-bottom: 5px;">
                                            <strong>Platform:</strong> Chrome browser on MacOS device
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333; font-size: 16px; padding-bottom: 5px;">
                                            <strong>Device Location:</strong> Toronto, Ontario, Canada (184.145.102.190)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="color: #333; font-size: 16px; padding-bottom: 5px;">
                                            <strong>Time:</strong> March 27, 2025 at 5:20:45 AM EDT
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Quick Links Section -->
                    <tr>
                        <td style="">
                            <div style="border-top: 1px solid #D3D4DB;">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEF1FF"
                                    style="margin: 20px 0px 0px 0px; ">
                                    <tr style="text-align: left;">
                                        <td class="content-cell"
                                            style="padding: 30px; padding-left: 50px; padding-bottom: 25px;">
                                            <h3 style="margin-top: 0; color: #333;">Quick Links For You</h3>
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                                class="quick-links-table">
                                                <tr>
                                                    <td width="50%" valign="top" class="mobile-stack">
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
                                                    </td>

                                                    <td width="50%" valign="top" class="mobile-stack">
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

