import { useContext } from 'react';
import { createContext, useCallback, useReducer } from 'react';
import { Message } from '../../interfaces/interfaces';
import { MessageAction, messagesReducer } from './messagesReducer';
import { AuthContext } from '../auth/AuthContext';
import { messagesFetch } from '../../api/messages';
import React from 'react';
import { scrollToBottom, scrollToBottomAnimated } from '../../helpers/scrollToBottom';

export interface MessageInterface {
    activeChatUid: string | null;
    messages: Message[]
}

interface MessagesProps {
    messagesState: MessageInterface;
    dispatch: React.Dispatch<MessageAction>;
    loadNewMessage: (newMessage: Message) => void;
    changeActiveChatUID: (newUID: string) => void;
}

const initialState: MessageInterface = {
    activeChatUid: null,
    messages: []
}

export const MessagesContext = createContext({} as MessagesProps);

export const MessagesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const [messagesState, dispatch] = useReducer(messagesReducer, initialState);
    const { authState: { token, user: { uid } } } = useContext(AuthContext);

    const changeActiveChatUID = useCallback(async (newUID: string) => {
        const messages = await messagesFetch(uid, newUID, token);

        dispatch({
            type: 'loadMessages',
            payload: {
                uid: newUID,
                messages
            }
        });

        scrollToBottom();

    }, [token, uid]);

    const loadNewMessage = useCallback((newMessage: Message) => {
        dispatch({
            type: 'newMessage',
            payload: newMessage
        });

        scrollToBottomAnimated();
    }, []);

    return (
        <MessagesContext.Provider
            value={{
                messagesState,
                dispatch,
                loadNewMessage,
                changeActiveChatUID
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}