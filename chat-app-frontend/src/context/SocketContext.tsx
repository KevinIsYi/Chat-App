import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './auth/AuthContext';
import { MessagesContext } from './messages/MessagesContext';

interface SocketContextProps {
    socket: Socket | undefined;
    online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

export const SocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const { authState: { token } } = useContext(AuthContext);
    const { socket, online, connectSocket } = useSocket('http://localhost:8000', token);
    const { loadNewMessage } = useContext(MessagesContext);

    useEffect(() => {
        socket?.on('one-to-one-message', (message) => {
            loadNewMessage(message);           
        });
    }, [socket, loadNewMessage]);

    useEffect(() => {
        socket?.on('user-connected', (userId) => {
            

        });
    }, [socket]);
        
    useEffect(() => {
        connectSocket();
    }, [connectSocket]);

    return (
        <SocketContext.Provider
            value={{
                socket,
                online
            }}
        >
            {children}
        </SocketContext.Provider>
    )
}