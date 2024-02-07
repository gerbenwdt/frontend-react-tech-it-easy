
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

