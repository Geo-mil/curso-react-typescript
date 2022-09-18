export function manageObjects() {
    console.log('------------- Objects --------------');
    // Declaración literal
    const user = {
        name: '[DE] Juanjo',
        age: 41,
        setName(name) {
            this.name = name;
        },
        setAge: function (age) {
            this.age = age;
        },
        toString: function toString() {
            return `${this.name} is ${this.age}`;
        }
    };
    console.log('\nUser declaration', user['toString']());
    user.setAge(42);
    console.log('User declaration After set', user.toString());

    // Desde Object
    const noUser = new Object(); // = {};
    noUser.name = '[NO] Juanjo';
    noUser['age'] = 41;
    Object.defineProperties(noUser, {
        setName: {
            value: function (name) {
                this.name = name;
            }
        },
        setAge: {
            value: function (age) {
                this.age = age;
            }
        }
    });
    noUser.toString = function () {
        return `${this.name} is ${this.age}`;
    };
    console.log('\nUser new Object', noUser.toString());
    noUser.setAge(42);
    console.log('User new Object After set', noUser.toString());

    // Desde función constructora
    function User(name, age) {
        this.name = name;
        this.age = age;

        this.setName = name => {
            this.name = name;
        };

        this.setAge = age => {
            this.age = age;
        };

        this.getName = () => this.name;
        this.getAge = () => this.age;

        this.toString = () => `${this.name} is ${this.age}`;
    }
    const fcUser = new User('FC Juanjo', 41);
    console.log('\nUser function constructor', fcUser.toString());
    fcUser.setAge(42);
    console.log('User function constructor After set', fcUser.toString());

    // Getters y Setters
    const car = {
        name: 'Peugeot',
        get model() {
            return this.name;
        },
        set model(model) {
            this.name = this.name + ' ' + model;
        }
    };
    console.log('\nCar', car.model);
    car.model = '5008';
    console.log('Car', car.model);

    // Eliminar e Iterar
    console.log('\nVehicles:');
    const vehicles = {
        peugeot: { model: '5008' },
        chevrolet: { model: 'aveo' },
        citroen: { model: 'xsara' },
        renault: { model: 'megane' }
    };

    for (const vehicle in vehicles) {
        console.log(vehicle, vehicles[vehicle].model);
    }

    console.log('\n Eliminar Citroen\n');
    delete vehicles.citroen;

    for (const vehicle in vehicles) {
        console.log(vehicle, vehicles[vehicle].model);
    }

    console.log('------------- Objects --------------\n\n');
}
