const fs = require('fs');
const colors = require('colors');
const argv = require('../config/yargs');
const crearArchivo = async (base = 5 ,listar )=>{
   try {

       let salida ='';
       for (let i = 1; i <= argv.r; i++ ) {
           salida += `${base} x ${i} = ${base*i} \n`;
       }
       if(listar){
           console.log('=========================='.green);
           console.log(` Tabla de Multiplicar de `.red, base);
           console.log('=========================='.green);
           console.log(salida.cyan);
       }

       fs.writeFile(`./salida/tabla-${base}.txt`,salida,(err)=>{
           if(err)throw err;
           console.log('Archivo Creado mi pana'.rainbow);
       });
       return `tabla-${base}.txt`.america
   }catch (e) {
       throw e;
   }
 
}
module.exports = {
  crearArchivo
}