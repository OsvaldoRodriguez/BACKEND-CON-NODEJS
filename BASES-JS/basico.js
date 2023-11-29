var saludo = "Hola desde node";
let saludo2 = "Otro saludo";
const pi = 3.1416;

console.log(saludo);
console.log(saludo2);
console.log(pi);
console.log('----------------------------------');

var x = 6;
if(true){
    var x = 7;
    console.log("Dentro del If", x);
}

console.log("fuera del If", x);


let a = 10;
let b = 20;
let ans = "la suma de " + a + " + " + b + " es igual a " + (a + b);
let ans2 = `la suma de ${a} + ${b} es igual a ${a + b}`
console.log(ans);
console.log(ans2);