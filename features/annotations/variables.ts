///THESE ARE ALL TYPE ANNOTATIONS

let apples: number = 5;
apples = 10;
// apples = "string"; error because this can only be a number

let speed: string = "fast";
// speed = 10; error because this can only be a string

let hasName: boolean = true;

let nothing: null = null;

let notSure: undefined = undefined;

/**
 * built in objects
 */
let now: Date = new Date();

//Array

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//CLASSES

class Car {}

let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
//this is the annotation for function ((i: number) => void)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(2);

/**
 * When to uuse annotations
 * 1) function that returns the "any" type
 */

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(json);
