/* eslint-disable @typescript-eslint/no-unused-vars */
// type Filter ={
//     (array: number[], f: (item: number) => boolean): number[];
//     (array: string[], f: (item: string) => boolean): string[];
//     (array: object[], f: (item: object) => boolean): object[];
// }
// const filter: Filter = (array: any[], f: (item: any) => boolean): any[] => {
//     const filtered = [];
//     for (let i = 0; i < array.length; i++) {
//         if (f(array[i])) filtered.push(array[i]);
//     }
//     return filtered;
// }

// const names = ['Juanjo', 'Juan', 'Jose', 'Pablo'];
// filter(names, name => name.startsWith('J'));

// type Filter = {
//     <T>(array: T[], predicate: (item: T) => boolean): T[];
// }
// const filter: Filter = (array, predicate) => {
//     const filtered= [];
//     for(let i = 0; i < array.length; i++) {
//         if(predicate(array[i])) filtered.push(array[i]);
//     }
//     return filtered;
// };

// const people = [{name: 'a', age: 12}, {name: 'b', age: 18}, {name: 'c', age: 21}];
// filter(people, (person) => person.age >= 18);

// function filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
//     const filtered= [];
//     for(let i = 0; i < array.length; i++) {
//         if(predicate(array[i])) filtered.push(array[i]);
//     }
//     return filtered;
// };

// const people = [{name: 'a', age: 12}, {name: 'b', age: 18}, {name: 'c', age: 21}];
// filter(people, (person) => person.age >= 18);

const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) filtered.push(array[i]);
    }
    return filtered;
};

const people = [
    { name: 'a', age: 12 },
    { name: 'b', age: 18 },
    { name: 'c', age: 21 }
];
filter(people, person => person.age >= 18);

type Filter<T> = {
    (array: T[], predicate: (item: T) => boolean): T[];
};
const filterString: Filter<string> = (array, predicate) => {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) filtered.push(array[i]);
    }
    return filtered;
};

filterString(['a', 'b'], item => item === item.toUpperCase());
// filterString([1, 2, 3], (item) => item > 5);

function map<T, U>(array: T[], transform: (item: T) => U): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(transform(array[i]));
    }
    return result;
}
map([1, 2, 3, 4], item => `Number ${item}`);
map(['1', '2', '3'], item => parseInt(item));

const p = new Promise(resolve => {
    resolve(45);
});

p.then(value => value);

const p2: Promise<number> = new Promise(resolve => {
    resolve(45);
});

p2.then(value => value);

function call2<T, R>(fn: (...args: T[]) => R, ...args: T[]): R {
    return fn(...args);
}

call2<number | string | boolean, void>(
    (one, two, three) => console.log(one, two, three),
    1,
    '2',
    true
);

function complexFn<T extends unknown[], R>(
    fn: (...args: T) => R,
    ...args: T
): R {
    return fn(...args);
}

complexFn(
    (one: number, two: string, three: boolean) => console.log(one, two, three),
    1,
    '2',
    4
);

complexFn(
    (array: number[], user: { name: string }) => ({ ...user, array }),
    [1, 2, 3],
    { name: 'Juanjo' }
);

function varadicFn(...args: any[]) {
    return [args[0], args[1]] as const;
}

const value = varadicFn(1, 5, 'never');

// type MyEvent<T> = {
//     target: T;
//     type: string;
// };

// type ButtonEvent = MyEvent<HTMLButtonElement | null>;
// const myButton: ButtonEvent = {
//     target: document.querySelector('#buttonId'),
//     type: 'onclick'
// };

// type DivEvent = MyEvent<HTMLDivElement | null>;
// const myDiv: DivEvent = {
//     target: document.querySelector('#'),
//     type: 'onfocus'
// };

// type TimeEvent<T> = {
//     event: MyEvent<T>;
//     from: Date;
//     to: Date;
// };

// const now = new Date();
// const twoHoursLater = new Date(now);
// twoHoursLater.setHours(now.getHours() + 2);
// const myTimeEvent: TimeEvent<HTMLButtonElement | null> = {
//     event: myButton,
//     from: now,
//     to: twoHoursLater
// };

// function triggerTimeEventEach(
//     timeEv: TimeEvent<HTMLButtonElement | null>,
//     delay: number
// ) {
//     // Es seguro confiar en TimeEvent
//     const element = timeEv.event.target;
//     if (element !== null) {
//         setTimeout(() => {
//             const now = Date.now();
//             if (now > timeEv.from.getTime()) {
//                 element.click();
//             }
//             if (now < timeEv.to.getTime()) {
//                 setTimeout(() => triggerTimeEventEach(timeEv, delay));
//             }
//         }, delay);
//     }
// }
// triggerTimeEventEach(myTimeEvent, 500);

type MyEvent<T extends HTMLElement | null = HTMLElement> = {
    target: T;
    type: string;
};

type ButtonEvent = MyEvent<HTMLButtonElement | null>;
const myButtonEvent: ButtonEvent = {
    target: document.querySelector('#buttonId'),
    type: 'onclick'
};

type DivEvent = MyEvent<HTMLDivElement | null>;
const myDivEvent: ButtonEvent = {
    target: document.querySelector('#divId'),
    type: 'onclick'
};

const now = new Date();
const twoHoursLater = new Date(now);
twoHoursLater.setHours(now.getHours() + 2);

type TimeEvent<T extends HTMLElement | null = HTMLElement | null> = {
    event: MyEvent<T>;
    from: Date;
    to: Date;
};

const myTimeButtonEvent: TimeEvent<HTMLButtonElement | null> = {
    event: myButtonEvent,
    from: now,
    to: twoHoursLater
};

const myTimeHTMLElementEvent: TimeEvent = {
    event: myDivEvent,
    from: now,
    to: twoHoursLater
};

function triggerTimeEventEach<T extends HTMLElement | null = HTMLElement>(
    timeEv: TimeEvent<T>,
    delay: number
) {
    // Es seguro confiar en TimeEvent
    const element = timeEv.event.target;
    if (element !== null) {
        setTimeout(() => {
            const now = Date.now();
            if (now > timeEv.from.getTime()) {
                element.click();
            }
            if (now < timeEv.to.getTime()) {
                setTimeout(() => triggerTimeEventEach(timeEv, delay));
            }
        }, delay);
    }
}

triggerTimeEventEach(myTimeButtonEvent, 500);
triggerTimeEventEach(myTimeHTMLElementEvent, 500);

function complesWithString<T extends [unknown, string, ...unknown[]], R>(
    fn: (...args: T) => R,
    ...args: T
) {
    return fn(...args);
}

complesWithString(
    (a: number, b: string, c: boolean) => console.log(a, b, c),
    1,
    '2',
    true
);
complesWithString(
    (a: number, b: number, c: boolean) => console.log(a, b, c),
    1,
    2,
    true
);

is('string', 'string'); // true
is(5, 6); // false
is(true, true); // true
is(5, '5'); // TS no nos debe dejar
is('5', 5); // TS no nos debe dejar
is([1], [1, 2], [1, 2, 3]); // false

function is<T>(...args: T[]) {
    throw new Error('Function not implemented.');
}
