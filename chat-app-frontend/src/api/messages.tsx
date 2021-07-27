import { Message, Messages } from '../interfaces/interfaces';
import chatDB from './config';
export const messagesFetch = async (
    from: string,
    to: string,
    token: string
): Promise<Message[]> => {
    try {
        const { data } = await chatDB.get<Messages>(
            'http://localhost:8000/messages',
            {
                headers: {
                    'x-token': token
                },
                params: {
                    from,
                    to
                }
            }
        )
        return data.messages;

    } catch (error) {
        return [];
    }
}