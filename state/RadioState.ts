import { Radio } from './Radio';

export interface RadioState {
    setRadio(Radio: Radio): void;
    turnOn(): void;
    turnOff(): void;
}