const sum = (num1, num2) => num1 + num2;

console.log(sum(7, 3));

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

console.log(fromDollarToYen(1));


module.exports = {sum, fromEuroToDollar, fromDollarToYen};
