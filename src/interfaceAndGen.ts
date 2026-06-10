// interface -> to shape your data and obj

interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}
const masala: Chai={
    flavour: "masala",
    price: 30,
};

// readonly
interface Shop {
    readonly id: number
    name:string
}
const s: Shop = {id:1, name: "Chaicode caffe"}
// s.id = 2

interface DiscountCalculator{
    (price:number): number
}
const p: DiscountCalculator =(p)=> p*0.5;

// methods in interface
interface TeaMachine{
    start(): void;
    stop(): void;
}
const machine: TeaMachine={
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    },
}

// index signature
interface ChaiRatings{
    [flavour:string]: number;
}
const ratings: ChaiRatings={
    masala: 4.5,
    ginger: 4.6
}

// libraries (interface merge)
interface User{
    name: string
} // suppose coming from libraries
interface User{
    age:number
}
const u: User = {
    name: "Rishu",
    age: 42
}

// extending interfacae ->

interface A {a: string}
interface B {b: string}

interface C extends A, B {}