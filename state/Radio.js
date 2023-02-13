"use strict";
exports.__esModule = true;
exports.Radio = void 0;
var RadioStateOff_1 = require("./RadioStateOff");
var Radio = /** @class */ (function () {
    function Radio() {
        this.state = new RadioStateOff_1.RadioStateOff(this);
    }
    Radio.prototype.turnOn = function () {
        this.state.turnOn();
    };
    ;
    Radio.prototype.turnOff = function () {
        this.state.turnOff();
    };
    ;
    Radio.prototype.tuneInStation = function (station) {
        this.state.tuneInStation(station);
    };
    Radio.prototype.changeState = function (state) {
        this.state = state;
    };
    Radio.prototype.getState = function () {
        return this.state;
    };
    return Radio;
}());
exports.Radio = Radio;
