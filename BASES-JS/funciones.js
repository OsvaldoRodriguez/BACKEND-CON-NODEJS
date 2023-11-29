function saludo(nombre){
    console.log(`Saludos desde funcion simple ${nombre}`);
}

// funcion anonima
function saludo2(nombre) {
    console.log(`Saludos desde funcion anonima ${nombre}`);
}

// funcion flecha

const saludo3 = (nombre) => {
    console.log("saludos desde la funcion flecha " + nombre);
}

const y = x => console.log(x);

saludo("Osvaldo");
saludo2("Yess");
saludo3("Fury");

y(3458734587);