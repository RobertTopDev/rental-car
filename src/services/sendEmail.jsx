// import nodemailer from "nodemailer";

const { VITE_EMAIL_FROM, VITE_EMAIL_PASSWORD } = import.meta.env;

// const nodemailerConfig = {
//   service: "gmail",
//   host: "smtp.gmail.com",
//   post: 587,
//   auth: {
//     user: VITE_EMAIL_FROM,
//     pass: VITE_EMAIL_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  console.log(data);
  const email = { ...data, from: VITE_EMAIL_FROM };
  console.log(email);
  // return transport.sendMail(email);
};

export { sendEmail };
