import nodemailer from "nodemailer";
import winston from "winston";
import { sendMailProps } from "../types";
import fs from "fs/promises";
import "dotenv/config"

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

async function getEmailTemplate(props: sendMailProps) {
  let template = await fs.readFile("@/templates/emailTemplate.html", "utf-8");

  // Replace placeholders
  template = template
    .replace("{{name}}", props.name)
    .replace("{{email}}", props.email)
    .replace("{{subject}}", props.subject)
    .replace("{{message}}", props.message);

  return template;
}

export async function sendMail(props: sendMailProps) {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const template = await getEmailTemplate(props);

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: props.subject,
    html: template,
  };

  console.log("SENDING MAIL: ", mailOptions);

  logger.info("Sending message");
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(error);
      throw new Error(error.message);
    } else {
      logger.info("Email sent: " + info.response);
    }
  });
}
