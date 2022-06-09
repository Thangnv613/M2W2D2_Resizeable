"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(name) {
        this.name = name;
    }
    show() {
        return `I am a shape. My name is ${this.name}`;
    }
}
exports.Shape = Shape;
