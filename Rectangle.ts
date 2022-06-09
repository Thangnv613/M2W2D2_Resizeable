import {Shape} from "./Shape";
import { Resizeable } from "./Risizeable";

export  class Rectangle  extends  Shape implements Resizeable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height ;
    }

    calculatePerimeter() {
        return (this.width + this.height) * 2 
    }
    risize(percent: number): number {
        this.width *=percent;
        this.height *= percent;
        return this.calculateArea(), this.calculatePerimeter();
    }
}
