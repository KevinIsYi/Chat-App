import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    userName: string;
    userStatus: string;
};

export const authInitialState: AuthState = {
    isLoggedIn: true,
    userName: 'Kevin Rodríguez',
    userStatus: 'Change me!'
};

export interface AuthContextProps {
    authState: AuthState;
    changeStatus: (newStatus: string) => void;
    signIn: (params: SignInInterface) => void;
    createAccount: (params: SignInInterface) => void;
    logOut: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

interface SignInInterface {
    userName: string;
    userPassword: string;
    userStatus?: string;
}

export interface ResponseInterface {
    ok: boolean;
    message: string;
}

export const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const changeStatus = (newStatus: string) => {
        dispatch({
            type: 'changeDescription',
            payload: newStatus
        });
    };

    const sendSignInToState = (params: SignInInterface) => {

        const { userName, userStatus } = params;

        dispatch({
            type: 'signIn',
            payload: {
                userName,
                userStatus: userStatus ? userStatus : ''
            }
        });


    }

    const createAccount = (params: SignInInterface): ResponseInterface => {
        const userStatus = 'Write something about you!';
        params.userStatus = userStatus;

        sendSignInToState(params);

        return {
            ok: true,
            message: 'Failed'
        }
    }

    const signIn = (params: SignInInterface): ResponseInterface => {
        sendSignInToState(params);

        return {
            ok: true,
            message: 'Failed'
        }
    };

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
                createAccount,
                logOut,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}