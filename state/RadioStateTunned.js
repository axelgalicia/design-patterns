"use strict";
exports.__esModule = true;
exports.RadioStateTunned = void 0;
var RadioStateOff_1 = require("./RadioStateOff");
var RadioStateTunned = /** @class */ (function () {
    function RadioStateTunned(radio) {
        this.radio = radio;
        this.radio = radio;
    }
    RadioStateTunned.prototype.turnOn = function () {
        console.log('Radio is already on');
    };
    RadioStateTunned.prototype.turnOff = function () {
        console.log('Turning Radio Off');
        this.radio.changeState(new RadioStateOff_1.RadioStateOff(this.radio));
    };
    RadioStateTunned.prototype.tuneInStation = function (station) {
        if (this.station === station) {
            console.log("Already tunned in ".concat(station, " station"));
        }
        else {
            console.log("Tunning Radio to ".concat(station, " station"));
            this.station = station;
        }
    };
    return RadioStateTunned;
}());
exports.RadioStateTunned = RadioStateTunned;
