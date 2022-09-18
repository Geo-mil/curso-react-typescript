// types namespace
type Point = { x: number; y: number };
type PointCtor = { new (x: number, y: number): Point };

// values namespace
const Point = function pointCtor(this: Point, x: number, y: number) {
    this.x = x;
    this.y = y;
} as unknown as PointCtor;

const point = new Point(1, 2);
console.log(point);

// Value of type 'PointCtor' is not callable. Did you mean to include 'new'?
// const p2 = Point(2, 2);

class CLS {} // crea CLS en el ambito de los tipos y de los valores
const cls: CLS = new CLS(); // El primer CLS en un tipo, es segundo un valor (Function)
console.log(cls);

enum E {
    F,
    G
}
const e: E = E.F;
console.log(e);

// Types genetated by a Class
type State = { [key: string]: string };

class StringDatabase {
    private state: State;

    constructor(state?: State) {
        this.state = state ? state : {};
    }

    get(key: string) {
        return key in this.state ? this.state[key] : null;
    }

    set(key: string, value: string) {
        this.state[key] = value;
    }

    static from(db: StringDatabase) {
        const newDB = new StringDatabase();
        newDB.state = db.state;
        return newDB;
    }
}

const db = new StringDatabase({ hello: 'World' });
const dbCloned = StringDatabase.from(db);
console.log(db, dbCloned);

// typeof de TS es como el de JS pero para los tipos, devuelve el tipo de un valor
// JS: const jsTypeVvalueName: string = typeof Value;
console.log(typeof StringDatabase); // function
console.log(typeof db); // object
// TS: type ElTipoDelValor = typeof Valor;
type DBContructorType = typeof StringDatabase;
type DBInstanceType = typeof db;
const DBContructor: DBContructorType = StringDatabase;
const db2: DBInstanceType = new DBContructor();
console.log(db2);

declare function send(data: any, headers: Record<string, string>): void;
type HTTPHeaders = {
    Accept: string;
    Cookie: string;
};

const hdrs: HTTPHeaders = {
    Accept: 'text/html',
    Cookie: ''
};
send({}, hdrs);

// interface HTTPHeaderInterface {
//     Accept: string;
//     Cookie: string;
// }
// const hdrs2: HTTPHeaderInterface = {
//     Accept: 'text/html',
//     Cookie: ''
// };
// send({}, hdrs2); // Como las interfaces estan abiertas a ser mergeadas TS no puede asegurar que el objeto recibido cumpla con Record<string, string>

export {};
