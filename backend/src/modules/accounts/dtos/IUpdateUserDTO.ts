export interface IUpdateUserDTO {
  user_id: string;
  name?: string;
  full_name?: string;
  document?: string;
  email?: string;
  cep?: string;
  address?: string;
  address_complement?: string;
  password?: string;
  old_password?: string;
  is_admin?: boolean;
  active?: boolean;
  avatar?: string
}
