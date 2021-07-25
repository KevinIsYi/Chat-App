export interface Auth {
    ok:      boolean;
    message: string;
    data:    Data;
}

export interface Data {
    user:  User;
    token: string;
}

export interface User {
    userStatus: string;
    online:     boolean;
    userName:   string;
    uid:        string;
}

export interface ChatInterface {
    message: string;
}