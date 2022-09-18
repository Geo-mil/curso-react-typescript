export async function buildUserDB() {
    const db: User[] = [];
    function createUser() {
        return {
            id: 1,
            name: 'John',
            age: 18
        };
    }

    function updateUser(
        user: User,
        { name = user.name, age = user.age }: UserDTO
    ) {
        const userIndexToUpdate = db.findIndex(user => user.id === user.id);
        if (userIndexToUpdate !== -1) {
            db[userIndexToUpdate] = { ...db[userIndexToUpdate], name, age };
        }
    }
    return {
        createUser,
        updateUser
    };
}
export function buildUser() {
    return {
        id: 1,
        name: 'John',
        age: 18
    };
}
export type User = ReturnType<typeof buildUser>;
export type UserDTO = Partial<Omit<User, 'id'>>;
export type UserDB = Awaited<ReturnType<typeof buildUserDB>>;
