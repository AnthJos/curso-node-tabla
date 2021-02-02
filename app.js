const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');
require('colors');



crearArchivo(argv.b, argv.l, argv.h).then(archivo => {
    console.log(archivo.rainbow);
}).catch(err => console.log(err));