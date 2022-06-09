"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const Circle_1 = require("./Circle");
class Cylinder extends Circle_1.Circle {
    constructor(name, radius, height) {
        super(name, radius);
        this.height = height;
    }
    calculateArea() {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }
    calculateVolume() {
        return super.calculateArea() * this.height;
    }
}
exports.Cylinder = Cylinder;
