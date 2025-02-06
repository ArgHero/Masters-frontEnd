console.log("Hola mundo");

//Tipos de datos primitivos
let nombre = "Saul";        // String
let edad = 25;              // Number
let mayoriaEdad = true;     // Boolean
let saldo = undefined;      // Que es lo mismo que no poner nada
let cuenta = null;          // Es posible que una variable no sea necesaria y quede sin contenido
let id = Symbol("id");      // Variable inmutable
let numeroGrande = 12461897698162748612386189n; // Numero que necesita mas bytes para ser operado y almacenado
console.log(typeof nombre);
// Estructuras de datos
let persona = {             //Objeto
    nombre: "Saul",
    edad: 25,
    grupo: 'C',
    nacionalidad: "Mexicano"
}
/**
 * La variable anterior representa un objeto como persona
 */
let numeros = [1,3,321,4,13,45];            // Array
let componentes = ["asda",23,true,null];    // Array
let suma = function suma(a,b){return a+b}   // Funcion
let fecha = new Date();                     // Fecha

console.log(typeof numeros);
console.log(numeros[0]);
console.log(suma(213,122));
console.log(fecha);