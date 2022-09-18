import {
    hoistingSample,
    manualHoisting,
    referenceError,
    referenceErrorWithLet
} from './hoisting';
import { objectLiteral } from './literal-object';
import { flows, tryflow, loops } from './flows';
import { manageObjectParam, functionExpressions, factorial } from './functions';
import { scopes } from './scope';
import { userDB, pow } from './closures';
import { parameters, ConstructorFunction } from './parameters';
import { manageObjects } from './objects';
import { manageJSON } from './json-objects';
import { manageInheritanceFC, manageInheritanceLO } from './inheritance';
import { manageClasses, manageClassInheritance } from './clases';
import { manageArrays } from './arrays';
import { manageCollections } from './collectios';
import { managePromises, asynAwaitSamples, githubUser } from './promises';

console.log('Introducción a JS:', showVersion());

// hoistingSample();
// manualHoisting();
// referenceError();
// referenceErrorWithLet();

// console.log(
//     'Literal Object',
//     '\nhandler: ',
//     objectLiteral.handler,
//     '\nproto:',
//     objectLiteral.printMe(),
//     '\nCalculated prop',
//     objectLiteral.prop_42,
//     '\nObject',
//     objectLiteral
// );

// flows();
// flows(null);
// flows(NaN);
// flows(25);

// tryflow(5);
// tryflow(0);

// loops();

// manageObjectParam();
// functionExpressions();
// console.log('Factorial de 5 es', factorial(5));

// scopes();

// function manageUsers() {
//     console.log('---------- Closures -----------');
//     const userApi = userDB();

//     console.log('Users: ', userApi.getUsers());

//     userApi.addUser('Juanjo', 41);
//     userApi.addUser('Pablo', 33);
//     userApi.addUser('Laura', 36);
//     console.log('Users after add: ', userApi.getUsers());

//     userApi.delUser('Pablo');
//     console.log('Users after del: ', userApi.getUsers());

//     console.log('User Juanjo', userApi.getUser('Juanjo'));

//     console.log('---------- Closures -----------\n\n');
// }
// manageUsers();

// console.log('--------- Currying -------------');
// const powOf2 = pow(2);
// console.log('8e2:', powOf2(8));
// console.log('16e2', powOf2(16));
// console.log('32e2', powOf2(32));

// const powOf16 = pow(16);
// console.log('1e16:', powOf16(1));
// console.log('2e16', powOf16(2));
// console.log('3e16', powOf16(3));
// console.log('--------- Currying -------------\n\n');

// console.log('--------- Parameters -------------');
// const params = parameters();
// params.countArguments('Hello', 'World', 'In', 'JavaScript');
// params.defaultArguments('Juanjo');
// params.defaultArguments();
// params.restArguments(1, 2, 3, 4, 5, 6, 7);
// console.log('--------- Parameters -------------\n\n');

// IIFE
// (function iife() {
//     console.log('---------- Closures -----------');
//     const userApi = userDB();

//     console.log('Users: ', userApi.getUsers());

//     userApi.addUser('Juanjo', 41);
//     userApi.addUser('Pablo', 33);
//     userApi.addUser('Laura', 36);
//     console.log('Users after add: ', userApi.getUsers());

//     userApi.delUser('Pablo');
//     console.log('Users after del: ', userApi.getUsers());

//     console.log('User Juanjo', userApi.getUser('Juanjo'));

//     console.log('---------- Closures -----------\n\n');
// })();

// console.log('--------- Constructor -------------');
// const user = new ConstructorFunction('Juanjo', 41);
// console.log('User', user.toString());
// user.setAge(42);
// console.log('User after birthday', user.toString(), user.getAge());

// const youger = new ConstructorFunction('Pedro', 21);
// console.log('Youger', youger.toString());
// youger.setAge(22);
// console.log('Youger after birthday', youger.toString(), youger.getAge());
// console.log('--------- Constructor -------------\n\n');

// manageObjects();

// manageJSON();

// manageInheritanceFC();
// manageInheritanceLO();

// manageClasses();
// manageClassInheritance();

// manageArrays();
// manageCollections();

// managePromises();
// asynAwaitSamples();
githubUser();
