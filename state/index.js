"use strict";
exports.__esModule = true;
var Radio_1 = require("./Radio");
var RadioStateOff_1 = require("./RadioStateOff");
var initialState = new RadioStateOff_1.RadioStateOff();
var context = new Radio_1.Radio(initialState);
context.turnOn();
context.turnOff();
context.turnOff();
