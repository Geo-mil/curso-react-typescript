import fs from 'fs';
import { promisify } from 'util';
import fetch from 'isomorphic-fetch';

const readFile = promisify(fs.readFile);

export function delayAction(delay = 2000, cb = () => {}) {
    setTimeout(cb, delay);
    // Insertar bug para demostrar garantia una sola entrega
    // setInterval(cb, delay);
}

export function managePromises() {
    // Usando callbacks
    fs.readFile('./package.json', (error, data) => {
        if (error) {
            console.log('Error in file', error);
            return;
        }

        const dataString = data.toString();
        const object = JSON.parse(dataString);
        console.log('fs.readFile File', object.name);
    });
    console.log('Acceso a fichero usando Callback');

    // Usando Promesas
    readFile('./package.json').then(
        data => {
            const dataString = data.toString();
            const object = JSON.parse(dataString);
            console.log('readFile File', object.name);
        },
        error => {
            console.log('Error in file', error);
        }
    );
    console.log('Acceso a fichero usando Promesa');

    // Encadenar Promsas
    Promise.resolve(45)
        .then(value => {
            console.log('Value:', value); // 45
            return value * 2;
        })
        .then(value => {
            // value 90
            return Promise.resolve(value + 10);
        })
        .then(value => {
            // value 100
            console.log('Resultado:', value);
        });
    console.log('Encadenando Promesas');

    // Gestión de errores con las promesas
    Promise.resolve(45)
        .then(value => {
            console.log('Value:', value); // 45
            return value * 2;
        })
        .then(value => {
            // value 90
            throw Error('Boom in the middle of the chain!');
            return Promise.resolve(value + 10);
        })
        .then(value => {
            // value 100
            console.log('Resultado:', value);
        })
        .catch(error => {
            console.log('Capturado error', error.message);
        })
        .then(() => {
            console.log('Recuperados del Boom', 'Al estilo finally');
        });
    console.log('Encadenando Promesas con errores');

    // Crear Promesas
    const p = new Promise((resolve, reject) => {
        // do something
        const dice = 1 + Math.floor(Math.random() * 10);
        if (dice % 2 === 0) return void resolve(dice);
        return reject(new Error(`${dice} in not even`));
    });
    p.then(
        value => {
            console.log('Even value is', value);
        },
        error => {
            console.log('Promise error: ', error.message);
        }
    );
    console.log('Obtener numero par');

    // Crear promesas que envuelvan a api de callbacks
    delayAction(1000, () => {
        console.log('First time');
        delayAction(1000, () => {
            console.log('Second time');
            delayAction(1000, () => {
                console.log('Third time');
            });
        });
    });

    function delayAcionify(delay = 2000) {
        return new Promise(resolve => {
            delayAction(delay, resolve);
        });
    }

    delayAcionify(1000)
        .then(() => {
            console.log('[Promise] First time');
            return delayAcionify(1000);
        })
        .then(() => {
            console.log('[Promise] Second time');
            return delayAcionify(1000);
        })
        .then(() => {
            console.log('[Promise] Third time');
        });

    function readFilePromise(file) {
        return new Promise((resolve, reject) => {
            fs.readFile('./package.json', (error, data) => {
                if (error) return void reject(error);
                return void resolve(data);
            });
        });
    }
    readFilePromise('./package.json').then(
        data => {
            const dataString = data.toString();
            const object = JSON.parse(dataString);
            console.log('readFilePromise File', object.name);
        },
        error => {
            console.log('Error in file', error);
        }
    );
    console.log('Acceso a ficheto usando Wrapper');

    // Concatenar promesas
    const p1 = delayAcionify(1000).then(() => 1);
    const p2 = delayAcionify(3000).then(() => 3);
    // const p3 = delayAcionify(1500).then(() => {
    //     throw new Error('Timeout');
    // });
    Promise.all([p1, p2 /*, p3*/])
        .then(data => console.log('Promise all', data))
        .catch(error => console.log('Promise all Error', error.message));

    // Condición de carrera con Promesas
    Promise.race([p1, p2 /*, p3*/])
        .then(data => console.log('Promise race', data))
        .catch(error => console.log('Promise race Error', error.message));
}

// Notar la marca async en la funcion
export async function asynAwaitSamples() {
    try {
        const data = await readFile('./package.json');
        const dataString = data.toString();
        const object = JSON.parse(dataString);
        console.log('File', object.name);
    } catch (error) {
        console.log('Error in file', error);
    } finally {
        console.log('Fichero procesado o error capturado');
    }

    function delayAcionify(delay = 2000) {
        return new Promise(resolve => {
            delayAction(delay, resolve);
        });
    }
    await delayAcionify();
    console.log('[Async/Await] First time');
    await delayAcionify();
    console.log('[Async/Await] Second time');
    await delayAcionify();
    console.log('[Async/Await] Third time');
}

export async function githubUser() {
    // npm i node-fetch
    try {
        const userResponse = await fetch(
            `https://api.github.com/users/juanjofp`
        );
        const user = await userResponse.json();
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        console.log('Repos de Juanjo', repos.length);
    } catch (error) {
        console.log('Error consultando informacion de', user);
    }
}
