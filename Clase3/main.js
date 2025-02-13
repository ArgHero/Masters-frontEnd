//-----------Estructura de control WHILE---------------
let i=0;        //Contador
while(i<=5){     //Condición de paro
    console.log(`La cuenta va en ${i}`);
    i++;
}
//-----------Estructura do while---------------------
let contador = 0;// Nomralmente se usa para peticiones al usuario
do{
    console.log(`Se entró por al programa ${contador+1} veces`);
    contador++;
}while(contador<=5);
//----------Estructura FOR -------------------------
let variable = 0;
for(let i=0;i<=10;i++){
    variable+=i;
}
console.log(`La sumatoria del 0 al 10 de i es ${variable}`);
//-------------Ejemplos-------------------------
//for
const numeros = [10,15,47,25,23,21,54,32,116,33]
for(let num of numeros){
    console.log(num);
};

numeros.forEach(n=>{console.log(n)});

//do
/*
let respuesta;
do{
    respuesta=parseInt(prompt("Por favor ingresa un numero mayor a 20"));
}while(respuesta<=20);
alert(`El numero que ingresaste es ${respuesta}`);
*/
//while
let text = "Este modulo es increible porque estoy apprendiendo a programar!";
let vocal = "aeiouAEIOU";
let counter = 0;
let a =0;

while(a<text.length){
    if (vocal.includes(text[a])) {
        counter++;
    }
    a++;
}
console.log(`Se encontraron ${counter} vocales en el texto.`);
//--------------Ejercicios de clase--------------------
/*
Usar cualquier tipo de bucle para realizar una tabla de multiplicar, obtener la tabla de multiplicar del 1 al 10 del numero ingresado por el usuario
*/
//En caso de que el numero sea un numero: 
let multiplo = prompt("Ingrese un número");
//multiplo = "321";
let tabla = "";
for (let index = 1; index <= 10; index++) {
    tabla += multiplo+` x ${index} = ${parseInt(multiplo)*index}\n`;
}
alert(tabla);
/*
Contar los digitos de un numero
*/
alert(`El número ingresado tiene ${multiplo.length} cifras.`)
/*
obtener la suma de los digitos de un numero
*/
let acumulador=0;
for (let index = 0; index < multiplo.length; index++) {
    acumulador+=parseInt(multiplo.charAt(index));
}
alert(`La suma de los elementos de entrada es: ${acumulador}`)
/*
Encontrar el numero mayor de un arreglo
*/
const datos = [10,15,47,25,23,21,54,32,116,33];
let mayor=0;
numeros.forEach(n=>{if(n>mayor){mayor=n}});
alert(`El número mas grande ingresado es de ${mayor}`);
//--------------Ejercicios del campus--------------------------------
let frutas = [
    "kiwi","Limón","Pomelo","Naranja","Manzana","Uva","Arandano","Piña",
    "Fresa","Membrillos","Nispero","Ciruela","Melocoton","Mango","Mandarina","Frambuesa",
    "Coco","Aguacate","Aceituna","Almendra","Avellana","Cacahuete","Nuez",
    "Plátano","Cereza","Higo","Melón","Sandía","Pera","Granada","Chirimoya"
];   
class Fruta{
    constructor(tipo,variantes){
        this.tipo=tipo;
        this.variantes = variantes;
        this.cantidad = 0;
    }
    contiene(muestra){
        return this.variantes.includes(muestra);
    }
    contar(){
        this.cantidad++;
    }
    cantidad(){
        return this.cantidad;
    }
}
let tiposDeFrutas = [
    new Fruta("ácidas", ["kiwi", "Limón", "Pomelo", "Naranja", "Manzana", "Uva", "Arandano", "Piña"]),
    new Fruta("semiácidas", ["Fresa", "Membrillos", "Nispero", "Ciruela", "Melocoton", "Mango", "Mandarina", "Frambuesa"]),
    new Fruta("neutras", ["Coco", "Aguacate", "Aceituna", "Almendra", "Avellana", "Cacahuete", "Nuez"]),
    new Fruta("dulces", ["Plátano", "Cereza", "Higo", "Melón", "Sandía", "Pera", "Granada", "Chirimoya"])
];
//-------FOR
frutas.forEach(fruta=>{
    tiposDeFrutas.forEach(tipo=>{
        if(tipo.contiene(fruta))
            tipo.contar();
    })
});
//--------WHILE
/*
let contadorFrutas = 0;
while(contadorFrutas<frutas.length){
    let frut=frutas[contadorFrutas];
    tiposDeFrutas.forEach(tipo=>{
        if(tipo.contiene(frut))
            tipo.contar();
    })
    contadorFrutas++;
}
*/
let mensaje = "Se ingresaron:\n";
tiposDeFrutas.forEach(tipo => {
    mensaje+=(`\t${tipo.cantidad} frutas ${tipo.tipo}.\n`);
});
alert(mensaje);
console.log(mensaje);
