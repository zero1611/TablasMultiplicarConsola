const colors = require('colors');
const{crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.america))
    .catch(err => console.log(err));
