"use strict";
exports.__esModule = true;
exports.RadioStateOff = void 0;
var RadioStateOff = /** @class */ (function () {
    function RadioStateOff() {
    }
    RadioStateOff.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    RadioStateOff.prototype.turnOn = function () {
        console.log('Radio will turn on now');
    };
    RadioStateOff.prototype.turnOff = function () {
        console.log('Radio is already off');
    };
    return RadioStateOff;
}());
exports.RadioStateOff = RadioStateOff;
