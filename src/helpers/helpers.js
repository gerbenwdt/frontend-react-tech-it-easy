
// import {inventory} from "../constants/inventory.js";

// let sum = (...arrayToSum) => {
//     let total = 0;
//     for (const i of arrayToSum) {
//         total += i;
//     }
//     return total;
// }

export function sumSoldProducts(inventory) {
    let total = 0;
    inventory.forEach(i => {
        // console.log(i.sold);
        total += i.sold;
    })
    return total
}

export function sumPurchasedProducts(inventory) {
    let total = 0;
    inventory.forEach(i => {
        total += i.originalStock;
    })
    return total
}

export function calculateProductsToSell(inventory) {
    return sumPurchasedProducts(inventory) - sumSoldProducts(inventory)
}


// export default sum;

// console.log([1,2,4])
// const soldT = soldSum(...[1,2,4])
// console.log(soldT)
//
// console.log(arrayPrices)
// const soldTotal = soldSum(...[arrayPrices])
// console.log(soldTotal)

