/***
 * @overview
 * Typescript is a type system for javascript
 *
 * A Type: A description of the properties and methods that a variable or object has
 * Primitive Types: number, string, boolean, null, undefined
 * Object Types: functions, objects, arrays, classes
 * Type Annotation: Code that tells Typescript the type
 * Type Inference: Typescript guesses the type
 */

/***
 * @typeAnotations
 * When to use:
 * - When we declare a variable on one line then initialize it later
 * - When we want a variable to have a type that can't be inferred
 * - When a function returns the 'any' type and we need to clarify the value
 */

// annotations

//primitive types
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined

//object types

//Date object
const today: Date = new Date();

//Arrays
let colors: string[] = ['red','blue','green']
let nyNumbers: number[] = [1,2,3,4]
let truths: boolean[] = [true,true,false]
let mixedArray: (string | number)[] = [1,'string']

//Array methods
colors.map((color:string):string =>{
    return color
})

//nested Arrays
let nested: string[][] = [['string','string'],['string','string']]

//tuples
const pepsi:[string,boolean,number] = ['brown',true,40] //js does not have tuples, but typescript can make turn an array into a tuple

//using type to create a tuple
type Drink = [string,boolean,number]
const coke:Drink = ["black",true,40]
const tea:Drink = ["brown",false,10]

//Interfaces
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

//Classes
class Car {

}

let car: Car = new Car();

//Objects

//Object literal
let point: {x: number; y: number} = {
    x:10,
    y:20
}

//Object destructuring
const profile:{name:string,age:number,coords:{lat:number,lng:number},setAge:(age:number)=>void} = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number):void {
        this.age = age
    }
}

const {age}: { age:number } = profile
const {coords:{lat,lng}}:{coords:{lat:number,lng:number}} = profile

//function
//the ugly way
const logNumber: (i:number) => void = (i:number)=>{
    console.log(i)
}
//the better way
const multiply = (i:number,j:number): number =>{
    let b: number = i * j;
    return b
}
//a function variable
let fVariable: (a:number,b:number) => number;

//function declaration
function add(a:number, b:number):number {
    return a + b
}

//a function that never returns
const throwError = (message:string):never =>{
    throw new Error(message)
}

//a function that takes an object as an argument
const logWeather = (forecast: {date:Date, weather:string}):void =>{
    console.log(forecast.date)
    console.log(forecast.weather)
}

//Destructuring and object inside a function
const theWeather = ({date,weather}: {date:Date, weather:string}):void =>{
    console.log(date)
    console.log(weather)
}

//When to use annotation: When a function returns the 'any' type
const json = '{x:10,y:20}' //Type string is inferred, as the variable is declared and initialized on the same line.
const coordinates = JSON.parse(json) //typescript cannot infer the type of the value returned so it assigns 'any'
const typedCoordinates: {x: number, y: number} = JSON.parse(json)

//When to use annotation: When we declare a  variable on one line and initialize it later
let words = ['red','yellow','green'];
let foundword; //Typescript will assign the any type to this declaration
let typedFoundword: boolean;
for( let word in words){
    if(word === 'green'){
        typedFoundword = true
    } else {
        typedFoundword = false
    }

}

//When to use annotation: When a variables type cannot be inferred correctly
let numbers = [-10,-1,-12]
let numberAboveZero: boolean | number = false //type can be either a boolean or number

for (let i =0; i<numbers.length; i++){
    if(numbers[i]>0){
        numberAboveZero = numbers[i]
    }
}
