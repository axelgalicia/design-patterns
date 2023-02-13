"use strict";
exports.__esModule = true;
exports.RadioStateOn = void 0;
var RadioStateOff_1 = require("./RadioStateOff");
var RadioStateTunned_1 = require("./RadioStateTunned");
var RadioStateOn = /** @class */ (function () {
    function RadioStateOn(radio) {
        this.radio = radio;
        this.radio = radio;
    }
    RadioStateOn.prototype.turnOn = function () {
        if (this.radio.getState() === this) {
            console.log('Radio is already On');
        }
        else {
            console.log('Turning Radio On');
        }
    };
    RadioStateOn.prototype.turnOff = function () {
        console.log('Turning Radio Off');
        this.radio.changeState(new RadioStateOff_1.RadioStateOff(this.radio));
    };
    RadioStateOn.prototype.tuneInStation = function (station) {
        this.radio.changeState(new RadioStateTunned_1.RadioStateTunned(this.radio));
        this.radio.tuneInStation(station);
    };
    return RadioStateOn;
}());
exports.RadioStateOn = RadioStateOn;
