import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const html = fs.readFileSync(
  path.join(__dirname, process.env.HTML_PATH || ''),
  'utf-8'
);

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

const main = async () => {
  // send mail with defined transport object
  const response = await transporter.sendMail({
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Test email 123",
    html 
  });
}

main();