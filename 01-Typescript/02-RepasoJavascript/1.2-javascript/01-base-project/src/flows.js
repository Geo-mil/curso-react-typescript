export function flows(value) {
    console.log('-------- flows ----------');
    if (value) {
        console.log('Value is true', value);
    } else {
        console.log('Value is false', value);
    }

    switch (value) {
        case 0:
            console.log('Value is 0');
            break;
        case NaN:
            console.log('Value is NaN');
            break;
        case '':
            console.log('Value is Empty String');
            break;
        case false:
            console.log('Value is false');
            break;
        case undefined:
            console.log('Value is undefined');
            break;
        case null:
            console.log('Value is null');
            break;
        default:
            console.log('Value is', value);
    }
    console.log('-------- flows ----------\n\n');
}

export function tryflow(myMonth) {
    console.log('-------- tryFlow ----------');
    function getMonthName(mo) {
        mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
        let months = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ];
        if (months[mo]) {
            return months[mo];
        } else {
            throw new Error('Número de mes no válido'); // aquí se usa la palabra clave throw
        }
    }

    try {
        // declaraciones para try
        const monthName = getMonthName(myMonth); // la función podría lanzar una excepción
        console.log('Mes seleccionado', monthName);
    } catch (e) {
        console.log('Error', e.message);
    } finally {
        console.log('-------- tryFlow ----------\n\n');
    }
}

export function loops() {
    console.log('-------- LOOPS ----------');
    for (let i = 0; i < 4; i++) {
        console.log('[FOR] Elemento', i);
    }

    let j = 0;
    do {
        console.log('[DO-WHILE] Elemento', j++);
    } while (j < 4);

    let k = 0;
    do {
        k++;
        if (k === 6) break;
        if (k % 2 === 0) continue;
        console.log('[WHILE] Elemento', k);
    } while (k < 10);

    const week = {
        lunes: 1,
        martes: 2,
        miercoles: 3,
        jueves: 4,
        viernes: 5,
        sabado: 6,
        domingo: 7
    };
    for (let key in week) {
        console.log(`[FOR-IN] ${key}: ${week[key]}`);
    }

    const weekArray = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'domingo'
    ];
    for (const weekDay of weekArray) {
        console.log(`[FOR-OF] Elemento ${weekDay}`);
    }
    console.log('-------- LOOPS ----------\n\n');
}
