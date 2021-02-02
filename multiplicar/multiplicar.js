const fs = require('fs');
const colors = require('colors');

let crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    /* return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${abc} no es un número`);
            return;
        }
        let contenido = "";
        for (let i = 1; i <= 10; i++) {
            contenido += `${base} * ${i} = ${(base * i)}\n`;
        }

        const data = new Uint8Array(Buffer.from(contenido));
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    }); */

    try {

        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'*'.green} ${i} ${'='.green} ${(base * i)}\n`;
            salida += `${base} * ${i} = ${(base * i)}\n`;
        }

        if (listar) {
            console.log(colors.green('===================='));
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log(colors.green('===================='));
            console.log(consola)
        }

        fs.writeFileSync(`./tablas/tabla-${ base }.txt`, salida);

        return `./tablas/tabla-${ base }.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}