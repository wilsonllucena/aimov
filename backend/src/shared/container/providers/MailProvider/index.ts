import { container } from 'tsyringe';
import mailConfig from '../../../../config/mail';

import IMailProvider from './models/IMailProvider';

import GmailMailProvider from './implementations/GmailMailProvider';

const providers = {
  gmail: container.resolve(GmailMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);