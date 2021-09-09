export interface UserInterface {
  email: string;
  password: string;
  name?: string;
  banned?: boolean;
  banReason?: string;
}
