function suma(a, b){
    console.log(`La suma es: ${a + b}`);
}

function resta(a, b){
    console.log(`La resta es: ${a - b}`);
}

const multiplicacion = (a, b) => {
    console.log(`La multiplicación es: ${a * b}`);
}

const division = (a, b) => {
    console.log(`La division es: ${a / b}`);
}

// exportando como JSON
module.exports = {
    "nombre" : "Funciones aritmeticas",
    "suma" : suma,
    "resta" : resta,
    "multiplicacion" : multiplicacion,
    division
}
