const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
       alias: 'base',
       type: 'number',
       demandOption: true,
       describe: 'es la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'la base tiene que ser un numero'  
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Este es el numero hasta donde quieres la tabla'
     })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un mumero'
        }
        return true;
    })
    .argv;


module.exports = argv;