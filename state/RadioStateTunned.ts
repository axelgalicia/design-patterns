import { Radio } from './Radio';
import { RadioState } from './RadioState';
import { RadioStateOff } from './RadioStateOff';

export class RadioStateTunned implements RadioState {

    private station: number;

    constructor(private radio: Radio) {
        this.radio = radio;
    }

    turnOn(): void {
        console.log('Radio is already on');
    }

    turnOff(): void {
        console.log('Turning Radio Off');
        this.radio.changeState(new RadioStateOff(this.radio));
    }

    tuneInStation(station: number): void {
        if (this.station === station) {
            console.log(`Already tunned in ${station} station`);
        } else {
            console.log(`Tunning Radio to ${station} station`);
            this.station = station;
        }
    }
}