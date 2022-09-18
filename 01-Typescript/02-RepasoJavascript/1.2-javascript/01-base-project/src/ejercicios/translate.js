import chalk from 'chalk';
import readLine from 'readline';

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const week = {
    lunes: 'monday',
    martes: 'tuesday',
    miercoles: 'wednesday',
    jueves: 'thursday',
    viernes: 'friday',
    sabado: 'saturday',
    domingo: 'sunday'
};

console.log('Dia de la semana (q cancelar): ');
input.on('line', daySelected => {
    if (daySelected === 'q') {
        process.kill(process.pid, 'SIGTERM');
        return;
    }
    let output = '';
    for (const day in week) {
        if (day == daySelected) output += chalk.blue(week[day]);
        else output += chalk.red(week[day]);
        output += chalk.green(' - ');
    }
    console.log(output);
    console.log('\nDia de la semana (q cancelar): ');
});

process.on('SIGTERM', () => {
    input.close();
    console.log(chalk.yellowBright('Good Bye!'));
});
