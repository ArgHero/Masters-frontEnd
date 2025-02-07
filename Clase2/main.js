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
a += x;     //Este valor combinado puede ser tanto + / *
console.log(a);
console.log(1/0);

//Condicionales
let edad = 13;
let resultado = (edad >= 18)? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

//Ejercicio
let pruebas = [-23,60,75,0,null,undefined,1/0,1000,74,89,59,32,53,"verde",21,67,45,97,100,Math.floor(Math.random()*100)];
pruebas.forEach(notaObtenida);

function notaObtenida(calificacion){
    if(calificacion<0){
        console.log("La calificación si quiera es positiva")
    }else{
    console.log(`Con ${calificacion} el estudiante `.concat(
        (calificacion>=90)?'aprueba con "Excelente"':
        (calificacion>=75)?'aprueba con "Bien"':
        (calificacion>=60)?'aprueba con "Suficiente"':
        "no aprueba"
    ));
}
}

