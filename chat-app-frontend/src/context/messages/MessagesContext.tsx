import { createContext, useCallback, useState } from 'react';

interface MessageInterface {
    activeChatUid: string | null;
    messages: []
}

interface MessagesProps {
    messagesState: MessageInterface;
    updateMessages: () => void;
}


export const MessagesContext = createContext({} as MessagesProps);

export const MessagesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const initialState: MessageInterface = {
        activeChatUid: null,
        messages: []
    }
    
    const [messagesState, setMessagesState] = useState<MessageInterface>(initialState);

    const updateMessages = useCallback(() => {
        
    }, []);

    return (
        <MessagesContext.Provider
            value={{
                messagesState,
                updateMessages
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}