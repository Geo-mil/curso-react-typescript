// Declaración de una función
function nombreDeLaFuncion(parametro1, paramatro2) {
    const valorDevuelto = parametro1 + paramatro2;
    return valorDevuelto;
}

// Paso de parámetros
export function manageObjectParam() {
    console.log('---------- manageObjectParam ------------');
    function doNotChangeObject(obj) {
        obj = { name: 'Pepe' };
        console.log('Inside function', obj);
    }
    let obj = { name: 'Juanjo' };
    console.log('Object before function', obj);
    doNotChangeObject(obj);
    console.log('Object after function', obj);

    console.log('---------- mutations ------------');

    function changeObject(obj) {
        obj.name = 'Pepe';
        console.log('Inside function', obj);
    }
    obj = { name: 'Juanjo' };
    console.log('Object before function', obj);
    changeObject(obj);
    console.log('Object after function', obj);
    console.log('---------- manageObjectParam ------------\n\n');
}

// Función como expresión
export function functionExpressions() {
    console.log('---------- functionExpressions ------------');
    const square = function square(value) {
        return value * value;
    };

    const double = function doubleValues(value) {
        return 2 * value;
    };

    // Anónima
    const sqrt = function (value) {
        return Math.sqrt(value);
    };

    function operateValues(operation) {
        for (let i = 1; i < 10; i++) {
            // Como son objetos pueden tener propiedades como name
            console.log(`[${operation.name}] of ${i}`, operation(i));
        }
    }

    operateValues(square);
    operateValues(double);
    operateValues(sqrt);
    // Función anónima
    operateValues(function (value) {
        return value + 2;
    });
    console.log('---------- functionExpressions ------------\n\n');
}

// Función recursiva
export function factorial(value) {
    if (value === 0 || value === 1) return 1;
    else return value * factorial(value - 1);
}
// IIFE
(function factorial(value) {
    if (value === 0 || value === 1) return 1;
    else return value * factorial(value - 1);
})(7);
