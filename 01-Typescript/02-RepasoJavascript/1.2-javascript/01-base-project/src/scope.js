const globalScope = 'Global Scope\n';

export function scopes() {
    const mainFunctionScope = 'Main Function\n';
    const shadowed = 'Shadowed in Main Function\n';

    function innerFunction() {
        const innerFunctionScope = 'Inner Function Scope\n';
        const shadowed = 'Shadowed in Inner Function\n';

        function deepFunction() {
            const deepFunctionScope = 'Deep Fuction Scope\n';
            console.log(
                '---------- Scopes ------------\n',
                deepFunctionScope,
                innerFunctionScope,
                mainFunctionScope,
                globalScope,
                shadowed,
                '---------- Scopes ------------\n\n'
            );
        }

        deepFunction();
    }

    innerFunction();
}
