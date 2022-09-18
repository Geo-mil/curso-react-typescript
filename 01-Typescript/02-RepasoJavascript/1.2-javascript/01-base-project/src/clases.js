export function manageClasses() {
    console.log('------------ Calsses ES6 -------------------');

    // Declaración de una clase
    class User {}
    const user = new User();
    console.log('Clase:', User.name, ', Instancia:', user);

    // Clase anónima
    const Admin = class {};
    const admin = new Admin();
    console.log('Clase anónima:', Admin.name, ', Instancia:', admin);

    // Constructor y métodos
    class Rectangulo {
        // Constructor
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        // getter
        get area() {
            return this.width * this.height;
        }

        // métodos
        setSize(width, height) {
            this.width = width;
            this.height = height;
        }

        clone() {
            return new Rectangulo(this.width, this.height);
        }

        // métodos státicos
        static copy(rec) {
            return new Rectangulo(rec.width, rec.height);
        }
    }

    const rect = new Rectangulo(6, 8);
    console.log('Área rect:', rect.area);

    const r2 = rect.clone();
    r2.setSize(3, 3);
    console.log('Área r2:', r2.area);
    Rectangulo.copy(rect).setSize(5, 5);
    console.log('------------ Calsses ES6 -------------------\n\n');
}

export function manageClassInheritance() {
    console.log('------------ Inheritance ES6 -------------------\n\n');
    class Vehicle {
        constructor(manufacturer='Sin especificar') {
            this.manufacturer = manufacturer;
        }

        start() {
            console.log('Arrancar vehiculo');
        }

        toString() {
            return `Fabricante: ${this.manufacturer}`;
        }
    }

    class Car extends Vehicle {
        constructor(manufacturer, model) {
            super(manufacturer);
            this.model = model;
        }

        start() {
            super.start();
            console.log('Arrancar coche');
        }

        run() {
            this.start();
            console.log('Inicio de la marcha');
        }

        toString() {
            return `Coche de ${super.toString()} Modelo: ${this.model}`;
        }
    }

    const car = new Car('Renault', 'Megane');
    car.run();
    console.log('Car:', car.toString(), '\n\n');

    class Airplane extends Vehicle {
        constructor(manufacturer, model) {
            super(manufacturer);
            this.model = model;
        }

        start() {
            super.start();
            console.log('Arrancar avión');
        }

        fly() {
            this.start();
            console.log('Despegando');
        }

        toString() {
            return `Avión de ${super.toString()} Modelo: ${this.model}`;
        }
    }

    const airPlane = new Airplane('Boeing', 747);
    
    airPlane.fly();
    console.log('AirPlane:', airPlane.toString(), '\n\n');
    console.log('------------ Inheritance ES6 -------------------\n\n');
}
