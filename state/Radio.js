"use strict";
exports.__esModule = true;
exports.Radio = void 0;
var Radio = /** @class */ (function () {
    function Radio(state) {
        this.state = state;
        state.setRadio(this);
    }
    Radio.prototype.turnOn = function () {
        this.state.turnOn();
    };
    ;
    Radio.prototype.turnOff = function () {
        this.state.turnOff();
    };
    ;
    return Radio;
}());
exports.Radio = Radio;
