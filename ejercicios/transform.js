const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1'},
            { id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3'},
            { id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5'},
            { id: 6, nombre: 'Proyecto 6'}
        ]
    },

]

function getDesarrolladoresJavascript(datos) {
    //return datos.filter(({habilidades}) => habilidades.find(habilidad => habilidad === 'JavaScript'))
    return datos.filter(({habilidades}) => habilidades.includes('JavaScript'))    
    /* En https://perf.link/
        el return devuelto con includes (850,560 ops/s) es el doble de rapido que con find (390,420 ops/s)  */
}

function getNombresProyectos(datos) {
    return datos.map(({ proyectos }) => proyectos.map(({ nombre }) => nombre))
        .reduce((acc, nombres) => acc.concat(nombres), []);
}

console.log(getDesarrolladoresJavascript(datos))
console.log(getNombresProyectos(datos))