// Deel 2
// Opdracht 1a

export function arrayOfTvTypes(inventory){
    return inventory.map((product) => {return product.type})
}

// Opdracht 1b
export function soldOutTvs(inventory){
    return inventory.filter((product) => product.originalStock <= product.sold)
}

// Opdracht 1d
export function tvsHighRefreshRate(inventory){
    return inventory.filter((product) => product.refreshRate >= 100)
}

// Opdracht 1e
export function available65PlusTvs(inventory){
    return inventory.filter((product) => (product.availableSizes.find((size) => size >= 65)) && (product.originalStock-product.sold>0))
}

export function tvsAmbilight(inventory){
    return inventory.filter((product) => (product.options.find((option) => (option.name == "ambiLight") && option.applicable )))

    // If the AmbiLight option is always the 5th option in the options array, this should be fine:
    // return inventory.filter((product) => product.options[4].applicable)
}