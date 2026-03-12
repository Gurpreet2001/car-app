import { Roles } from "../enums/role.enum";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: Roles;
}
