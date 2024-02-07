import { Model } from '@burand/angular';
import { UserType } from '../enums/user-type';

export interface User extends Model {
  name: string;
  email: string;
  role: UserType;
  lastAccess: Date | null;
}
