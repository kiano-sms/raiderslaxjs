import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendSubmissionEmail(submission) {
  const to = process.env.SUBMISSIONS_TO || process.env.GMAIL_USER;

  await transporter.sendMail({
    from: `"Raiders Lacrosse Academy" <${process.env.GMAIL_USER}>`,
    to,
    replyTo: submission.email,
    subject: `New Join Submission: ${submission.firstName} ${submission.lastName}`,
    text: [
      `Name: ${submission.firstName} ${submission.lastName}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Age: ${submission.age}`,
      `Position: ${submission.position}`,
      `Institution: ${submission.institution}`,
      `Experience: ${submission.experience || "-"}`,
      `Message: ${submission.message || "-"}`,
      `Submitted At: ${submission.submittedAt}`,
    ].join("\n"),
  });
}
