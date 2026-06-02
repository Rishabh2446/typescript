let subs: number | string = 10 // '1M' is also accepted now

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

// apiRequestStatus = "done" -> not allowed
apiRequestStatus = 'success'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'



// any->
const orders = ['32', '13', '43', '29']
// let currentOrder; // any
let currentOrder: string | undefined;

for(let order of orders){
    if(order === '13'){
        currentOrder = order
        break
    }
    currentOrder = '11'
}
// currentOrder = 42 -> this can be happen due to any
console.log(currentOrder);