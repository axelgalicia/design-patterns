import { RadioState } from './RadioState';

export class Radio {

    private state: RadioState;

    constructor(state: RadioState) { 
        this.state = state;
        state.setRadio(this);
    }

    turnOn() {
        this.state.turnOn();
    };
    
    turnOff() {
        this.state.turnOff();
    };

}