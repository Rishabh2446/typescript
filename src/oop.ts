// class Chai {
//     flavour: string;
//     price: number;

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour;
//         console.log(this)
//     }
// }

// // const masalaChai = new Chai();
// // masalaChai.flavour = "masala"

// const masalaChai = new Chai("ginger");
// masalaChai.flavour = "masala"

class Chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients//ok
    }

}
// const c = new Chai()
// c.flavour;
// c.reveal(); // can not direct access secretIngredients

class Shop {
    protected shopname = "Chai corner"
}
class Branch extends Shop{
    getName(){
        return this.shopname // ok
    }
}
// new Branch().getName();

class Walet {
    #balance = 100 ; // private

    getBalance(){
        return this.#balance;
    }
}
const w = new Walet();
w.getBalance;

// readOnly->
class Cup {
    readonly capacity: number = 250;
    constructor(capacity:number){
        this.capacity = capacity
    }
}

// getter , setter ->
class ModernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value>5) throw new Error("Too sweet!");
        this._sugar = value;
    }
}
const c = new ModernChai()
c.sugar = 3;


// Static members->

class  EkChai{
    static shopName = "Chaicode Cafe";
    constructor(public flavour: string){}
}
console.log(EkChai.shopName); // direct access the shopname without creating object;

abstract class Drink{
    abstract make(): void
}
class MyChai extends Drink{
    make(){
        console.log("Brewing Chai");
    }
}

// composition 
class Cooler{
    cool(){

    }
}
class ChaiMaker{
    constructor(private cooler: Cooler){}

    make(){
        this.cooler.cool; // access the cool from other class
    }
}