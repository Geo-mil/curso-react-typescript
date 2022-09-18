/* eslint-disable @typescript-eslint/no-unused-vars */
function functionName(
    param1: number,
    param2 = 'param2', // Default Params
    param3?: boolean, // Optional Params
    ...param4: bigint[] // Variable Params
): string {
    return `Param1: ${param1} Param2: ${param2} Param3: ${
        param3 ? param3 : 'Undefined'
    } Param4: ${param4.length}`;
}

functionName(45);
// Param1: 45 Param2: param2 Param3: Undefined Param4: 0

functionName(45, 'second param');
// Param1: 45 Param2: second param Param3: Undefined Param4: 0

functionName(45, 'second param', true);
// Param1: 45 Param2: second param Param3: true Param4: 0

functionName(45, 'second param', true, 3n, 5n, 7n);
// Param1: 45 Param2: second param Param3: true Param4: 3

type Context = {
    appId?: string;
    userId?: string;
};
function giveMeContext(
    url = '/',
    { appId = 'genericTenant', userId = '0' }: Context = {}
) {
    console.log(url, appId, userId);
}

giveMeContext();
giveMeContext('/info');
giveMeContext('/info', {});
giveMeContext('/info', { userId: 'me' });
giveMeContext('/info', { userId: 'me', appId: 'MyBussines' });

function sum(a: number, b: number) {
    console.log('Result', '' + a + b);
}

sum(1, 2);
sum.call(null, 2, 3);
sum.apply(null, [3, 4]);
sum.bind(null, 4)(5);

// Funciones con this
const object = {
    me: 'Juanjo',
    name() {
        return this.me;
    }
};
console.log(object.name());
// const whoAmI = object.name;
// console.log(whoAmI()); // TypeError: Cannot read property 'me' of undefined

function whoAmI(this: { me: string }) {
    console.log('My name is ', this.me);
}
// The 'this' context of type 'void' is not assignable
// to method's 'this' of type '{ me: string; }'
// whoAmI();
const itsMe = { me: 'Juanjo', whoAmI };
itsMe.whoAmI();
whoAmI.call({ me: 'Juanjo' });

type Me = { me: string; name: () => string };
const me = { me: 'Juanjo', name: whoAmI };
me.name();
const who = me.name;
// who(); // The 'this' context of type 'void' is not assignable to method's 'this' of type '{ me: string; }'
who.call(me);

// Funciones con new y this
function constructMe(this: Me, name: string) {
    this.me = name;
}
type ConstructMe = { new (name: string): Me };
constructMe.prototype.name = function name(this: Me) {
    return this.me;
};
const ctoMe = constructMe as unknown as ConstructMe;
// const me2 = ctoMe('Juanjo2'); // The 'this' context of type 'void' is not assignable to method's 'this' of type '{ me: string; }'.
const me3 = new ctoMe('Juanjo2');
console.log(me3.name());

// Tipar funciones
type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
add(3, 5);

type IncrementTotal = (total: number, increment: number) => number;
type SumArrayNumbers = (values: number[]) => number;

const incrementTotal: IncrementTotal = (total, increment) =>
    (total += increment);
const sumArrayNumber: SumArrayNumbers = function (values) {
    return values.reduce(incrementTotal);
};
sumArrayNumber([1, 2, 3, 4, 5]); // 15

type TransFormNumber = (a: number, b: number) => number;
function transformArrayNumber(values: number[], predicate: TransFormNumber) {
    return values.reduce(predicate);
}

const addPredicate: TransFormNumber = (a, b) => a + b;
const substractPredicate: TransFormNumber = (a, b) => a - b;
const productPredicate: TransFormNumber = (a, b) => a * b;

const values = [1, 2, 3, 4, 5];
transformArrayNumber(values, addPredicate); // 15
transformArrayNumber(values, substractPredicate); // -13
transformArrayNumber(values, productPredicate); // 120

transformArrayNumber(values, (a, b) => a + b);

const predicate = (a: number, b: number) => a % b;
transformArrayNumber(values, predicate);

const invalidPredicate = (a: number, b: string) => a + b;
// Argument of type '(a: number, b: string) => string'
// is not assignable to parameter of type 'TransFormNumber'.
// transformArrayNumber(values, invalidPredicate);

// Distintas formas de tipar una funcion
type FN1 = (a: number, b?: string) => string;
type FN2 = {
    (a: number, b?: string): string;
    count: number;
};

const fn2: FN2 = (a, b) => {
    fn2.count = +1;
    return '' + a + (b ? b : '');
};
fn2.count = 0; // TS infiere el tipo gracias a esta asignacion

type User = { name: string };
type FNCtor = new () => User;
type FNCtor2 = {
    new (): User;
    count: number;
};

const fnCtor: FNCtor2 = function constructMe(this: User) {
    this.name = 'Juanjo';
    fnCtor.count += 1;
} as unknown as FNCtor2;
fnCtor.count = 0;

const user = new fnCtor();
new fnCtor();
fnCtor.count; // 2
// fnCtor(); // Value of type 'FNCtor2' is not callable. Did you mean to include 'new'?

type NodeBTree = {
    weight: number;
    right?: NodeBTree;
    left?: NodeBTree;
    traverse(): void;
    getWeight: () => number;
};

function traverse(this: NodeBTree) {
    if (this.left) this.left.traverse();
    if (this.right) this.right.traverse();
}
const root: NodeBTree = {
    weight: 0,
    traverse,
    getWeight() {
        return this.weight;
    }
};

const root2: NodeBTree = {
    weight: 0,
    traverse() {
        if (this.left) this.left.traverse();
        if (this.right) this.right.traverse();
    },
    getWeight() {
        return this.weight;
    }
};

export {};
