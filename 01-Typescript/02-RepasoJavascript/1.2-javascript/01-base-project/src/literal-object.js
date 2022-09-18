const theProtoObj = {
    printMe() {
        return `I'm the proto of ${this.name}`;
    }
};

const handler = 'Hello handler';
export const objectLiteral = {
    name: 'ObjLiteral',
    // __proto__
    __proto__: theProtoObj,
    // Abreviatura de "handler: handler"
    handler,
    // Métodos
    toString() {
        // Llamadas a super
        return 'd ' + super.toString();
    },
    // Nombres de propiedad calculados (dinámicos)
    ['prop_' + (() => 42)()]: 42
};
