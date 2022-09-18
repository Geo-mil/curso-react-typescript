class Animal {
    constructor(protected name: string) {}

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const toby = new Dog('Mitzie');
toby.speak();

type Color = 'Black' | 'White';
type Row = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// class Position {
//     constructor(private row: Row, private column: Column) {}
// }

// abstract class Piece {
//     protected position: Position;
//     constructor(private readonly color: Color, row: Row, column: Column) {
//         this.position = new Position(row, column);
//     }

//     abstract canMoveTo(newPosition: Position): boolean;
// }

// class King extends Piece {
// }

// const piece = new Piece('White', 'A', 3);
// const king = new King('White', 'A', 3);
// console.log(king.getPosition());
// king.position;

// modificadores en parametros del constructor private(solo instancias de la clase, ni subclases) y protected(instancias y subclases), por defecto public(accesible a todos)
// Asignacion de position en el constructor, si no se asigan y no es de tipo T | undefined TS nos avisa (strictNullChecks, strictPropertyInicialization)
// Propiedades de solo lectura en una clase no pueden ser modificadas
// Clase abstracta evita instaciar objetos de la clase

class Position {
    constructor(private row: Row, private column: Column) {}

    distanceFrom(position: Position) {
        return {
            row: Math.abs(position.row.charCodeAt(0) - this.row.charCodeAt(0)),
            column: Math.abs(position.column - this.column)
        };
    }
}

abstract class Piece {
    protected position: Position;
    constructor(private readonly color: Color, row: Row, column: Column) {
        this.position = new Position(row, column);
    }

    isEnemy(enemy: Piece) {
        return this.color !== enemy.color;
    }

    abstract canMoveTo(newPosition: Position): boolean;
}

class King extends Piece {
    canMoveTo(position: Position) {
        const distance = this.position.distanceFrom(position);
        return distance.row > 2 && distance.column > 2;
    }
}

const king = new King('White', 'A', 3);
console.log('\n', king, '\n');

class Game {
    private pieces = Game.makePieces();
    private static makePieces() {
        return [new King('White', 'E', 1), new King('Black', 'E', 8)];
    }
    movePiece(piece: Piece, position: Position) {
        piece.canMoveTo(position);
        console.log(this.pieces);
    }
}

const game = new Game();

console.log('\n', game, '\n');

// Las clases son otra forma de contruir objetos!!!
class Rectangle2 {
    height = 0;
    width;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
}

function calculateArea(rect: Rectangle2) {
    return rect.width * rect.height;
}
// OK
calculateArea(new Rectangle2(2, 2));
// OK
calculateArea({ height: 2, width: 2 });

// class Rectangle2 {
//     height = 0;
//     #width;

//     constructor(height: number, width: number) {
//         this.height = height;
//         this.#width = width;
//     }

//     area() {
//         return this.#width * this.height;
//     }
// }

// function calculateArea(rect: Rectangle2) {
//     return rect.area();
// }

// // OK
// calculateArea(new Rectangle2(2, 2));
// // Error!!: Argument of type '{ height: number; width: number; }' is not assignable to parameter of type 'Rectangle2'.
// // Object literal may only specify known properties, but 'width' does not exist in type 'Rectangle2'. Did you mean to write '#width'?
// calculateArea({ height: 2, width: 2 });
// // ERROR!!!: Argument of type '{ height: number; }' is not assignable to parameter of type 'Rectangle2'.
// // Type '{ height: number; }' is missing the following properties from type 'Rectangle2': #width, area
// calculateArea({ height: 2});

console.log('\n', new Rectangle2(5, 5), '\n');
// ======================================================================

// Realmente privados (JS)
class Rectangle {
    #height = 0;
    #width;

    constructor(height: number, width: number) {
        this.#height = height;
        this.#width = width;
    }

    setWidth(width: number): this {
        this.#width = width;
        return this;
    }

    setHeight(height: number): this {
        this.#height = height;
        return this;
    }

    getArea() {
        return this.#height * this.#width;
    }

    resetRectangle() {
        this.#destroy();
    }

    #destroy() {
        this.#height = 0;
        this.#width = 0;
    }
}
const r55 = new Rectangle(5, 5);
console.log('\n', r55, '\n');
console.log(r55.getArea(), '\n');
r55.resetRectangle();
console.log(r55.getArea());
console.log('\n', '--------------', '\n');

class Orthohedron extends Rectangle {
    #deep;
    constructor(height: number, width: number, deep: number) {
        super(height, width);
        this.#deep = deep;
    }

    getArea() {
        return 6 * super.getArea();
    }

    getVolume() {
        return this.#deep * super.getArea();
    }
}

const orto = new Orthohedron(5, 5, 5);
console.log('\n', orto.getVolume(), orto.getArea(), '\n');

orto.setHeight(4).setWidth(3).getArea();

////////////////////////////////////////////////////////////////////////////
// Final Class
////////////////////////////////////////////////////////////////////////////
class MessageQueue {
    private messages: string[] = [];

    private constructor(private maxMessages: number) {
        this.maxMessages = maxMessages;
    }

    add(message: string) {
        if (this.messages.length >= this.maxMessages) {
            this.messages.shift();
        }
        this.messages.push(message);
    }

    getAll() {
        return this.messages;
    }

    static create(maxMessages: number) {
        return new MessageQueue(maxMessages);
    }
}

// Error: Constructor of class 'MessageQueue' is private and only accessible within the class declaration.
// const queue = new MessageQueue(3);
// Error: Cannot extend a class 'MessageQueue'. Class constructor is marked as private.
// class MessageExtended extends MessageQueue {
//     constructor(maxMessages: number) {
//         super(maxMessages);
//     }
// }
const queue = MessageQueue.create(3);
queue.add('Hello');
console.log(queue.getAll());
