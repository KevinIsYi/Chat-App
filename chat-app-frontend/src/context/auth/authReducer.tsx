import { User } from '../../interfaces/interfaces';
import { authInitialState, AuthInterface } from './AuthContext';

interface SignInInterface extends User {
    token: string;
}

type AuthAction =
    | { type: 'signIn', payload: SignInInterface }
    | { type: 'logOut' }
    | { type: 'changeDescription', payload: string }

export const authReducer = (state: AuthInterface, action: AuthAction): AuthInterface => {

    switch (action.type) {
        case 'signIn': {

            const { payload: { token, online, uid, userName, userStatus } } = action;
            return {
                isLoggedIn: true,
                token,
                user: {
                    online,
                    uid,
                    userName,
                    userStatus,
                }
            }
        }
        case 'logOut': {
            return authInitialState;
        }
        case 'changeDescription': {
            const { payload } = action;
            return {
                ...state,
                user: {
                    ...state.user,
                    userStatus: payload
                }
            }
        }

        default:
            return state;
    }
}