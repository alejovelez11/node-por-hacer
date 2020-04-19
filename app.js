// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
// console.log(argv);
const porHacer = require('./por-hacer/por-hacer')
let comando = argv._[0];

switch (comando) {
    case 'crear':        
        let tarea = porHacer.crear(argv.description)
        console.log(tarea);        
        break;

    case 'listar':
        let listado = porHacer.listar()
        for (const tarea of listado) {
            console.log('Tarea:', tarea.description);
            console.log('Estado:', tarea.completado);
            console.log('===========================');
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.description);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}