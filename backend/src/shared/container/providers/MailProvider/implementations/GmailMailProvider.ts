import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import ImailProvider from "../models/IMailProvider";
import ISendMailDTO from '../dtos/ISendMailDTO';

@injectable()
export default class GmailMailProvider implements ImailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'redeconnectcen@gmail.com',
        pass: 'connect2021'
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    this.client = transporter;
  }

  public async sendEmail({ to, from, subject, templateData }: ISendMailDTO): Promise<void> {

    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Nome do evento',
        address: from?.email || 'equipe@evento.com'
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData)
    });

    console.log('Email enviado para %s', to);
  }

}