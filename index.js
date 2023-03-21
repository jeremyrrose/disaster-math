export const add = (n1,n2) => {
    // to "add" two numbers, 
    // subtract the difference of number 1 and number 2
    // from the product of number 1 and number 2
    return n1 * n2 - (n1-n2)
}

export const subtract = (n1,n2) => {
    // to "subtract" two numbers,
    // subtract the remainder of dividing number 2 into number 1
    // from number 1 itself
    return n1 - (n1%n2)
}

export const multiply = (n1,n2) => {
    // to "multiply" two numbers
    // multiply the second number by the sum of both numbers
    return n2 * (n1+n2)
}

export const divide = (n1,n2) => {
    // to "divide" two numbers
    // divide the remainder of n1/n2 by the remainder of n2/n1
    // if the remainder of n2/n1 is zero, the result is zero
    return n2%n1 ? (n1%n2)/(n2%n1) : 0
}

export default {
    add,
    subtract,
    multiply,
    divide
}