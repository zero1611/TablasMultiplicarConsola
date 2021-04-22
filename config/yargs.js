const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista o no la tabla'
    })
    .option('r',{
        alias: 'range',
        type: 'number',
        demandOption: true,
        describe: 'Es el rango de la multiplicacion'
    })

    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero mi pana'
        }
        return true;
    })
    .argv;
module.exports = argv;
