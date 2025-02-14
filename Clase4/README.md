# Funciones en JavaScript
## _Saul Omar Arguello Hernandez_
> En esta clase se abordaron las diferentes formas de declarar una función, siendo los dos grupos mas grandes las Tradicionales y las Anónimas.

### Funciones tradicionales
| Tema | Descripción |
| ------ | ------ |
|Sin parametros| No reciben ningun valor de entrada en los paréntesis destinados a dicha tarea. Esto significa que la función se ejecuta exactamente igual todas las veces que sea llamada.|
| Con parametros | Los resultados de la función varian de acuerdo a los valores de entrada ingresados.|
| Por defecto |En caso de que la función requiera valores de entrada para funcionar pero por alguna razón estos no son suministrados, la función establece valores base (Estos se declaran con un "=" dentro de la definicion de los parametros de la función)|
| Retornan Valor |Ultima instrucción realizada por la función (en caso de aplicarse), este valor retornado sustituye a la función en el lugar donde fue llamada, es decir: "regresa valor"|


[![repositorio](https://i.pinimg.com/736x/16/db/e8/16dbe858a59c5c2766fd54594b4875e1.jpg)](https://github.com/ArgHero)
## Ejercicios de clase: Funciones
### 1. Válidar si una función es un palindromo
Mediante funciones de orden superior se invierte la cadena de caracteres introducida por el usuario y regresa si esta es igual a la cadena original o no.
```ssh
let prueba = prompt("Ingrese la palabra que quiere verificar como palindromo:");
alert(`La oración "${prueba}" `.concat((esPalindromo(prueba))?"SI":"NO").concat(" es un palindromo."));

function esPalindromo(palabra){
    palabra=palabra.toLowerCase().replace(/\s+/g,'');
    return palabra === palabra.split('').reverse().join('');
}
```
### 2. Filtrar los números menores de 6 que contiene un Array.
Creamos un Array aleatorio cada vez que se compila el código y unicamente se muestran aquellos números que superan el valor de 5, aun asi la función selector esta preparada para cambiar dicho valor frontera.
```ssh
let arrayAleatorio = [];
for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    arrayAleatorio.push(numeroAleatorio);
}
alert(selector(arrayAleatorio,5));  //Coloca el Array y el valor minimo que debe tener cada dato.

function selector(arreglo,limite){
    return arreglo.filter(num => {return num>limite})
}
```

### 3. Obtener el área de un circulo.
Pide al usuario que ingrese el radio del circulo y regresa el area mediante una función simple.
```ssh
let radio = parseInt(prompt("Para obtener el área de un circulo, ingrese su radio:"));
alert(`El área de un circulo de radio ${radio} es de: ${areaCirculo(radio).toFixed(2)} unidades cuadradas.`);

function areaCirculo(radio){
    return 3.14159*Math.pow(radio,2);
}
```

### 4. Crear una calculadora básica (+,-,*,/) entre dos valores.
mediante un codigo ingresado por el usuario donde ingresa los valores y el operador separados por ',', la función hace uso de un switch-case para determinar de que operación se trata.
```ssh
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
```
## Práctica: Arreglos y Ciclos
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

- Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
- Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

### Array de prueba
```sh
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
```
### Función anónima
Esta declara la función de agregar un libro.
```sh
const agregarLibro = (titulo) => librosLeidos.push(titulo);
```
### Función que no recibe parámetros
Esta función se encarga de generar un string estructurado con todos los libros leidos de forma ordenada.
```sh
function mostrarLibrosLeidos(){
    let mensaje = "Se han leido los siguientes libos:\n"
    librosLeidos.forEach(libro => mensaje+=`\t-${libro}\n`);
    return mensaje;
}
```
### Implementación
```sh
agregarLibro(prompt("Ingresa el nombre del libro que quieras agregar:"));
agregarLibro("One Piece");
console.log(mostrarLibrosLeidos());
alert(mostrarLibrosLeidos());
```
