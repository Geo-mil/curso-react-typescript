/* eslint-disable @typescript-eslint/no-explicit-any */
type ClassConstructor<T extends object = object> = new (...args: any[]) => T;
function withMixin<T extends ClassConstructor>(Class: T) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
        }

        behaiviorAdded() {
            console.log('Not so much powerfull new behaivior');
        }
    };
}

// Crear Mixin para a;adir la funcionalidad de behaiviorAdded a la clase Point
class Point {
    constructor(public x: number, public y: number) {}
}
const PointWithMixin = withMixin(Point);
const pointMixed = new PointWithMixin(1, 2);
pointMixed.behaiviorAdded();

// Crear Mixins de clases que sean debugables y que tenga un metodo debug
type Debugable = { getDebugValue(): object };
function withDebugMixin<C extends ClassConstructor<Debugable>>(Class: C) {
    return class extends Class {
        debug() {
            const name = Class.name;
            const value = this.getDebugValue();
            return `${name} (${JSON.stringify(value)})`;
        }
    };
}

class UserService implements Debugable {
    constructor(public user: string) {}

    getDebugValue() {
        return {
            user: this.user
        };
    }
}

const UserServiceWithDebug = withDebugMixin(UserService);
const userService = new UserServiceWithDebug('John');
console.log(userService.debug());

class ProductService implements Debugable {
    constructor(public productId: string, public name: string) {}

    getDebugValue() {
        return {
            productId: this.productId,
            name: this.name
        };
    }
}

const ProductServiceWithDebug = withDebugMixin(ProductService);
const productService = new ProductServiceWithDebug('123', 'iPhone');
console.log(productService.debug());

@withDebugMixin
class MailSender implements Debugable {
    constructor(public email: string) {}

    getDebugValue() {
        return {
            email: this.email
        };
    }
}
const mailSender = new MailSender('juanjo@juanjofp.com');
console.log(mailSender);
// Error: Type 'MailSender' is missing the following properties from type 'Debugable': debug
// console.log(mailSender.debug());

type MaisSenderDecored = MailSender & { debug(): string };
console.log((mailSender as MaisSenderDecored).debug());
