// Herencia usando Funciones constructoras
// Superclase
function Vehicle(manufacturer) {
    this.manufacturer = manufacturer;
}
// Métodos de la superclase
Vehicle.prototype.start = function () {
    console.log('Iniciar Vehiculo', this.manufacturer);
};

// Clase hija coche
function Car(manufacturer, model) {
    Vehicle.call(this, manufacturer); // Llamada super
    this.model = model;
}

// Herencia
Car.prototype = Object.create(Vehicle.prototype);

// Metodos de la clase hija
Car.prototype.run = function () {
    this.start();
    console.log('Running', this.manufacturer, this.model);
};

// Clase hija avion
function Airplane(manufacturer, model) {
    Vehicle.call(this, manufacturer); // Llamada super
    this.model = model;
}

// Herencia
Airplane.prototype = Object.create(Vehicle.prototype);

// Metodos de la clase hija
Airplane.prototype.fly = function () {
    this.start();
    console.log('Flying', this.manufacturer, this.model);
};

export function manageInheritanceFC() {
    console.log(
        '------------ Inheritance Function Constructor ---------------'
    );
    const coche = new Car('Renault', 'Megane');
    coche.run();

    const avion = new Airplane('Boeing', '747');
    avion.fly();
    console.log(
        '------------ Inheritance Function Constructor ---------------\n\n'
    );
}

const Vehicle2 = {
    init(manufacturer) {
        this.manufacturer = manufacturer;
    },
    start() {
        console.log('Iniciar Vehiculo', this.manufacturer);
    }
};

// Herencia
const Car2 = Object.create(Vehicle2);

Car2.init = function (manufacturer, model) {
    Vehicle2.init.call(this, manufacturer); // Llamada super
    this.model = model;
};

Car2.run = function () {
    this.start();
    console.log('Running', this.manufacturer, this.model);
};

const Airplane2 = Object.create(Vehicle2);

Airplane2.init = function (manufacturer, model) {
    Vehicle2.init.call(this, manufacturer); // Llamada super
    this.model = model;
};

Airplane2.fly = function () {
    this.start();
    console.log('Flying', this.manufacturer, this.model);
};

export function manageInheritanceLO() {
    console.log('------------ Inheritance Linked Objects ---------------');
    const coche = Object.create(Car2);
    coche.init('Renault', 'Megane');
    coche.run();

    const avion = Object.create(Airplane2);
    avion.init('Boeing', '747');
    avion.fly();
    console.log('------------ Inheritance Linked Objects ---------------\n\n');
}
