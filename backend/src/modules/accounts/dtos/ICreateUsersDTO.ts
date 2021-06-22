export interface ICreateUsersDTO {
  id?: string;
  name: string;
  full_name: string;
  document: string;
  email: string;
  address: string;
  password?: string;
  is_admin?: boolean;
  active?: boolean;
  avatar?: string
}
