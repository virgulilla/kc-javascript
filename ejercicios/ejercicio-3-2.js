const slugNumbers = (number) => {
    return Array.from(String(number)).join('-')
}

const input = 10

console.log(slugNumbers(input))

const secondInput = 1

console.log(slugNumbers(secondInput))

const thirdInput = 11234

console.log(slugNumbers(thirdInput))

