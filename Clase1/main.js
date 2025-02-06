console.log("Hola mundo");

//--------------Tipos de datos primitivos en clase----------------------
let nombre = "Saul";        // String
let edad = 25;              // Number
let mayoriaEdad = true;     // Boolean
let saldo = undefined;      // Que es lo mismo que no poner nada
let cuenta = null;          // Es posible que una variable no sea necesaria y quede sin contenido
let id = Symbol("id");      // Variable inmutable
let numeroGrande = 12461897698162748612386189n;
/** 
 Numero que necesita mas bytes para ser operado y almacenado
 donde la n al final indica que se trata del tipo big.
*/
console.log("La variable 'nombre' contiene: "+nombre+" y es de tipo: " +typeof nombre);
console.log("La variable 'edad' contiene: "+edad+" y es de tipo: " +typeof edad);
console.log("La variable 'mayoriaEdad' contiene: "+mayoriaEdad+" y es de tipo: " +typeof mayoriaEdad);
console.log("La variable 'saldo' contiene: "+saldo+" y es de tipo: " +typeof saldo);
console.log("La variable 'cuenta' contiene: "+cuenta+" y es de tipo: " +typeof cuenta);
console.log("La variable 'id' es de tipo: " +typeof id);
console.log("La variable 'numeroGrande' contiene: "+numeroGrande+" y es de tipo: " +typeof numeroGrande);

//--------------Tipos de datos primitivos de la práctica---------------
let numeroRandom = 42;
let txtNumero = 'Veinticinco'
let numNegativo = -666;
let booleano = true;
let cero = 0;
let cadenaVacia = '';
//let errorBool = FALSE; //Es un error dado que se escribe estrictamente en minusculas 

console.log("La variable 'numeroRandom' contiene: "+numeroRandom+" y es de tipo: " +typeof numeroRandom);
console.log("La variable 'txtNumero' contiene: "+txtNumero+" y es de tipo: " +typeof txtNumero);
console.log("La variable 'numNegativo' contiene: "+numNegativo+" y es de tipo: " +typeof numNegativo);
console.log("La variable 'booleano' contiene: "+booleano+" y es de tipo: " +typeof booleano);
console.log("La variable 'cero' contiene: "+cero+" y es de tipo: " +typeof cero);
console.log("La variable 'cadenaVacia' contiene: "+cadenaVacia+" y es de tipo: " +typeof cadenaVacia);

//--------------Estructuras de datos --------------------------
let persona = {                             //Objeto
    nombre: "Saul",
    edad: 25,
    grupo: 'C',
    nacionalidad: "Mexicano"
}
let numeros = [1,3,321,4,13,45];            // Array
let componentes = ["asda",23,true,null];    // Array
let suma = function suma(a,b){return a+b}   // Funcion
let fecha = new Date();                     // Fecha

console.log("La variable 'persona' contiene: "+persona+" y es de tipo: " +typeof persona);
console.log("La variable 'numeros' contiene: "+numeros+" y es de tipo: " +typeof numeros);
console.log("La variable 'componentes' contiene: "+componentes+" y es de tipo: " +typeof componentes);
console.log("La variable 'suma' contiene: "+suma+" y es de tipo: " +typeof suma);
console.log("La variable 'fecha' contiene: "+fecha+" y es de tipo: " +typeof fecha);

console.log(typeof numeros);
console.log(numeros[0]);
console.log(suma(213,122));
console.log(fecha);