import { Users } from '../interfaces/interfaces';
import chatDB from './config';

interface StatusResponseInterface {
    ok: boolean;
    message: string;
}

export const updateStatusFetch = async (uid: string, token: string, newStatus: string): Promise<StatusResponseInterface> => {
    try {

        const { data } = await chatDB.post<StatusResponseInterface>(
            '/user/change-status',
            {
                uid,
                userStatus: newStatus
            },
            {
                headers:
                {
                    'x-token': token
                }
            }
        );

        return data;

    } catch (error) {
        const { response } = error;
        const message = response ? response.data.message : 'An error has occurred';

        return {
            ok: false,
            message
        };
    }
}

export const getAllUsers = async (token: string): Promise<Users> => {
    try {
        const { data } = await chatDB.get<Users>(
            '/user/get-users',
            {
                headers: {
                    'x-token': token
                }
            }
        )
        return data;

    } catch (error) {
        const { response } = error;
        const message = response ? response.data.message : 'An error has occurred';

        return {
            ok: false,
            message,
            users: []
        }
    }
}