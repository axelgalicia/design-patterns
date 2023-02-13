import { RadioState } from './RadioState';
import { RadioStateOff } from './RadioStateOff';

export class Radio {

    private state: RadioState;

    constructor() {
        this.state = new RadioStateOff(this);
    }

    turnOn(): void {
        this.state.turnOn();
    };

    turnOff(): void {
        this.state.turnOff();
    };

    tuneInStation(station: number): void {
        this.state.tuneInStation(station);
    }

    changeState(state: RadioState) {
        this.state = state;
    }

    getState(): RadioState {
        return this.state;
    }

}