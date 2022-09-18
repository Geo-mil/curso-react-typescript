// Factory pattern
export type ShapeNames = 'circle' | 'square' | 'rectangle' | 'triangle';
export abstract class Shape {
    constructor(public name: ShapeNames) {}
    abstract draw(): void;

    static create(shapeName: ShapeNames): Shape {
        switch (shapeName) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            case 'rectangle':
                return new Rectangle();
            case 'triangle':
                return new Triangle();
        }
    }
}

class Circle extends Shape {
    constructor() {
        super('circle');
    }

    draw() {
        console.log(`Shape ${this.name} is drawn`);
    }
}
class Square extends Shape {
    constructor() {
        super('square');
    }
    draw() {
        console.log(`Shape ${this.name} is drawn`);
    }
}
class Rectangle extends Shape {
    constructor() {
        super('rectangle');
    }
    draw() {
        console.log(`Shape ${this.name} is drawn`);
    }
}
class Triangle extends Shape {
    constructor() {
        super('triangle');
    }
    draw() {
        console.log(`Shape ${this.name} is drawn`);
    }
}

const shapes: Shape[] = [
    Shape.create('circle'),
    Shape.create('square'),
    Shape.create('rectangle'),
    Shape.create('triangle')
];

shapes.forEach(shape => shape.draw());

// Builder pattern

type METHODS = 'GET' | 'POST' | 'PUT' | 'DELETE';
class Request {
    public url: string;
    public method: METHODS;
    public data: unknown;
    public headers: Record<string, string>;

    constructor() {
        this.url = '';
        this.method = 'GET';
        this.data = {};
        this.headers = {};
    }

    send() {
        console.log(this.url, this.method, this.data, this.headers);
    }
}

export class RequestBuilder {
    private request: Request;

    constructor() {
        this.request = new Request();
    }

    setUrl(url: string): this {
        this.request.url = url;
        return this;
    }

    setMethod(method: METHODS): this {
        this.request.method = method;
        return this;
    }

    setData(data: unknown): this {
        this.request.data = data;
        return this;
    }

    build(): Request {
        return this.request;
    }
}

const request = new RequestBuilder()
    .setMethod('GET')
    .setUrl('https://google.com')
    .build();
request.send();

// Singleton pattern
export class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log('Singleton created');
    }

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Experimento
class Request2 {
    private url = '';
    private method: METHODS = 'GET';
    private data: unknown;

    private constructor() {
        console.log('Request created');
    }

    static create(): {
        setMethod(method: METHODS): { setUrl(url: string): Request2 };
    } {
        return new Request2();
    }

    setMethod(method: METHODS): { setUrl(url: string): Request2 } {
        this.method = method;
        return this;
    }

    setUrl(url: string): Request2 {
        this.url = url;
        return this;
    }

    setData(data: unknown): Request2 {
        this.data = data;
        return this;
    }

    send() {
        console.log(this.url, this.method, this.data);
    }
}

const r2 = Request2.create();
r2.setMethod('GET').setUrl('https://google.com').send();

// Verificar el tipo correcto en tiempo de compilacion
// en el patron Builder
// export class RequestBuilder2 {
//     setUrl(url: string): this & { url: string } {
//         return { ...this, url };
//     }

//     setMethod(method: METHODS): this & { method: METHODS } {
//         return { ...this, method };
//     }

//     setData(data: unknown): this & { data: unknown } {
//         return { ...this, data };
//     }

//     send(this: this & { url: string; method: METHODS; data?: unknown; }) {
//         console.log(this.url, this.method, this.data);
//     }
// }

export class RequestBuilder2 {
    public url?: string;
    public method?: METHODS;
    public data?: unknown;

    setUrl(url: string): this & { url: string } {
        this.url = url;
        return { ...this, url };
    }

    setMethod(method: METHODS): this & { method: METHODS } {
        this.method = method;
        return { ...this, method };
    }

    setData(data: unknown): this & { data: unknown } {
        this.data = data;
        return { ...this, data };
    }

    send(this: { url: string; method: METHODS; data?: unknown }) {
        console.log(this.url, this.method, this.data);
    }
}

// const rb2 = new RequestBuilder2().send();
// const rb2 = new RequestBuilder2().setMethod('GET').send();
const rb2 = new RequestBuilder2().setMethod('GET').setUrl('https://google.com');
rb2.send();
const rb3 = new RequestBuilder2();
rb3.setMethod('GET');
rb3.setUrl('https://google.com');
rb3.setData('hello');
(
    rb3 as RequestBuilder2 & { url: string; method: METHODS; data?: unknown }
).send();
new RequestBuilder2()
    .setData('hello')
    .setMethod('DELETE')
    .setUrl('https://google.es')
    .send();
