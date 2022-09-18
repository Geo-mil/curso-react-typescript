/* eslint-disable @typescript-eslint/no-explicit-any */
type ClassConstructor<T> = new (...args: any[]) => T;
type Serializable = { toJSON(): object };

function serializable<T extends ClassConstructor<Serializable>>(
    constructor: T
) {
    return class extends constructor {
        public serialize(): object {
            return {
                ...this.toJSON(),
                __type: super.constructor.name
            };
        }
    };
}

@serializable
class ApiPayload implements Serializable {
    public toJSON(): object {
        return {
            payload: { hello: 'world' }
        };
    }
}

const payload = new ApiPayload();
type ApiPayloadSerializable = typeof payload & { serialize(): object };
console.log((payload as ApiPayloadSerializable).serialize());

// Evaluacion de decoradores
function forClass() {
    console.log('Evaluating @forClass');
    return function (target: any) {
        console.log('Running @forClass', target);
    };
}

function first() {
    console.log('Evaluating @first');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Running @first', target, propertyKey, descriptor);
    };
}

function second() {
    console.log('Evaluating @second');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Running @second', target, propertyKey, descriptor);
    };
}

@forClass()
class Example {
    @first()
    @second()
    myMethod() {
        console.log('Running myMethod');
    }
}

// Evaluating @first
// Evaluating @second
// Running @first Example myMethod [Function]
// Running @second Example myMethod [Function]
// Evaluating @forClass
// Running @forClass Example
console.log('\n', Example, '\n');

// Using this class
const e = new Example();
e.myMethod();

// Class Decorator
console.log('\n', 'Class Decorator', '\n');
function classDecorator<T extends ClassConstructor<any>>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
    };
}
@classDecorator
class ExampleClass {}
const exampleClass = new ExampleClass();
console.log(exampleClass); // ExampleClass { newProperty: 'new property' }

// Method Decorator
console.log('\n', 'Method Decorator', '\n');
function enumerable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}
class ExampleMethoDecorator {
    @enumerable(true)
    methodDecorated() {
        return 'methodDecorated';
    }

    methodNotDecorated() {
        return 'methodNotDecorated';
    }
}
const exampleMethodDecorator = new ExampleMethoDecorator();
console.log(Object.keys(Object.getPrototypeOf(exampleMethodDecorator))); // ['methodDecorated']

// Accessor Decorator
function configurable(value: boolean) {
    console.log('Evaluating @configurable');
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Running @configurable at Accessor', propertyKey);
        descriptor.configurable = value;
    };
}
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() {
        return this._x;
    }

    @configurable(false)
    get y() {
        return this._y;
    }
}
console.log('After Point Declaration\n');
const point = new Point(1, 2);
console.log(point.x); // 1
console.log(point.y); // 2
export {};
