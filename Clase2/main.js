//String
let mensaje = "Saul Hernandez";
console.log(mensaje.toUpperCase());
console.log(`Hola ${mensaje}`);
console.log('Hola ${mensaje}'); // Significa que este no es un template y el compilador no sabe que se quiere realizar.
console.log("Hola ".concat(mensaje));

//Arrays
let alumnos = ["Saul","Omar","Arguello","Hernandez","UPIITA","mecatrónica"];
alumnos.push("Egresado");
console.log(alumnos);

//Numeros
let x=2;    //Incremento
let a = 5;  //Valor base
a += x;     //Este valor combinado puede ser tanto similar
a++;
console.log(a);
console.log(1/0); //Regresa el valor de Infinity indicando que es un número muy grande

//Condicionales
//Ex. Clasificación de calificaciones
let calif = 7;
const notaAprobatoria = 6;
if (calif>=notaAprobatoria) {
    console.log("Estas aprobado");
} else{
    console.log("Estas reprobado");
}
//Ex. Rangos de temperatura
let temp = 18;
if (temp>30) {
    console.log("Te estas derritiendo de calor")
} else if(temp>=21 && temp <= 29){
    console.log("El clima es agradable");
} else{
    console.log("Te estas congelando")
}
//Ex. mayoría de edad con operadores ternarios
let edad = 13;
let resultado = (edad >= 18)? "Es mayor de edad" : "Es menor de edad";

console.log(resultado);
console.log(1==='1');              //Compara el tipo de dato.
console.log(1=="1" || 1==='1');    //Ajusta los tipos de datos para comparar solo los valores.
//Switch
let dia = 'jueves';
switch(dia){
    case 'lunes': console.log("Inicio de semana"); break;
    case 'martes': console.log("segundo dia de semana"); break;
    case 'miercoles': console.log("tercer dia de semana"); break;
    case 'jueves': console.log("cuarto dia de semana"); break;
    case 'viernes': console.log("ultimo dia de semana"); break;
    default: console.log("Opcion invalida");
};
//Numeros pares e impares
console.log("-----------------------Ejercicio numeros pares e impares------------------------")
digito = Math.floor(Math.random()*50);
console.log(`El número ${digito} es `.concat((digito%2===0)?"par.":"impar."));
//Comparar si un numero es primo o no es primo
console.log("-----------------------Ejercicio numeros primos------------------------")
let esPrimo = true;
for (let i=2; i<digito/2;i++){
    if(digito%i===0){
        esPrimo = false;
        break;
    }
}
console.log(`El número ${digito} `.concat((esPrimo)?"es Primo.":"no es Primo."));
//Estacion 
console.log("-----------------------Ejercicio estación del año------------------------")
let mes = Math.floor(Math.random()*12)+1;
switch(mes){
    case 12: case 1: case 2: 
        console.log(`El mes ${mes} es invierno`); 
        break;
    case 3: case 4: case 5: 
        console.log(`El mes ${mes} es primavera`); 
        break;
    case 6: case 7: case 8: 
        console.log(`El mes ${mes} es verano`); 
        break;
    case 9: case 10: case 11: 
        console.log(`El mes ${mes} es otoño`); 
        break;
    default: console.log(mes);
}
//Ejercicio del campus
console.log("-----------------------Ejercicio del campus------------------------")
let pruebas = [-23,60,75,0,null,undefined,1/0,1000,74,89,59,32,53,"verde",21,67,45,97,100,Math.floor(Math.random()*101)];
pruebas.forEach(notaObtenida);
function notaObtenida(calificacion){
    if(calificacion>100 || calificacion<0 || calificacion==null || calificacion == undefined ||typeof calificacion === "string" )
        console.log(`Con ${calificacion} la calificación no es valida.`)
    else
        console.log(`Con ${calificacion} el estudiante `.concat(
            (calificacion>=90)?'aprueba con "Excelente"':
            (calificacion>=75)?'aprueba con "Bien"':
            (calificacion>=60)?'aprueba con "Suficiente"':
            "no aprueba")
        );
}

