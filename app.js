const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch(err => console.log(err));









// console.log(`=============`);
// console.log(`    Tabla de Multiplicar`);
// console.log(`=============`);

// const base = 78;
// let salida = '';

// for( let i = 1; i <= 10; i++ ) 
// {
//     salida += `${ base } x ${ i } = ${ base * i }\n`; 
// }

// console.log(salida);

// fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${ base }.txt creado`);
// })



/*


const fs = require('fs');

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

*/