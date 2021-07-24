import { Auth } from "../interfaces/interfaces";
import chatDB from "./config";

export const logIn = async (userName: string, userPassword: string): Promise<Auth> => {
    const { data } = await chatDB.post<Auth>('/auth/', {
        data: {
            userName,
            password: userPassword
        }
    });

    return data;
}
