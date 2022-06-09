import { Square } from './Square';
import { Resizeable } from './Risizeable';
import {Circle} from "./Circle"
import {Rectangle} from "./Rectangle"

let circle = new Circle('Abc',10)
let rect = new Rectangle(15,10,'dad')
let square = new Square('đa',15)

let arayShape : any[] = [];
arayShape.push(circle)
arayShape.push(rect)
arayShape.push(square)

arayShape.forEach((arayShape,index )=> {
    console.log(arayShape);
    console.log(arayShape.calculatePerimeter());
    console.log(arayShape.calculateArea());
})

let percent = Math.random()*100;
circle.risize(percent)
rect.risize(percent)
square.risize(percent)

