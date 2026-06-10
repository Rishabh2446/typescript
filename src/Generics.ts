// Generics (template to make code reusable)

function wrapInArray<T>(item: T): T[]{
    return [item]
}
wrapInArray("masala")
wrapInArray(42)
wrapInArray({price: 24})


function pair<A,B>(a:A, b:B): [A, B]{
    return [a, b];
}
pair("Masala", "test");
pair("masala", 23);
pair("ginger", {flavour: "GINGER"})

// generic interface->

interface Box<T> {
    content: T
}
const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

// Partial<T>

// real world use of generic
// on api fetching->
interface ApiPromise<T>{
    status: number,
    data: T
}
const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}