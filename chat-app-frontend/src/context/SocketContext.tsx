import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from './auth/AuthContext';
import { MessagesContext } from './messages/MessagesContext';
import { UsersContext } from './users/UsersContext';

interface SocketContextProps {
    socket: Socket | undefined;
    online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

export const SocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const { authState: { token } } = useContext(AuthContext);
    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8000', token);
    const { messagesState: { contact: { uid } }, loadNewMessage, updateCurrentStatus } = useContext(MessagesContext);
    const { updateUsersConnections } = useContext(UsersContext);

    useEffect(() => {
        socket?.on('one-to-one-message', (message) => {
            loadNewMessage(message);
        });
    }, [socket, loadNewMessage]);

    useEffect(() => {
        socket?.on('user-change-online', (payload: { uid: string, online: boolean }) => {
            const { uid, online } = payload;
            updateUsersConnections(uid, online);
        });
    }, [socket, updateUsersConnections]);


    useEffect(() => {
        socket?.on('user-changed-status', (payload: { uid: string, newStatus: string }) => {
            const { uid: updatedBy, newStatus } = payload;
            
            updateCurrentStatus(uid, updatedBy, newStatus);
        });
    }, [socket, uid, updateCurrentStatus]);

    useEffect(() => {
        connectSocket();
    }, [connectSocket]);

    useEffect(() => {
        return () => disconnectSocket();
    }, [disconnectSocket]);

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