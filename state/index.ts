import { Radio } from './Radio';
import { RadioStateOff } from './RadioStateOff';

const initialState = new RadioStateOff();
const context = new Radio(initialState);
context.turnOn();
context.turnOff();
context.turnOff();
