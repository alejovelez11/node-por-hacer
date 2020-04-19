const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer' 
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado'
}


const argv = require('yargs')
             .command('crear', 'Crear un elemento por hacer', {
                 description
             })
             .command('actualizar', 'Actualiza el estado completo de una tarea', {
                description,
                completado

             })
             .command('borrar', 'Borra la tarea', {
                description
             })
             .help()
             .argv

module.exports = {
    argv
}