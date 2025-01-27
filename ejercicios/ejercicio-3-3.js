const countAndReverse = (text)  => {
    return `${text.length} ${text.split('').reverse().join('')}`
}

const input1 = 'string'

console.log(countAndReverse(input1))

const input2 = 'variable'

console.log(countAndReverse(input2))

const input3 = 'pointer'

console.log(countAndReverse(input3))