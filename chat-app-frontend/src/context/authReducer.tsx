import { User } from '../interfaces/interfaces';
import { AuthInterface } from './AuthContext';

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
        // case 'logOut': {
        //     return {
        //         isLoggedIn: false,
        //         token: '',
        //         uid: '',
        //         userName: '',
        //         userStatus: '',
        //     }
        // }

        // case 'changeDescription': {
        //     const { payload } = action;
        //     return {
        //         ...state,
        //         userStatus: payload
        //     }
        // }

        default:
            return state;
    }
}