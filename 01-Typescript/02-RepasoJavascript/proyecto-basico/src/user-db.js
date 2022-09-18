export function buildUserDB() {
    const userDB = [];

    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    function addNewUser(name, age) {
        const user = new User(name, age);
        // userDB = [...userDB, user]; // Spread operator
        userDB.push(user);
        return user;
    }

    function getAllUsers() {
        return [...userDB];
    }

    function removeUser(name) {
        const index = userDB.findIndex(user => user.name === name);
        if (index !== -1) {
            userDB.splice(index, 1);
        }
    }

    function forEach(callback) {
        for (let i = 0; i < userDB.length; i++) {
            callback(userDB[i]);
        }
    }

    function toString(user) {
        return `user: ${user.name} is ${user.age} years old`;
    }

    return {
        addNewUser,
        getAllUsers,
        removeUser,
        forEach,
        toString,
        User
    };
}

export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
