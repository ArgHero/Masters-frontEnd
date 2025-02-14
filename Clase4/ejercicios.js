//-------------------Validar si una oración es un palindromo 
let prueba = prompt("Ingrese la palabra que quiere verificar como palindromo:");
alert(`La oración "${prueba}" `.concat((esPalindromo(prueba))?"SI":"NO").concat(" es un palindromo."));

function esPalindromo(palabra){
    palabra=palabra.toLowerCase().replace(/\s+/g,'');
    return palabra === palabra.split('').reverse().join('');
}
//-------------------Filtar los numeros mayores de un numero >5
let arrayAleatorio = [];
for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    arrayAleatorio.push(numeroAleatorio);
}
alert(selector(arrayAleatorio,5));  //Coloca el Array y el valor minimo que debe tener cada dato.

function selector(arreglo,limite){
    return arreglo.filter(num => {return num>limite})
}
//------------------Area de un circulo
let radio = parseInt(prompt("Para obtener el área de un circulo, ingrese su radio:"));
alert(`El área de un circulo de radio ${radio} es de: ${areaCirculo(radio).toFixed(2)} unidades cuadradas.`);

function areaCirculo(radio){
    return 3.14159*Math.pow(radio,2);
}
//------------------Calculadora básica
let calculo = prompt("Ingrese los datos que desea operar con el formato 'num1,num2,operacion'").split(',');
let resultado = `${calculo[0]} ${calculo[2]} ${calculo[1]} = ${calculadora(calculo)}`
alert(resultado);

function calculadora(calculos){
    let num1 = parseInt(calculos[0]);
    let num2 = parseInt(calculos[1]);
    let operacion = calculos[2];
    switch(operacion){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return NaN;
    }
}
//--------------------Practica: Seguimiento de libros
let librosLeidos = [
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "Matar a un ruiseñor",
    "1984",
    "Orgullo y prejuicio",
    "El gran Gatsby",
    "Crimen y castigo",
    "La Odisea",
    "La metamorfosis",
    "El nombre de la rosa"
];

const agregarLibro = (titulo) => librosLeidos.push(titulo);

function mostrarLibrosLeidos(){
    let mensaje = "Se han leido los siguientes libos:\n"
    librosLeidos.forEach(libro => mensaje+=`\t-${libro}\n`);
    return mensaje;
}
agregarLibro(prompt("Ingresa el nombre del libro que quieras agregar:"));
agregarLibro("One Piece");

console.log(mostrarLibrosLeidos());
alert(mostrarLibrosLeidos());

