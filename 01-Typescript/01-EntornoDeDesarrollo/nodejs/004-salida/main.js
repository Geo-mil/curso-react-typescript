const fs = require('fs');
const chalk = require('chalk');

// Múltiples parámetros
const x = 1,
    y = 2,
    z = 3;
console.log('Vertex', x, y, z);

// Texto formateado
console.log('My %s has %i years: %o', 'cat', 4.5, Number);

// Traza de la llamada
function innerFunction() {
    console.trace('break point');
}
function outerFunction() {
    innerFunction();
}
outerFunction();

// Cálculo de tiempo
function initDelay() {
    console.time('main process');
    setTimeout(() => {
        console.timeLog('main process');
        setTimeout(() => console.timeEnd('main process'), 1500);
    }, 2500);
}
initDelay();

// Limpia la consola
// setTimeout(console.clear, 5000);

// Ejemplo de Chalk
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

// Enrutar la salida de error
const access = fs.createWriteStream('./api.error.log');
process.stderr.write = access.write.bind(access);

console.error(error('Error!'));
console.log(warning('Warning!'));
