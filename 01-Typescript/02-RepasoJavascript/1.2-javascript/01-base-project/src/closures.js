export function userDB() {
    let users = [];

    function addUser(username, age) {
        users.push({ username, age });
    }

    function delUser(username) {
        users = users.filter(u => username !== u.username);
    }

    function getUsers() {
        return users.slice();
    }

    function getUser(userName) {
        return users.find(u => userName === u.username);
    }

    // API
    return {
        addUser,
        delUser,
        getUsers,
        getUser
    };
}

export function pow(exp) {
    return function toThePowerOf(base) {
        let result = 1;
        for (let i = 0; i < exp; i++) {
            result *= base;
        }
        return result;
    };
}

const us = userDB();

const pow2 = pow(2);

console.log(pow2(3));
console.log(pow2(4));

const pow3 = pow(3);

