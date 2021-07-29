import { useContext } from 'react';
import { createContext, useCallback, useReducer } from 'react';
import { Message, User } from '../../interfaces/interfaces';
import { MessageAction, messagesReducer } from './messagesReducer';
import { AuthContext } from '../auth/AuthContext';
import { messagesFetch } from '../../api/messages';
import React from 'react';
import { scrollToBottom, scrollToBottomAnimated } from '../../helpers/scrollToBottom';
import { getUserById } from '../../api/user';

export interface MessageInterface {
    contact: User;
    messages: Message[];
}

interface MessagesProps {
    messagesState: MessageInterface;
    dispatch: React.Dispatch<MessageAction>;
    loadNewMessage: (newMessage: Message) => void;
    changeActiveChatUID: (newUID: string) => void;
    updateCurrentStatus: (activeUID: string, uid: string, newStatus: string) => void;
    updateOnlineStatus: (uid: string, online: boolean) => void;
}

const initialState: MessageInterface = {
    contact: {
        uid: '',
        online: false,
        userName: '',
        userStatus: '',
        isPinned: false,
    },
    messages: [],
};

export const MessagesContext = createContext({} as MessagesProps);

export const MessagesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const [messagesState, dispatch] = useReducer(messagesReducer, initialState);
    const { authState: { token, user: { uid } } } = useContext(AuthContext);

    const changeActiveChatUID = useCallback(async (newUID: string) => {

        const userRequest = getUserById(newUID, token);
        const message = messagesFetch(uid, newUID, token);

        const [userInfo, messages] = await Promise.all([
            userRequest,
            message
        ]);

        const { user } = userInfo;

        if (user) {
            dispatch({
                type: 'loadContactInfo',
                payload: {
                    contact: user,
                    messages
                }
            });
        }

        scrollToBottom();

    }, [token, uid]);

    const loadNewMessage = useCallback((newMessage: Message) => {
        dispatch({
            type: 'newMessage',
            payload: newMessage
        });

        scrollToBottomAnimated();

    }, []);

    const updateCurrentStatus = useCallback((activeUID: string, uid: string, newStatus: string) => {
        if (uid === activeUID) {
            dispatch({
                type: 'updateStatus',
                payload: newStatus
            });
        }
    }, [dispatch]);

    const updateOnlineStatus = useCallback((uid: string, online: boolean) => {
        dispatch({
            type: 'userToggleOnline',
            payload: {
                uid,
                online
            }
        });
    }, []);

    return (
        <MessagesContext.Provider
            value={{
                messagesState,
                dispatch,
                loadNewMessage,
                changeActiveChatUID,
                updateCurrentStatus,
                updateOnlineStatus
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}