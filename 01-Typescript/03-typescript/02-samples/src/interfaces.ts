/* eslint-disable @typescript-eslint/no-unused-vars */
//////// Interfaces and Types
// import type { UserService } from './service';
import { Language } from './enums';
import { UserService } from './user-service';

// type Employed = {
//     id: string;
// };

// type Stuff = Employed & { storeId: number };

// type Manager = Stuff & { team: Stuff[] };

// const me: Stuff = { id: 'juanjofp', storeId: 544 };

// const pablo: Manager = { id: 'pablogp', storeId: 544, team: [me] };

interface Employed {
    readonly id: string;
}

type Stuff = Employed & {
    readonly storeId: number;
};

// implementar Alias
class Cashier implements Stuff {
    constructor(readonly id: string, readonly storeId: number) {}
}

const me = new Cashier('juanjofp', 445);
console.log(me);

interface Manager extends Stuff {
    team: Stuff[];
}

// implementar interface
class Boss implements Manager {
    team: Stuff[] = [];
    constructor(readonly id: string, readonly storeId: number) {}

    addTeamMember(member: Stuff) {
        this.team.push(member);
    }
}

const juan = new Boss('myboss', 445);
juan.addTeamMember(me);

// ===========================================================================================
/// Diferencias

// Un alias puede recibir expresiones de tipos
interface Resource {
    id: string;
}
interface Book extends Resource {
    pages: number;
}
interface Video extends Resource {
    duration: number;
}

// interface Content ??? Video | Book

type Content = Book | Video;

class Basket {
    private items: Content[] = [];

    addItemToBasket(item: Content) {
        this.items.push(item);
    }
}
const myOrder = new Basket();
const lotr: Video = { id: 'bestfilmever', duration: 179 };
const dune: Book = { id: 'mustberead', pages: 412 };
myOrder.addItemToBasket(lotr);
myOrder.addItemToBasket(dune);

// ======================================================================================
// interface se asegura que la extension es consistente

// interface ServiceResponse {
//     validate(input: string): string;
//     error(input: number): string;
// }

// interface MqttResponse extends ServiceResponse {
//     validate(input: string | number): string;
//     error(input: string): string;
// }

// type MqttResponse = ServiceResponse & {
//     validate(input: string | number): string;
//     error(input: string): string;
// };

// const rabbitResponse: MqttResponse = {
//     validate(input) {
//         return (input = '');
//     },
//     error(input) {
//         return (input = '');
//     }
// };

// console.log(rabbitResponse);

// ===============================================================================

// Declararion merging

// Merging from fetch
// interface Response {
//     trackUuid: string;
// }

declare module './user-service' {
    interface UserService {
        getUsersByName(): User[];
    }

    interface UserService {
        getUsersByRegistrationDate(date: Date): User[];
    }
}

const service: UserService = {
    getUser(id) {
        return { id };
    },
    getUsersByName() {
        return [this.getUser('myid')];
    },
    getUsersByRegistrationDate(date) {
        return this.getUsersByName();
    }
};
console.log(service);
// type UserService = {
//     getUsersByName(): User[];
// }

// type UserService = {
//     getUsersByRegistrationDate(date: Date): User[];
// }

class MyService implements UserService {
    getUser(id: string) {
        return { id };
    }

    getUsersByName() {
        return [this.getUser('myid')];
    }

    getUsersByRegistrationDate(date: Date) {
        return this.getUsersByName();
    }
}

console.log(new MyService());

/// ===================================================================================================
declare module './enums' {
    enum Language {
        Esperanto = 30
    }
}

const local = Language.English;
console.log(local);
// ========================================================
interface MyGEneric<T> {
    put(item: T): void;
}

interface MyGEneric<T extends number> {
    get(): T;
}
// Error: All declarations of 'MyGEneric' must have identical type parameters.ts(2428)
// interface MyGEneric<T extends string> {
//     put(item: T): void;
// }
// Error: Type 'string' does not satisfy the constraint 'number'.ts(2344)
// const mg: MyGEneric<string> = {
// }

const mg: MyGEneric<number> = {
    get() {
        return 5;
    },
    put(item: number) {
        console.log(item);
    }
};
console.log(mg);

export {};
