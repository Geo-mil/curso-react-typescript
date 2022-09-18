console.log('module', require('./module-lib'));
console.log('named', require('./named-lib'));

// Cache de los modulos cargados
// console.log(require.cache);

// contenido de module-lib
console.log(require.resolve('./module-lib'));

// módulo cached
const showUser = require('./cached').showUser;
showUser();

// Modificamos la cache de módulos cargados
require.cache[require.resolve('./module-lib')].exports = {
    name: 'Pepe',
    age: 25
};

// Recupera el módulo desde la cache
const user = require('./module-lib');
console.log('User', user);
showUser();

// Ruta de los módulos
require('./lib/inner/inne-lib').showPath();
