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
  console.log(data);
  const email = { ...data, from: EMAIL_FROM };
  console.log(email);
  return transport.sendMail(email);
};

export { sendEmail };
