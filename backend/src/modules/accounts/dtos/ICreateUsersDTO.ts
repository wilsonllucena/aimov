export interface ICreateUsersDTO {
  id?: string;
  name: string;
  full_name: string;
  document: string;
  email: string;
  cep?: string;
  address: string;
  address_complenet?: string;
  password?: string;
  is_admin?: boolean;
  active?: boolean;
  avatar?: string
}
