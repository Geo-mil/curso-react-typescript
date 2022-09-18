interface MyCustomService {
    execute(): this;
}

class OneService implements MyCustomService {
    execute() {
        return this;
    }
    serviceId() {
        return 'id';
    }
}

const os = new OneService();
console.log(os);
