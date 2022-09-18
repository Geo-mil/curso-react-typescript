function* fibonacci() {
    let a = 0;
    let b = 1;
    let msg = '';
    while (true) {
        console.log(a, b);
        msg = yield a;
        [a, b] = [b, a + b];
        console.log('Msg;', msg);
    }
}

const f = fibonacci();
// El valor pasado al primer next es ignorado
console.log(f.next('a'));
console.log(f.next('b'));
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next('z'));

function* createNumbers() {
    let n = 0;
    while (n < 5) {
        yield n++;
    }
    return 10;
}

console.log('\n\n');

const n = createNumbers();
console.log(n.next()); // { value: 0, done: false }
console.log(n.next()); // { value: 1, done: false }
console.log(n.next()); // { value: 2, done: false }
console.log(n.next()); // { value: 3, done: false }
console.log(n.next()); // { value: 4, done: false }
console.log(n.next()); // { value: 10, done: true } => Es el valor de return
console.log(n.next()); // { value: undefined, done: true }
console.log(n.next()); // { value: undefined, done: true }

// Solo recorre valores mientras done es false
for (const n of createNumbers()) console.log(n); // 0, 1, 2, 3, 4

/// Errores
function* createError() {
    let n = 0;
    while (n < 5) {
        yield n++;
    }
    throw new Error('Boom');
}

console.log('\n\n');

const err = createError();
console.log(err.next()); // { value: 0, done: false }
console.log(err.next()); // { value: 1, done: false }
console.log(err.next()); // { value: 2, done: false }
console.log(err.next()); // { value: 3, done: false }
console.log(err.next()); // { value: 4, done: false }
try {
    console.log(err.next()); // throw Boom
} catch (e) {
    console.log('Error capturado:', (e as Error).message);
}

console.log('\n\n\n');
const MyNumber = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }
};
for (const mn of MyNumber) {
    console.log('MN', mn);
}

console.log('\n\n\n');
const MyNumberManual = {
    [Symbol.iterator]() {
        let currentValue = -1;
        return {
            next() {
                currentValue++;
                if (currentValue < 10)
                    return { value: currentValue, done: false };
                return { value: 11, done: true };
            }
        };
    }
};
for (const mnm of MyNumberManual) {
    console.log('MNM', mnm);
}
