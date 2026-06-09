const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5, 5.0]

// objects as array
type chai = {
    name: string;
    price: number;
}
const menu: chai[] = [
    {name: "Masala", price: 15},
    {name: "Adrak", price: 25}
]

// read only array
const cities: readonly string[] =["Delhi", "Jaipur"]
// cities.push("Pune")

// 2d array
const table: number[][]=[
    [1,2,3],
    [4,5,6]
]

// tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]; not allowed

let userInfo: [string, number, boolean?]
userInfo = ["hitesh", 100]
userInfo = ["hitesh", 100, true]

// readonly tuples->
const location: readonly [number, number] = [23.88, 43.33];

const chaiItems: [name: string, price: number] = ["Masala", 20]

// ENUMS->
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE

enum status {
    PENDING=100,
    SERVED,//101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiType){
    console.log(`Making: ${type}`)
}
makeChai(ChaiType.GINGER);

enum RandomEnum {
    ID = 1,
    NAME = "Chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}
const s = Sugars.HIGH

let t: [string, number] = ["chai", 10]
t.push("extra")