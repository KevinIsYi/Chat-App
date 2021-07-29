import { Message, User } from '../../interfaces/interfaces';
import { MessageInterface } from "./MessagesContext"

export type MessageAction =
    |
    {
        type: 'loadContactInfo',
        payload: {
            contact: User;
            messages: Message[];
        }
    }
    |
    {
        type: 'newMessage';
        payload: Message;
    }
    |
    {
        type: 'updateStatus';
        payload: string;
    }

export const messagesReducer = (state: MessageInterface, action: MessageAction): MessageInterface => {
    switch (action.type) {
        case 'loadContactInfo': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'newMessage': {
            const { payload } = action;
            const { from, to } = payload;

            if (from === state.contact.uid || to === state.contact.uid) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            }

            return state;
        }
        case 'updateStatus': {
            return {
                ...state,
                contact: {
                    ...state.contact,
                    userStatus: action.payload
                }
            }
        }
        default:
            return state;
    }
}
