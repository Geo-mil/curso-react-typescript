import chalk from 'chalk';
import readLine from 'readline';

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Año (q cancelar): ');
input.on('line', year => {
    if (year === 'q') {
        process.kill(process.pid, 'SIGTERM');
        return;
    }

    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        console.log(chalk.blue(year + ' es bisiesto'));
    } else {
        console.log(chalk.red(year + ' no es bisiesto'));
    }

    console.log('\nAño (q cancelar): ');
});

process.on('SIGTERM', () => {
    input.close();
    console.log(chalk.yellowBright('Good Bye!'));
});
