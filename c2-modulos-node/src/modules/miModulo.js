const saludo = (nombre) => {
    console.log(`Hola ${nombre}`);
}

// utilizando ECS5 para exportar
module.exports = saludo


// se exporta directamente
// module.exports = (nombre) => {
//     console.log(`Hola + ${nombre}`);
// }