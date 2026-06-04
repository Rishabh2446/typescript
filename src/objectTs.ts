const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

// object defining
let tea: {
    name:string;
    price:number;
    isHot:boolean;
}
tea = {
    name: "elaichi tea",
    price: 25,
    isHot: true,
}
// object defining with array->
type Tea = {
    name:string;
    price:number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 23,
    ingredients:["cheeni", "chaipatti"]
}

//duck typing->
type Cup = {size:string};
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material:"steel"}
smallCup = bigCup // it does not produce error even it added a new property as material

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee

type User= {
    username: string;
    password: string; 
}
const u: User = {
    username: "chaicode",
    password: "123", // cant be missing
}

// split out data types->

type Item= {name: string, quantity: number}
type Address= {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

// const updateChai = (updates: Partial<Chai>)=>{
//     console.log("Updating chai with", updates);
// }
// // optional make it option to provide one , two or empty
// updateChai({price: 25})
// updateChai({isHot: false})
// updateChai({})

type ChaiOrder = {
    name?: string;
    quantity?: number
}
const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order);
}
// required property make the required values even all the properties which belongs to the objects
placeOrder({
    name: "Masala Chai",
    quantity: 3
})

// pick to use selected 
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredient: string[];
}
type BasicChaiInfo = Pick<Chai, "name" | "price">;
const chaiInfo: BasicChaiInfo={
    name: "Lemon Tea",
    price: 20,
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredient: string;
}

type PublicChai = Omit<Chai, "secretIngredient">;
// you can avoid secretIngredient