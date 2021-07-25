import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';

interface SocketContextProps {
    socket: Socket | undefined;
    online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

export const SocketProvider = ({ children }: { children: React.FC }): JSX.Element => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http//localhost:8000');

    useEffect(() => {
        socket?.on('one-to-one-message', (message) => {
            console.log(message);
            
        });
    }, [socket]);

    useEffect(() => {
        socket?.on('user-connected', (userId) => {
            console.log(userId);
            
        });
    }, [socket]);

    useEffect(() => {
        connectSocket();
        return () => {
            disconnectSocket();
        }
    }, [])

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