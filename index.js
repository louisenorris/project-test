// module.exports = Add;
module.exports = Subtract;

function Subtract(subNumberOne, subNumberTwo, log) {
    const result = subNumberOne - subNumberTwo;
    log(result);
    return result;
}

// function Add(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
