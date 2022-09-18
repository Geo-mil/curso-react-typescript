import cars from './cars.json';

export function manageJSON() {
    const jsonString =
        '[{"name": "Juanjo", "age": 41}, {"name": "Pablo", "age": 33}, {"name": "Laura", "age": 36}]';

    const users = JSON.parse(jsonString);
    console.log('Users', users);
    console.log('Users serialized', JSON.stringify(users));
    console.log('Cars', cars);

    const carsStr = JSON.stringify(cars);
    const carsWithDates = JSON.parse(carsStr, (key, value) => {
        if (key === 'date') return new Date(value);
        return value;
    });
    console.log('Cars with dates', carsWithDates);
}
