import { useContext } from 'react';
import { useEffect } from 'react';
import { createContext, useCallback, useState } from 'react';
import { SocketContext } from '../SocketContext';

interface MessageInterface {
    activeChatUid: string | null;
    messages: []
}

interface MessagesProps {
    messagesState: MessageInterface;
    changeActiveChatUID: (newUID: string) => void;
}


export const MessagesContext = createContext({} as MessagesProps);

export const MessagesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const { socket } = useContext(SocketContext);

    const [messagesState, setMessagesState] = useState<MessageInterface>({
        activeChatUid: null,
        messages: []
    });

    const loadMessages = async (newUID: string) => {
        setMessagesState({
            activeChatUid: newUID,
            messages: []
        });
    }

    const changeActiveChatUID = useCallback((newUID: string) => {
        loadMessages(newUID);
    }, []);

    useEffect(() => {
        socket?.on('one-to-one-message', (payload) => {
            console.log(payload);

        })
    }, [socket]);

    console.log("Sí");


    return (
        <MessagesContext.Provider
            value={{
                messagesState,
                changeActiveChatUID
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}