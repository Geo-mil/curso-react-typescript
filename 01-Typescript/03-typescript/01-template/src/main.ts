import { showVersion } from './lib';
const version = showVersion();
console.log('Introducción a Typescript:', version.versionText);

function callFn<T extends unknown[]>(
    callback: (...params: T) => void,
    ...args: T
) {
    callback(...args);
}

function printMessage(messsage: string, age: number, flag: boolean) {
    console.log(messsage, age, flag);
}

function printMessage2(
    messsage: string,
    age: number,
    flag: boolean,
    flag2: boolean
) {
    console.log(messsage, age, flag, flag2);
}
callFn(printMessage2, 'Hola', 20, true, false);
