import { Radio } from './Radio';
import { RadioState } from './RadioState';

export class RadioStateOn implements RadioState {
    private radio: Radio;

    setRadio(radio: Radio): void {
        this.radio = radio;
    }

    turnOn(): void {
        console.log('Radio is already on');
    }

    turnOff(): void {
        console.log('Radio will turn off now');
    }
}