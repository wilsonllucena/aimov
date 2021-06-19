
interface IMailConfig {
  driver: 'gmail';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}
export default {
  driver: 'gmail',
  defaults: {
    from: {
      email: 'redeconnectcen@gmail.com',
      name: 'Equipe de Jovens CONNET',
    },
  },
} as IMailConfig;