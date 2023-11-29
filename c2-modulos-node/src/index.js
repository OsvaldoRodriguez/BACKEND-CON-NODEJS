const http = require("http");
const os = require('os');
const fs = require('fs');

// para importar modulos locales (lo que uno crea)
const miModulo = require('./modules/miModulo.js')
const miMatematica = require('./modules/Matematica.js')

miModulo("Osvaldo");
let a = 10
let b = 20
miMatematica.suma(a, b);
miMatematica.resta(a, b);
miMatematica.multiplicacion(a, b);
miMatematica.division(a, b);
// capturar la peticion del cliente 
// y la respuesta del servidor
// req : request, peticion, solicitud del cliente
// res: response, respuesta del servidor

const servidor = http.createServer( function(req, res){
    // las acciones que hace el servidor a las peticiones del cliente
    // .end() -> envia un mensaje
    // fs
    fs.writeFile('./hola.txt', "Primera Linea", function(err){
        if(err)
            console.log(err);
        console.log("1. Archivo creado");
    })
    console.log("2. Ultima  linea de código");
    res.end("Hola, desde el servidor de Node");
});

servidor.listen(3000, function(){
    console.log("Servidor iniciado en el puerto http://127.0.0.1:3000",  os.freemem())

});


