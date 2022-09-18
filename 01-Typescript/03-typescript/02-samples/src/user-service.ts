export interface User {
    id: string;
}

export interface UserService {
    getUser(id: string): User;
}

export {};
