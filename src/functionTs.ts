function makeChai(type: string, cups: number){
    console.log(`making ${cups} cups of ${type}`);
}
makeChai("Masala", 2);

function getChaiPrice():number {
    return 23;
}

function makeOrder(order: string){
    if(!order) return null;
    return order;
}

function logChai(): void{
    console.log("Chai");
}

// function orderChai(type?:string) {
//     // now the type is optional 
// }

function orderChai(type:string = "Masala") {
    // this is default
}

function createChai(order:{
    type: string;
    sugar: number;
    size: "small"|"large";
}): number{
    return 4;
}