import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "8e1452001@smtp-brevo.com", // your MailTrap username
    pass: "hgVvnbL4AqE8fKmd" // your MailTrap password
    }

});

export default transporter;

