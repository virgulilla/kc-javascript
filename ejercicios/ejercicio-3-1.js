const createPath = (data) => {        
    const fileExtension = data.pop()
    return `${data.join('/')}.${fileExtension}`
}

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

console.log(createPath(input1))

const input2 = [
    'CodinGame',
    'python',
    'py'
];

console.log(createPath(input2))

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py'
]

console.log(createPath(input3))