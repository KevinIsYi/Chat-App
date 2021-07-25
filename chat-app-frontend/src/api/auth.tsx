import { Auth } from "../interfaces/interfaces";
import chatDB from "./config";

export const authFetch = async (
    userName: string,
    userPassword: string,
    endpoint: '/auth' | '/auth/new'
): Promise<Auth> => {
    try {
        const { data } = await chatDB.post<Auth>(
            endpoint,
            {
                userName,
                password: userPassword
            }
        );

        return data;
    } catch (error) {
        const { response } = error;
        const message = response ? response.data.message : 'An error has occured. Talk with an admin';

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
