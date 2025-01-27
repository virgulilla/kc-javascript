const usuario = {
    nombre: 'Oscar',
    apellidos: 'Cañas Montes',
    modulos: [
        {
            nombre: 'Node.js',
            fechaInicio: '2025-05-10'
        },
        {
            nombre: 'Git',
            fechaInicio: '2025-02-01'
        },
        {
            nombre: 'React',
            fechaInicio: '2025-04-15'
        }
    ]
}

const moduloReact = usuario.modulos.find(modulo => modulo.nombre === 'React')
const fechaInicio = moduloReact ? moduloReact.fechaInicio : 'No se encuentra el modulo'
console.log(`Hola ${usuario.nombre} ${usuario.apellidos}`)
console.log(`La fecha de inicio del modulo de React es: ${fechaInicio}`)