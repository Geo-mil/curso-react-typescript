// import global
import * as AllContent from './lib1';
// Importacion por nombre
import {doSomething, doAnotherThing} from './lib1';

// import global con default y por nombre
import AllThings, {printMe, sayHi} from './lib2';

AllThings.sayHi();
AllThings.printMe();

sayHi();

printMe();


AllContent.doSomething();
AllContent.doAnotherThing();

doSomething();
doAnotherThing();
