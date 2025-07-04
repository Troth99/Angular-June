import { UserInterface } from "./user.model";


export interface PostsInterface {
    _id: string;
    text: string;
    userId: UserInterface;
    themeId: string;
    created_at: Date;
    updatedAt: Date
}