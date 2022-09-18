export function manageCollections() {
    console.log('-------------- MAP ----------------');
    // Map
    const sayings = new Map();

    sayings.set('dog', 'woof');
    sayings.set('cat', 'meow');
    sayings.set('elephant', 'toot');
    sayings.size; // 3

    // Recuperar valor mediante clave
    sayings.get('dog'); // woof
    sayings.get('fox'); // undefined

    // Comprobar clave
    sayings.has('bird'); // false
    sayings.delete('dog');
    sayings.has('dog'); // false

    // Recorrer mapa
    for (let [key, value] of sayings) {
        console.log(key + ' goes ' + value);
    }
    // "cat goes meow"
    // "elephant goes toot"

    // Claves
    console.log('Claves:', sayings.keys());
    console.log('Valores:', sayings.values());

    // Limpiar mapa
    sayings.clear();
    sayings.size; // 0
    console.log('-------------- MAP ----------------\n\n');

    console.log('-------------- WEAKMAP ----------------');
    // Map
    const weakSayings = new WeakMap();

    // weakSayings.set('dog', 'woof'); // Error
    const keyDog = new String('dog');
    weakSayings.set(keyDog, 'woof');
    const keyCat = new String('cat');
    weakSayings.set(keyCat, 'meow');
    weakSayings.size; // undefiend, no sabemos su tamaño

    // Recuperar valor mediante clave
    console.log(weakSayings.get(keyDog)); // woof
    weakSayings.get(new String('fox')); // undefined

    // Comprobar clave
    weakSayings.has(new String('bird')); // false
    weakSayings.delete(keyDog);
    weakSayings.has(keyDog); // false

    // No se puede recorrer un WeakMap
    // for (let [key, value] of weakSayings) {
    //     console.log(key + ' goes ' + value);
    // }
    // console.log('Claves:', weakSayings.keys());
    // console.log('Valores:', weakSayings.values());

    // No se puede limpiar
    // weakSayings.clear();
    console.log('-------------- WEAKMAP ----------------\n\n');

    console.log('-------------- SET ----------------');
    const uniqueCollection = new Set();

    // Añadir elementos
    uniqueCollection.add(5);
    uniqueCollection.add(6);
    console.log('Elementos contenidos:', uniqueCollection.size);
    uniqueCollection.add(5);

    // Elemnto de la collection
    console.log('Elemento 0', uniqueCollection[0]);

    // Tamaño de la coleccion
    console.log('Elementos contenidos:', uniqueCollection.size);
    console.log('Tiene un 6:', uniqueCollection.has(6));

    // Recorrer elementos
    for (let item of uniqueCollection) console.log('Elementos:', item);

    // Eliminar elementos
    uniqueCollection.delete(6);

    // Eliminar duplicados de un array
    const duplicates = [1, 2, 3, 4, 3, 5, 7, 2, 1];
    const filtered = new Set(duplicates);
    console.log('Array filtrado', [...filtered]);

    console.log('-------------- SET ----------------\n\n');
}
