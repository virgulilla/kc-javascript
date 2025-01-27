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
    return datos.filter(desarrollador => desarrollador.habilidades.includes('JavaScript'))
}

function getNombresProyectos(datos) {
    const nombresDeProyectos = datos
        .map(persona => persona.proyectos.map(p => p.nombre))
        .reduce((acc, nombres) => acc.concat(nombres))
    return nombresDeProyectos
}

console.log(getDesarrolladoresJavascript(datos))
console.log(getNombresProyectos(datos))