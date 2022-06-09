import {Rectangle} from "./Rectangle";
import { Resizeable } from "./Risizeable";


export class Square extends  Rectangle implements Resizeable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    calculateArea( ) {
        return this.width* this.width
    }
    calculatePerimeter() {
       return this.width * 4 
    }
    risize(percent:number):number {
        this.width *= percent;
        return this.calculateArea() , this.calculatePerimeter();
    }
}