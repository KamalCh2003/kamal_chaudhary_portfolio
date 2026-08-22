import { prisma } from '../config/database.js';
import { contactSchema } from '../utils/validation.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMessage = async (req, res, next) => {
  try {
    const { error, value } = contactSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Save to DB
    const message = await prisma.message.create({ data: value });

    // Send email notification
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${value.name}`,
      html: `<p><strong>Name:</strong> ${value.name}</p>
             <p><strong>Email:</strong> ${value.email}</p>
             <p><strong>Message:</strong><br/>${value.message}</p>`,
    });

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) { next(err); }
};