class Diccionario<K, V> {
    private _diccionario: Map<K, V>;

    constructor() {
        this._diccionario = new Map<K, V>();
    }

    get(clave: K): V | null {
        return this._diccionario.get(clave) ?? null;
    }

    set(clave: K, valor: V): void {
        this._diccionario.set(clave, valor);
    }

    merge(diccionario: Diccionario<K, V>): void {
        diccionario._diccionario.forEach((valor, clave) => {
            this.set(clave, valor);
        });
    }

    static from<K, V>(diccionario: Diccionario<K, V>): Diccionario<K, V> {
        const resultado = new Diccionario<K, V>();
        resultado.merge(diccionario);
        return resultado;
    }
}

const translate = new Diccionario<string, string>();
translate.set('play', 'jugar');
translate.set('learn', 'aprender');

const periodicTable = new Diccionario<string, number>();
periodicTable.set('H', 1);
periodicTable.set('He', 2);
periodicTable.set('Li', 3);

const clone = Diccionario.from(periodicTable);
clone.get('H');
