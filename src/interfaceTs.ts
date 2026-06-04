// types -> 
type ChaiOrder = {
    type: string;
    sugar: number; 
    strong:boolean
};
function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

// interface ->
type TeaReecipe ={
    water: number;
    milk: number;
}
// class MasalaChai implements TeaReecipe{
//     water = 100;
//     milk = 50;
// }

// type cupsize = "small" | "large"
interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//     ok:boolean = true; 
// } -> it requires a interface

type TeaType = "masala" | "ginger" | "lemon"
function orderChai(t:TeaType) {
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala:number}

type MasalaChai = BaseChai & Extra
const cup: MasalaChai = {
    teaLeaves: 2,
    masala:1, // required
}

type User = {
    username: string,
    bio?: string // not required
}
const u1: User = {username:"Rish"}
const u2: User = {username:"Rish", bio:"Rishabh"}

type Config = {
    readonly appName: string
    version: number
}
  const cfg: Config={
    appName: "MasterJi",// readonly can not be changed
    version:1
  };

//   cfg.appName = "any"