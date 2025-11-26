export type UserType = 'customer' | 'confectioner';

export interface User {
  id: number;
  name: string;
  type: UserType;
}

export interface Confectioner {
  id: number;
  name: string;
  description: string;
  specialty: string;
  avatar: string;
  phone: string;
  email: string;
}
