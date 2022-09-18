import { AULib } from './lib';

export class AUClass implements AULib {
    get(): string {
        return 'hello';
    }
    put(item: string): void {
        console.log(item);
    }
}
