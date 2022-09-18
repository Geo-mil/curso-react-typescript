export function parameters() {
    function countArguments() {
        for (let i = 0; i < arguments.length; i++) {
            console.log(`Argument ${i + 1}: ${arguments[i]}`);
        }
        return arguments.length;
    }

    function defaultArguments(name = 'John Doe') {
        console.log(`Hello ${name}`);
    }

    function restArguments(...rest) {
        console.log('Arguments:', rest);
    }

    return {
        countArguments,
        defaultArguments,
        restArguments
    };
}

export function ConstructorFunction(name, age) {
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
