"use strict";
exports.__esModule = true;
exports.RadioOff = void 0;
var RadioOff = /** @class */ (function () {
    function RadioOff() {
    }
    RadioOff.prototype.setContext = function (context) {
        this.context = context;
    };
    RadioOff.prototype.turnOn = function () {
        console.log('Radio will turn on now');
    };
    RadioOff.prototype.turnOff = function () {
        console.log('Radio is already off');
    };
    return RadioOff;
}());
exports.RadioOff = RadioOff;
