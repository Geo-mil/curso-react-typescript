import { buildUserDB, User } from './user-db';
// import * as userDB from './user-db';

function main() {
    const userDB = buildUserDB();
    const user = userDB.addNewUser('John', 30);
    userDB.addNewUser('Erik', 18);
    userDB.addNewUser('Pedro', 20);
    userDB.addNewUser('Marcela', 30);
    console.log(user);

    const users = userDB.getAllUsers();
    users.push({ name: 'Jane', age: 25 });
    console.log(userDB.getAllUsers());
    userDB.removeUser('John');
    console.log(userDB.getAllUsers());

    userDB.forEach(user => console.log(userDB.toString(user)));

    const user2 = new User('John', 30);
}

main();
