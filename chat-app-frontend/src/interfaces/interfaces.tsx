export interface Auth {
    ok:      boolean;
    message: string;
    data:    Data;
}

export interface Data {
    user:  User;
    token: string;
}

export interface Users {
    ok:      boolean;
    message: string;
    users:   User[];
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


export interface Messages {
    ok:       boolean;
    messages: Message[];
}

export interface Message {
    _id:       string;
    from:      string;
    to:        string;
    message:   string;
    createdAt: string;
    updatedAt: string;
}
