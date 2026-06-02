function getCar(kind: string | number){
    if(typeof kind === 'string'){
        return `giving you ${kind} car..`// using dot(kind.) we will get string methods
    }
    return `car number: ${kind}`// using dot(kind.) we will get number methods
}

// truthiness
function serveChai(msg?: string){
    if(msg){
        return `serving ${msg} ...`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" |"medium" | "large" | number){
    if(size === "small") return `small cutting chai...`
    if(size === "medium" || size === "large") return `make extra tea...`

    return `chai order #${size}`
}

class kulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}
class cutting{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai: kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}

// khud ke types->
type chaiOrder = {
    type: string
    sugar: number
}

function ischaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item: chaiOrder | string){
    if(ischaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai){
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "elaichi":
            return `elaichi Chai`
            break;
        case "ginger":
            return `ginger   Chai`
            break;
        default:
            break;
    }
}