"use strict";
exports.__esModule = true;
exports.RadioStateOff = void 0;
var RadioStateOn_1 = require("./RadioStateOn");
var RadioStateOff = /** @class */ (function () {
    function RadioStateOff(radio) {
        this.radio = radio;
        this.radio = radio;
    }
    RadioStateOff.prototype.turnOn = function () {
        console.log('Turning Radio On');
        this.radio.changeState(new RadioStateOn_1.RadioStateOn(this.radio));
    };
    RadioStateOff.prototype.turnOff = function () {
        if (this.radio.getState() === this) {
            console.log('Radio is already off');
        }
        else {
            console.log('Turning Radio Off');
        }
    };
    RadioStateOff.prototype.tuneInStation = function (station) {
        console.log('Radio is off, cannot tune any station');
    };
    return RadioStateOff;
}());
exports.RadioStateOff = RadioStateOff;
