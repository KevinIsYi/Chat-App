import { createContext, useReducer } from "react";
import { User } from "../../interfaces/interfaces";
import { authReducer } from "./authReducer";

export interface AuthInterface {
    isLoggedIn: boolean;
    token: string;
    user: User;
};

export const authInitialState: AuthInterface = {
    isLoggedIn: false,
    token: '',
    user: {
        online: false,
        uid: '',
        userName: '',
        userStatus: ''
    }
};

export interface AuthContextProps {
    authState: AuthInterface;
    changeStatus: (newStatus: string) => void;
    signIn: (params: User, token: string) => void;
    logOut: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const changeStatus = (newStatus: string) => {
        dispatch({
            type: 'changeDescription',
            payload: newStatus
        });
    };
    
    const signIn = (params: User, token: string) => {
        dispatch({
            type: 'signIn',
            payload: {
                ...params,
                token
            }
        });
    }

    const logOut = () => {
        dispatch({
            type: 'logOut'
        });
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                changeStatus,
                logOut,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}