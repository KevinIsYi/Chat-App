import { Message, User } from '../../interfaces/interfaces';
import { MessageInterface } from "./MessagesContext"

export type MessageAction =
    | {
        type: 'loadContactInfo',
        payload: {
            contact: User,
            messages: Message[]
        }
    }
    | {
        type: 'newMessage',
        payload: Message
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
            console.log("Llegué con esto: ", action.payload);
            
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        default:
            return state;
    }
}
