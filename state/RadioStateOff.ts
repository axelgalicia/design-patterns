import { Radio } from './Radio';
import { RadioState } from './RadioState';
import { RadioStateOn } from './RadioStateOn';

export class RadioStateOff implements RadioState {

    constructor(private radio: Radio) {
        this.radio = radio;
    }

    turnOn(): void {
        console.log('Turning Radio On');
        this.radio.changeState(new RadioStateOn(this.radio));
    }

    turnOff(): void {
        if (this.radio.getState() === this) {
            console.log('Radio is already off');
        } else {
            console.log('Turning Radio Off');
        }
    }

    tuneInStation(station: number): void {
        console.log('Radio is off, cannot tune any station');
    }
}