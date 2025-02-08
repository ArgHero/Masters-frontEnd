# Comparaciones y decisiones en JavaScript
## _Saul Omar Arguello Hernandez_
> En esta clase se trataron las condicionales y las estructuras de decición IF

| Tema | Descripción |
| ------ | ------ |
|Operadores basicos | Aritmética básica y operadores especiales de incremento.|
| Operadores lógicos | Tienen la característica de poder definir el grado de rigidez que se manejará al momento de comparar, esto significa que el lenguaje puede convertir los tipos de datos en caso de ser necesario.|
| Condicional if | IF, ELSE, ELSE IF e IF ternario.|
| Strings | Existen muchas formas de concatenar cadenas de texto, inclusive métodos de la propia clase STRING|
| Ejemplos prácticos | Se brindaron minutos de la clase para realizar los ejercicios y resolver dudas.|

[![repositorio](https://i.pinimg.com/736x/4f/04/ac/4f04ac68f68b124eb70d0188ea0b073d.jpg)](https://github.com/ArgHero)

## Práctica: Comparaciones y decisiones en JavaScript
El objetivo es crear un repositorio local y que lo vincules con un repositorio en Github. En este repositorio, agrega los archivos javascript que necesites para los ejercicios de tu clase y los descritos a continuación.

- Si la nota es 90 o más, el estudiante aprueba con "Excelente".
- Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
- Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
- Si la nota es menor de 60, el estudiante no aprueba.
- Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
- Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
- Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
- Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
- Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado.


## Solución
```sh
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
```