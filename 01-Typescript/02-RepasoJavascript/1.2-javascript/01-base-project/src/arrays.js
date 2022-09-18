export function manageArrays() {
    console.log('----------------- Arreglos ------------------');
    // Inicializar un array
    const names = new Array('Juanjo', 'Pablo', 'Laura');
    const cars = ['Renual', 'Peugeot', 'Audi'];
    const drivers = [
        { name: 'Juanjo', car: 'Peugeot', age: 41 },
        { name: 'Laura', car: 'Audi', age: 36 },
        { name: 'Pablo', car: 'Volkswagen', age: 33 },
        { name: 'Sofia', car: 'Mercedes', age: 23 },
        { name: 'Leonardo', car: 'Volkswagen', age: 28 }
    ];
    const mix = [...names, ...cars, ...drivers, 'Any', 15, ()=> undefined];
    const empty = new Array(10);

    // Inicialización dinamica
    const evens = Array.from({ length: 10 }, (_, index) => index * 2);

    // Tamaño
    console.log(empty.length);

    // Acceder a elementos por su posición
    console.log(names[1]);

    // Modificar valor de una posición
    names[0] = 'Fernando';

    // Recorrer arreglos.
    // Por indice
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
    // Por valor
    drivers.forEach(driver => {
        console.log(driver);
    });

    // Concatenar arreglos.
    const carsAndNames = cars.concat(names);
    console.log(cars, names, carsAndNames);
    const carsAndNames2 = [...cars, ...names];

    // Concatenar elementos de un arreglo
    const carsString = cars.join(', ');
    console.log(`Lista de coches ${carsString}`);

    // Añadir un elemento al final del arreglo
    const stack = [];
    stack.push(1); // [...stack, 1]
    stack.push(2);
    stack.push(3, 4, 5); // [...stack, 3, 4, 5]
    console.log('Stack', stack);

    // Eliminar el último elemento del arreglo
    console.log('Eliminado:', stack.pop(), 'Estado de la pila', stack);

    // Añadir elementos al principio del arreglo
    const queue = [4, 5, 6];
    queue.unshift(3); // [3, ...queue]
    queue.unshift(1, 2); // [1, 2, ...queue]

    // Eliminar el primer elemento de un arreglo
    console.log('Eliminado:', queue.shift(), 'Estado de la cola', queue);

    // Seccionar un arreglo
    console.log('Dos primeros elementos:', names.slice(0, 2));
    console.log('Dos últimos elementos:', names.slice(1));
    console.log('Último elemento:', names.slice(-1));
    console.log(
        'Elemento central',
        names.slice(names.length / 2, names.length / 2 + 1)
    );

    // Girar un arreglo
    console.log('Reverse:', names.reverse(), [1, 2, 3, 4, 5].reverse());

    // Ordenar un arreglo
    console.log('Ordenado por defecto:', [4, 2, 5, 9, 7].sort());
    const predicateAsc = (first, second) => {
        // first < second => -
        // first > second => +
        // first == second => 0
        if (first.name < second.name) return -1;
        if (first.name > second.name) return 1;
        return 0;
    };
    console.log('Orden Ascendente:', drivers.sort(predicateAsc));
    const predicateDesc = (first, second) => {
        if (first.name < second.name) return 1;
        if (first.name > second.name) return -1;
        return 0;
    };
    console.log('Orden Descendente:', drivers.sort(predicateDesc));

    // Buscar en el arreglo
    // El índice
    console.log(
        'Buscar índice',
        names,
        'Laura',
        names.indexOf('Laura'),
        'Fernando',
        names.indexOf('Fernando'),
        'Ernesto:',
        names.indexOf('Ernesto')
    );
    const predicateDrivers = (element, index) => {
        console.log('Conductor ', element.name, 'está en', index);
        if (element.name === 'Laura') return true;
        return false;
    };
    // El elemento
    console.log('Buscar conductor', drivers.find(predicateDrivers));

    // Filtrar el arreglo
    const olderDriversPredicate = driver => driver.age > 30;
    const olderDrivers = drivers.filter(olderDriversPredicate);
    console.log('Conductores de +30', olderDrivers);

    // Comprobar el arreglo
    const predicateAllPlus18 = driver => driver.age > 18;
    console.log(
        'Todos los conductores son mayores de edad: ',
        drivers.every(predicateAllPlus18) ? 'Si' : 'No'
    );

    const predicateSomeDriverIs41 = driver => driver.age === 41;
    console.log(
        'Algún conductor tiene 41 años:',
        drivers.some(predicateSomeDriverIs41) ? 'Si' : 'No'
    );

    console.log(
        'Algún nombre es Laura:',
        names.includes('Laura') ? 'Si' : 'No'
    );

    function findLaura() {
        return drivers.find(driver => driver.name === 'Laura') || 'No existe';

        return ;
    }

    // Transformar el arreglo
    // Mapear
    const tranformationFunction = (element, index, array) => {
        let points = element.age > 26 ? 15 : 12;
        return { ...element, points };
        // {name, age} => {name, age, points(12|15)}
    };
    const driverWithPoints = drivers.map(tranformationFunction);
    console.log('Conductores con puntos:', driverWithPoints);

    // Reducir
    const reductionFunction = (accumulated, element, index, array) => {
        if (element.age > 26) accumulated[0]++;
        else accumulated[1]++;
        return accumulated;
    };
    const ageGroup = drivers.reduce(reductionFunction, [0, 0]);
    console.log(
        `Conductores jóvenes: ${ageGroup[1]}\nConductores veteranos: ${ageGroup[0]}`
    );

    console.log('----------------- Arreglos ------------------\n\n');
}
