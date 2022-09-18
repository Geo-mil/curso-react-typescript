export function hoistingSample() {
    console.log('------------- Hoisting -----------');
    console.log('Valor de X', x);
    hello();

    {
        var x = 10;
    }
    console.log('Valor de X tras declaración', x);
    hello();

    function hello() {
        console.log(`Hello with ${x}`);
    }

    console.log('------------- Hoisting -----------\n\n');
}

// Version equivalente
export function manualHoisting() {
    console.log('------------- Manual -----------');
    var x;
    function hello() {
        console.log(`Hello with ${x}`);
    }

    console.log('Valor de X', x);
    hello();

    {
        x = 10;
    }
    console.log('Valor de X tras declaración', x);
    hello();
    console.log('------------- Manual -----------\n\n');
}

export function referenceError() {
    console.log('------------- ReferenceError -----------');
    function hello() {
        console.log(`Hello with ${x}`);
    }

    console.log('Valor de X', x);
    hello();

    x = 10;
    console.log('Valor de X tras declaración', x);
    hello();
    console.log('------------- ReferenceError -----------\n\n');
}

export function referenceErrorWithLet() {
    console.log('------------- ReferenceError (let) -----------');
    console.log('Valor de X', x);
    hello();

    {
        let x = 10;
    }
    console.log('Valor de X tras declaración', x);
    hello();

    function hello() {
        console.log(`Hello with ${x}`);
    }
    console.log('------------- ReferenceError (let) -----------\n\n');
}
