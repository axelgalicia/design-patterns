import { Radio } from './Radio';

export interface RadioState {
    turnOn(): void;
    turnOff(): void;
    tuneInStation(station: number): void;
}