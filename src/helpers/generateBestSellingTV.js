

export function formatBrandTypeName(bestSellingTV) {
    return bestSellingTV.brand + " " + bestSellingTV.type + " - " + bestSellingTV.name
}

export function formatPrice(bestSellingTV) {
    return "€" + bestSellingTV.price + ",-"
}

export function formatScreensizes(bestSellingTV) {
    let total = ""
    for (let i in bestSellingTV.availableSizes){
        total += bestSellingTV.availableSizes[i] + " inch (" + Math.round(bestSellingTV.availableSizes[i] * 2.54) + "cm)";
        if (bestSellingTV.availableSizes.length-1 == (i)){break}
        total += " | "
    }
    return total
}

export function calcAvailableSizes(sizesArray){
    return sizesArray.map((size) => {
        return `${size} inch (${Math.round(size * 2.54)} cm)`
    }).join(" | ")
}