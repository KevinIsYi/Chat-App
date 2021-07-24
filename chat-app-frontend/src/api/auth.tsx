import { Auth } from "../interfaces/interfaces";
import chatDB from "./config";

export const authFetch = async (
    userName: string,
    userPassword: string,
    endpoint: '/auth' | '/auth/new'
): Promise<Auth> => {

    try {
        const { data } = await chatDB.post<Auth>(endpoint, {
            data: {
                userName,
                password: userPassword
            }
        });

        return data;
    } catch (error) {
        const { response: { data: { message } } } = error;

        return {
            ok: false,
            message: message,
            data: {
                token: '',
                user: {
                    online: false,
                    uid: '',
                    userName: '',
                    userStatus: ''
                }
            }
        }
    }
}
