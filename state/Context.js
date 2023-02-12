"use strict";
exports.__esModule = true;
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(state) {
        this.state = state;
        state.setContext(this);
    }
    Context.prototype.turnOn = function () {
        this.state.turnOn();
    };
    ;
    Context.prototype.turnOff = function () {
        this.state.turnOff();
    };
    ;
    return Context;
}());
exports.Context = Context;
