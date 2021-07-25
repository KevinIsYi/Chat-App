import React, { createContext, useContext } from "react";
import { useUsers } from "../../hooks/useUsers";
import { User } from '../../interfaces/interfaces';
import { AuthContext } from "../auth/AuthContext";

interface UserContextProps {
    users: User[];
    updateUsersState: () => void
}

export const UsersContext = createContext({} as UserContextProps);

export const UsersProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    
    const { authState: { token } } = useContext(AuthContext);
    const { users, updateUsersState } = useUsers(token);

    return (
        <UsersContext.Provider
            value={{
                users,
                updateUsersState
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}