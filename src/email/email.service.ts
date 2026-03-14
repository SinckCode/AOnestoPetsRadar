import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { envs } from 'src/config/envs';

@Injectable()
export class EmailService {
    //SMTP

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_PASSWORD
        }
    });
    //Prueba de trabajo!! -> Bitcoin
    async sendEmail() : Promise<Boolean>{
        try {
            await this.transporter.sendMail({
                to: "soyangeldavid1@gmail.com",
                subject: "Prueba de correo",
                html: "<h1>Prueba de correo</h1><p>Este es un correo de prueba.</p>"
            });
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
