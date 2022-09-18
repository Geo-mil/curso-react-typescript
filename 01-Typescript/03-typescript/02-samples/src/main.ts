/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
console.log('Welcome TS');

// type Credit = 'CreditOne' | 'CreditTwo' | 'CreditTree';
// let MyCredit: Credit;
// type CreditCard = {
//     [key in typeof MyCredit]: string;
// };
// const creditCard: CreditCard = {
//     CreditOne: '',
//     CreditTwo: '',
//     CreditTree: ''
// };

// type CustomObject = { key1: string; key2: string };

// enum SomeEnum {
//     A,
//     B,
//     C
// }
// type dictEnum = {
//     [key in keyof typeof SomeEnum]?: unknown;
// };
// const de: dictEnum = {};

// type Humanoid = { arms: number; legs: number; heads: number };
// type Squidoid = { tentacles: number; heads: number };
// type Alien = Humanoid | Squidoid;
// type AlienCombined = Humanoid & Squidoid;

// const tanos: Alien = { heads: 1, arms: 2, legs: 2 };
// const kang: Alien = { heads: 1, tentacles: 8 };
// const octavius: AlienCombined = { heads: 1, arms: 2, legs: 2, tentacles: 4 };
// // const octocat: AlienCombined = { heads: 1, legs: 2, tentacles: 4 };
// // const invalidAlien: Alien = { heads: 2, arms: 2 };
// // const me: Alien = { heads: 1, arms: 2, legs: 2, hands: 2 };

// function isHumanoid(alien: Alien): alien is Humanoid {
//     return 'arms' in alien && 'legs' in alien;
// }

// function isSquidoid(alien: Alien): alien is Squidoid {
//     return 'tentacles' in alien;
// }

// function printAlien(alien: Alien) {
//     let description = `Heads: ${alien.heads}`;
//     if (isHumanoid(alien))
//         description += `, arms: ${alien.arms}, legs: ${alien.legs}`;
//     if (isSquidoid(alien)) description += `, tentacles: ${alien.tentacles}`;
//     console.log(description);
// }

// printAlien(tanos);
// printAlien(kang);
// printAlien(octavius);

// function printAlienCombined(alien: AlienCombined) {
//     return `Heads: ${alien.heads}, arms: ${alien.arms}, legs: ${alien.legs}, tentacles: ${alien.tentacles}`;
// }

// // printAlienCombined(tanos);
// // printAlienCombined(kang);
// printAlienCombined(octavius);

// const s1 = Symbol('a');
// const s2 = Symbol('a');
// // const areEqual = s1 == s2;
// // eslint-disable-next-line prefer-const
// let s4 = Symbol('custom');
// console.log(s1, s2, s4, typeof s1, typeof s4, Symbol.keyFor(s4));

// let p1: object = { x: 0, y: 0 }; // {}
// console.log(p1.x, p1.y);

// let p2 = { x: 0, y: 0 }; // {x: number; y: number;}
// console.log(p2.x, p2.y);

// class Point3 {
//     x = 0;
//     y = 0;
// }
// let p3 = new Point3(); // {x: number; y: number;}
// console.log(p3.x, p3.y);

// function printPoints(point: Point3) {
//     console.log(point.x, point.y);
// }
// printPoints(p1);
// printPoints(p2);
// printPoints(p3);

// let p4: Point3 = { x: 0, y: 0 };
// let p5: { x: number; y: number } = new Point3();
// let p6: Point3 = { x: 0 };
// let p7: Point3 = { x: 0, y: 0, z: 0 };

// // Propiedades opcionales ?
// let film: {
//     title: string;
//     description?: string;
//     year?: number;
// };
// film = { title: 'Dune', description: 'No Spoiler', year: 2021 };
// film = { title: 'Black Widow', description: 'BW deserves this film' };
// film = { title: 'Spiderman' };
// film = { title: 'Dr. Strange 2', format: 'DVD' };

// // Propiedades de solo lectura
// let user: { readonly id: string; name: string };
// user = { id: 'jjfp', name: 'Juanjo' };
// user.id = 'jrfp';

// // Propiedades desconocidas (built in Record)
// let shopCart: Record<string, number>;
// shopCart = { potatoes: 3, milk: 5, bananas: 6 };
// shopCart = {};
// shopCart = { beans: '3kg' };

// // Evitar tipar con {}
// let danger = {}; // {}
// danger = { a: 34 };
// danger = 2;
// danger = () => undefined;
// danger = [];
// danger = 'DANGER!!!';
// danger = null;
// danger = undefined;

// let scene = '';

// type COORD = number;
// type COORD = string;

// if (scene === '3D') {
//     type Point = {
//         x: COORD;
//         y: COORD;
//         z: COORD;
//     };
//     let center: Point = { x: 0, y: 0, z: 0 };
//     console.log(center);
// } else {
//     type Point = {
//         x: COORD;
//         y: COORD;
//     };
//     let center: Point = { x: 0, y: 0 };
//     console.log(center);
// }

// let myArray = [1, 2, 3]; // number[]
// myArray.push(42);
// myArray.push('Juanjo');

// let mixArray = ['hi', 42, [5], true]; // (string | number | boolean | number[])[]
// mixArray.push(42);
// mixArray.push('Juanjo');

// let anyArray: any[] = []; // any[]
// anyArray.push(42);
// anyArray.push('Juanjo');

// let names: string[] = []; // string[]
// names.push('Juanjo');
// names.push(42);

// let implicitAnyArray = []; // any[]
// implicitAnyArray.push(42);
// implicitAnyArray.push('Juanjo');

// function buildArray() {
//     let inferMyType = []; // any[]
//     inferMyType.push(true);
//     inferMyType.push(42);
//     inferMyType.push('Juanjo');
//     return inferMyType;
// }

// let constrainedArray = buildArray(); //(string | number | boolean)[]

// // Tuplas

// // Array de tamaño fijo con valores opcionales
// type Coords = [number, number, number?];
// const houseCoords: Coords = [-1.6343, 37.9422];
// const teideCoords: Coords = [1.6343, 7.9422, 3005];

// // Array con valores iniciales fijos
// type Node = string;
// type Route = [Node, Node, ...Node[]];
// const goHome: Route = ['office', 'home'];
// const goHomeAndBuyEgss: Route = ['office', 'market', 'home'];
// const goNoWhere: Route = [];
// const goOfficeFomOffice: Route = ['office'];

// // Inmutabilidad
// type Inmutable = readonly string[];
// const team: Inmutable = ['Jose', 'Pablo', 'Juan'];
// team[2] = 'Juanjo';
// team.push('Juanjo');

// type InmutableCoords = readonly [number, number];
// const someWhere: InmutableCoords = [0, 0];
// someWhere[0] = 1;

// function returnNothing() {
//     console.log('Do not return a value');
// }
// const value = returnNothing();
// // Operator '+' cannot be applied to types 'number' and 'void'
// const total = 1 + value;

// function returnNever(): never {
//     throw new Error('You Shall Not Pass!');
// }
// const value2 = returnNever();
// value2;

// type RequiredValues = { one: string; two: string };
// type AnyObjectWithRequired = RequiredValues & { [key: string]: unknown };

type AnyObjectWithRequired = {
    one: string;
    two: string;
    [key: string]: unknown;
};

const oddObject: AnyObjectWithRequired = {
    one: 'One',
    two: 'Two',
    otherValue: {}
};

const objFromapi = { one: 'hello', two: 'Bye', third: 64 };

function printRequired(item: AnyObjectWithRequired) {
    console.log(item.one, item.two);
}

printRequired(oddObject);
printRequired(objFromapi);

// Peligro de usar any, parse devuelve any y es peligroso!!!!!
const objFromResponse = JSON.parse('{"one": "uno", "two": "dos", "three": 3}');
printRequired(objFromResponse);

function safetyParser(json: string): unknown {
    return JSON.parse(json);
}
const unsafeObject = safetyParser('{"one": "uno", "two": "dos", "three": 3}');
// Error: Argument of type 'unknown' is not assignable to parameter of type 'AnyObjectWithRequired'.ts(2345)
// printRequired(unsafeObject);
function checkApiResponse(
    response: unknown
): response is AnyObjectWithRequired {
    if (
        response === null &&
        response !== undefined &&
        typeof response === 'object'
    )
        return false;
    const notNullResponse = response as object;
    if ('one' in notNullResponse && 'two' in notNullResponse) return true;
    return false;
}
if (checkApiResponse(unsafeObject)) {
    printRequired(unsafeObject);
}
