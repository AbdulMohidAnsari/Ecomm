const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
dotenv.config()

let transporter = nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:false,//true for 465,false for other ports
    auth:{
        user:process.env.EMAIL_USER,//ADMIN GMAIL ID
        pass:process.env.EMAIL_PASS//ADMIN GMAIL PASSWORD
    }
})

module.exports = transporter