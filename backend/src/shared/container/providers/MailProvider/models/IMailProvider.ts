import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface ImailProvider {
  sendEmail(data: ISendMailDTO): Promise<void>;
}