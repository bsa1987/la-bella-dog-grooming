import { Resend } from 'resend';
import Appointment from '../models/Appointment.js';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function createAppointment(req, res, next) {
    try {
        const { name, phone, email, dogName, breed, service, preferredDate, notes } = req.body;
        if (!name || !phone || !email || !dogName || !breed || !service || !preferredDate) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // Save to MongoDB
        const appointment = await Appointment.create({
            name,
            phone,
            email,
            dogName,
            breed,
            service,
            preferredDate,
            notes: notes || '',
        });
        const ownerEmail = process.env.OWNER_EMAIL || 'labelladoggrooming@gmail.com';
        // Send notification to owner (Reply-To = customer email so owner can reply directly)
        await resend.emails.send({
            from: 'La Bella Dog Grooming <onboarding@resend.dev>',
            to: [ownerEmail],
            replyTo: email,
            subject: `New Appointment Request – ${dogName} (${name})`,
            html: `
        <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#2d2d2d;">
          <div style="background:#f9e8e8;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="margin:0;color:#8b4a4a;font-size:22px;">New Appointment Request</h1>
            <p style="margin:6px 0 0;color:#b05c73;font-size:14px;">La Bella Dog Grooming, Swansea</p>
          </div>
          <div style="background:#fff;padding:28px 32px;border:1px solid #f0d9d9;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#888;width:140px;">Name</td><td style="padding:8px 0;font-weight:500;">${name}</td></tr>
              <tr style="background:#fdf6f6;"><td style="padding:8px 4px;color:#888;">Phone</td><td style="padding:8px 4px;font-weight:500;">${phone}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;font-weight:500;">${email}</td></tr>
              <tr style="background:#fdf6f6;"><td style="padding:8px 4px;color:#888;">Dog's Name</td><td style="padding:8px 4px;font-weight:500;">${dogName}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Breed</td><td style="padding:8px 0;font-weight:500;">${breed}</td></tr>
              <tr style="background:#fdf6f6;"><td style="padding:8px 4px;color:#888;">Service</td><td style="padding:8px 4px;font-weight:500;">${service}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Preferred Date</td><td style="padding:8px 0;font-weight:500;">${preferredDate}</td></tr>
              ${notes ? `<tr style="background:#fdf6f6;"><td style="padding:8px 4px;color:#888;">Notes</td><td style="padding:8px 4px;">${notes}</td></tr>` : ''}
            </table>
            <div style="margin-top:20px;background:#fdf6f6;border-left:3px solid #c4768a;padding:12px 16px;border-radius:0 6px 6px 0;font-size:13px;color:#6b3a3a;">
              Simply hit <strong>Reply</strong> to respond directly to ${name}.
            </div>
          </div>
        </div>
      `,
        });
        // Send confirmation to customer
        await resend.emails.send({
            from: 'La Bella Dog Grooming <onboarding@resend.dev>',
            to: [email],
            subject: `We've received your request for ${dogName}!`,
            html: `
        <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#2d2d2d;">
          <div style="background:#f9e8e8;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="margin:0;color:#8b4a4a;font-size:22px;">Thank You, ${name}!</h1>
            <p style="margin:6px 0 0;color:#b05c73;font-size:14px;">La Bella Dog Grooming, Swansea</p>
          </div>
          <div style="background:#fff;padding:28px 32px;border:1px solid #f0d9d9;border-top:none;border-radius:0 0 12px 12px;">
            <p style="font-size:15px;line-height:1.6;">We've received your grooming request for <strong>${dogName}</strong> and will be in touch shortly to confirm your appointment.</p>
            <div style="background:#fdf6f6;border-radius:8px;padding:16px 20px;margin:20px 0;">
              <p style="margin:0 0 10px;font-weight:600;color:#8b4a4a;font-size:14px;">Your Booking Summary</p>
              <p style="margin:4px 0;font-size:14px;"><strong>Service:</strong> ${service}</p>
              <p style="margin:4px 0;font-size:14px;"><strong>Preferred Date:</strong> ${preferredDate}</p>
            </div>
            <p style="font-size:14px;color:#555;">Any questions? Call us on <a href="tel:07912345678" style="color:#c4768a;font-weight:600;">07912 345678</a></p>
            <p style="font-size:14px;color:#c4768a;font-style:italic;margin-top:24px;">With love,<br/>The La Bella Team</p>
          </div>
        </div>
      `,
        });
        res.status(201).json({ success: true, id: appointment._id });
    }
    catch (err) {
        next(err);
    }
}
