"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(name, width) {
        super(width, width, name);
    }
    calculateArea() {
        return this.width * this.width;
    }
    calculatePerimeter() {
        return this.width * 4;
    }
    risize(percent) {
        this.width *= percent;
        return this.calculateArea(), this.calculatePerimeter();
    }
}
exports.Square = Square;
