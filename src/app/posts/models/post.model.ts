import { User } from 'src/app/shared/models/user.model';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  user?: User;
}
