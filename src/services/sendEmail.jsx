import nodemailer from "nodemailer";
import "dotenv/config";

const { EMAIL_FROM, EMAIL_PASSWORD } = import.meta.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const email = { ...data, from: EMAIL_FROM };
  return transport.sendMail(email);
};

export { sendEmail };
