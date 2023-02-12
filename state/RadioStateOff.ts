import { Radio } from './Radio';
import { RadioState } from './RadioState';

export class RadioStateOff implements RadioState {
    private radio: Radio;

    setRadio(radio: Radio): void {
        this.radio = radio;
    }

    turnOn(): void {
        console.log('Radio will turn on now');
    }

    turnOff(): void {
        console.log('Radio is already off');
    }
}