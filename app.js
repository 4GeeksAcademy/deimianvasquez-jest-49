let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD
    return Number((euros * oneEuroIs.JPY).toFixed(2))

   
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs.JPY
    return Number((euros * oneEuroIs.GBP).toFixed(2))
    
}

console.log(typeof(fromDollarToYen(10)))
console.log(fromEuroToDollar(3.5))
console.log(fromYenToPound(1000))


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };