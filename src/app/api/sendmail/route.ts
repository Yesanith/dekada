import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        const { name, surname, email, subject, message } = await req.json();

        // Create reusable transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            host: "bulk.smtp.mailtrap.io", // Replace with your mail provider's settings
            port: 587,
            secure: false, // use TLS, not SSL
            auth: {
                user: "api", // your SMTP username
                pass: "73da91199a83a422ef35e3fea2f6364c", // your SMTP password
            },
        });

        // Send mail with defined transport object
        try {
            console.log("Sending email...");
            const info = await transporter.sendMail({
                from: "mailtrap@burritosdekadas.com", // sender address
                to: "burritosdekadasalsancak@gmail.com", // list of receivers
                subject: `"Siteden Bir Mesajınız var" <${subject}>`, // Subject line
                text: `İsim: ${name} ${surname}\nEposta: ${email}\nKonu: ${subject}\nMesaj: ${message}`, // plain text body
                html: `<b>İsim:</b> ${name} ${surname} <br><b>Email:</b> ${email}<br><b>Mesaj:</b> ${message}`, // HTML body content
            });

            console.log("Message sent: %s", info.messageId);
            return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
        } catch (error) {
            console.error("Error sending email: %s", error);
            return NextResponse.json({ error: "Error sending email" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
}
