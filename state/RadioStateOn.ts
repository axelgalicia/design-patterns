import { Radio } from './Radio';
import { RadioState } from './RadioState';
import { RadioStateOff } from './RadioStateOff';
import { RadioStateTunned } from './RadioStateTunned';

export class RadioStateOn implements RadioState {

    constructor(private radio: Radio) {
        this.radio = radio;
    }

    turnOn(): void {
        if (this.radio.getState() === this) {
            console.log('Radio is already On');
        } else {
            console.log('Turning Radio On');
        }
    }

    turnOff(): void {
        console.log('Turning Radio Off');
        this.radio.changeState(new RadioStateOff(this.radio));
    }

    tuneInStation(station: number): void {
        this.radio.changeState(new RadioStateTunned(this.radio));
        this.radio.tuneInStation(station);
    }
}