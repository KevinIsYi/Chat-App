import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { loginWithToken } from "../../api/auth";
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
        userStatus: '',
        isPinned: false
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

        localStorage.setItem('token', token);
    }

    const logOut = () => {

        localStorage.removeItem('token');

        dispatch({
            type: 'logOut'
        });
    };

    useEffect(() => {
        const tokenLogin = async () => {
            const token = localStorage.getItem('token');
            
            if (token) {
                const { user } = await loginWithToken(token);

                if (user) {
                    dispatch({
                        type: 'signIn',
                        payload: {
                            ...user,
                            token
                        },
                    });
                }
            }
        }

        tokenLogin();

    }, []);

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