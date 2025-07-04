import { PostsInterface } from "./posts.model";
import { UserInterface } from "./user.model";

export interface ThemeInterface {
  id: string;
  subscribers: string[]
  userId: UserInterface;
  themeName: string;
  posts: PostsInterface[];
  created_at: Date;
  updatedAt: Date;
}