import { Message } from '../../interfaces/interfaces';
import { MessageInterface } from "./MessagesContext"

export type MessageAction =
    | { type: 'loadMessages', payload: { uid: string, messages: Message[] } }
    | { type: 'newMessage', payload: Message }


export const messagesReducer = (state: MessageInterface, action: MessageAction): MessageInterface => {
    switch (action.type) {
        case 'loadMessages': {
            const { payload: { uid, messages } } = action;
            return {
                activeChatUid: uid,
                messages
            }
        }
        case 'newMessage': {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        default:
            return state;
    }
}
