import { AuthState } from './AuthContext';

interface logInPayload {
    userName: string;
    userStatus: string;
}

type AuthAction =
    | { type: 'signIn', payload: logInPayload }
    | { type: 'logOut' }
    | { type: 'changeDescription', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn': {
            const { payload: { userName, userStatus } } = action;
            return {
                isLoggedIn: true,
                userName,
                userStatus
            }
        }
        case 'logOut': {
            return {
                isLoggedIn: false,
                userName: '',
                userStatus: ''
            }
        }

        case 'changeDescription': {
            const { payload } = action;
            return {
                ...state,
                userStatus: payload
            }
        }

        default:
            return state;
    }
}