const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {
        
    let salida = '';
    let Consola = '';

    for( let i = 1; i <= hasta; i++ ) 
    {
        salida += `${ base } x ${ i } = ${ base * i }\n`;
        Consola += `${ base } ${'x'.red} ${ i } ${'='.yellow} ${ base * i }\n`;
         
    }

    if (listar) {
        console.log('============='.green);
        console.log('Tabla de multiplicar'.green, colors.blue(base));
        console.log('============='.green);
        console.log(Consola);
    }
    
    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );

    return(`tabla-${ base }.txt`);
    } catch (error) {
        throw error;        
    }

}

module.exports = {
    crearArchivo
}