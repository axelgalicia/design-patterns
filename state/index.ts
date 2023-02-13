import { Radio } from './Radio';

const radio = new Radio();
radio.turnOn();
radio.tuneInStation(99.3);
radio.turnOff();
radio.turnOn();
radio.tuneInStation(100.9);
radio.turnOff();
radio.turnOff();
radio.tuneInStation(100.9);
radio.turnOn();
