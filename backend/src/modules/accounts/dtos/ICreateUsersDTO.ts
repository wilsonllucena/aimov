export interface ICreateUsersDTO {
  name: string;
  last_name: string;
  email: string;
  password?: string;
  is_admin?: boolean;
  active?: boolean;
  id?: string;
  avatar?: string
}
