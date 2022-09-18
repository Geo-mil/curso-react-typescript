/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
type asyncSumCb = (result: number) => void;

// Sobrecarga con declaraciones de funciones
// Definimos los metodos sobrecargados
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncSumCb): void;
function asyncSum(): Promise<number>;

// Definimos la implementacion
function asyncSum(a = 0, b = 0, cb?: asyncSumCb) {
    const result = a + b;
    if (cb) return void cb(result);
    else return Promise.resolve(result);
}

asyncSum(3, 4, result => console.log('Suma:', result));
asyncSum(1, 2).then(result => console.log('Suma:', result));
asyncSum().then(result => console.log('Suma:', result));

// Sobrecarga con expresiones de funcion
type AsyncSum = {
    (a: number, b: number): Promise<number>;
    (a: number, b: number, cb: asyncSumCb): void;
};

// Definimos la implementacion
const asyncSum2 = function (a: number, b: number, cb?: asyncSumCb) {
    const result = a + b;
    if (cb) return cb(result);
    else return Promise.resolve(result);
} as AsyncSum;

asyncSum2(3, 4, result => console.log('Suma:', result));
asyncSum2(21, 2).then(result => console.log('Suma:', result));

type Reserve = {
    (from: Date, to: Date, destination: string): string;
    (from: Date, destination: string): number;
};
const reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (typeof toOrDestination === 'string') return from.getTime();
    return `${from.toLocaleString()} ${toOrDestination.toLocaleString()} ${
        destination ? destination : ''
    }}`;
};

const makeReserve = reserve as Reserve;

const r1 = makeReserve(new Date(), new Date(), 'Murcia');
const r2 = makeReserve(new Date(), 'Murcia');

type LongHandAllowsOverloadDeclarations = {
    (a: number): number;
    (a: string): string;
};

const fn = function (v) {
    return v;
} as LongHandAllowsOverloadDeclarations;

interface BoolOrNumberOrStringFunction {
    /** Takes a bool, returns a bool */
    (input: boolean): boolean;
    /** Takes a number, returns a number */
    (input: number): number;
    /** Takes a string, returns a bool */
    (input: string): boolean;
}

const boolOrNumberOrStringFunction = function (input) {
    return input;
} as BoolOrNumberOrStringFunction;

const boolValue = boolOrNumberOrStringFunction(true);
const numberValue = boolOrNumberOrStringFunction(12);
const boolValue2 = boolOrNumberOrStringFunction('string');

class LayerFactory {
    createFeatureLayer(a1: string, a2: number): string;
    createFeatureLayer(a1: number, a2: boolean, a3: string): number;
    createFeatureLayer(
        a1: string | number,
        a2: number | boolean,
        a3?: string
    ): number | string {
        if (typeof a3 === 'string') return a1;
        return a2 as number;
    }
}

const fact = new LayerFactory();
fact.createFeatureLayer('foo', 42); // string
fact.createFeatureLayer(3, true, 'bar'); // number

type HTMLAnchorElement = number;
type HTMLCanvasElement = number;
type HTMLTableElement = number;
type HTMLElement = number;

function createElement(tag: 'a'): HTMLAnchorElement;
function createElement(tag: 'canvas'): HTMLAnchorElement;
function createElement(tag: 'table'): HTMLAnchorElement;
function createElement(tag: string): HTMLElement;
function createElement(tag: string): HTMLElement {
    return 5;
}

const a = createElement('a');
const table = createElement('table');
const canvas = createElement('canvas');
const htlmElement = createElement('div');

function filter(array: number[], f: (item: number) => boolean): number[];
function filter(array: string[], f: (item: string) => boolean): string[];
function filter(array: object[], f: (item: object) => boolean): object[];
function filter(array: any[], f: (item: any) => boolean): any[] {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (f(array[i])) filtered.push(array[i]);
    }
    return filtered;
}

const names = ['Juanjo', 'Juan', 'Jose', 'Pablo'];
filter(names, name => name.startsWith('J'));

// const people = [{name: 'a', age: 12}, {name: 'b', age: 18}, {name: 'c', age: 21}];
// filter(people, (person) => person.age >= 18);

export {};
