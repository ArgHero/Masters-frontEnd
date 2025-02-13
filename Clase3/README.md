# Arreglos y ciclos en JavaScript
## _Saul Omar Arguello Hernandez_
> En esta lección se aprendieron ciclos while, do-while, for y los Array: estructuras sobre las que se suele iterar para obtener información de estas.

| Tema | Descripción |
| ------ | ------ |
|WHILE |Bloque de código que se ejecuta mientras una condición de control se mantenga en TRUE. Se emplea cuando no se conoce el número de elementos pero si la condición de paro.|
| DO-WHILE | Similar al inciso anterior pero tiene la característica que el bloque de código se ejecuta por lo menos una vez.|
| FOR |Bloque de código que se ejecuta cuando se conoce expresamente la cantidad de elementos sobre los cuales se va a iterar.|
| ARRAYS |Contenedores que agrupa datos en un solo elemento, su contenido puede variar el tipo de dato mientras se opere sobre estos con precaución.|
| CONTADORES Y ACUMULADORES |un contador incrementa sin exepción cada iteración mientras que los acumuladores dependen de decisiones lógicas dentro de la estructura del programa.|

[![repositorio](https://i.pinimg.com/736x/ce/fd/a1/cefda1a3712809039224b672ea47827b.jpg)](https://github.com/ArgHero)

## Práctica: Arreglos y Ciclos
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

- Declara un arreglo llamado frutas con varios tipos de frutas.
- Crea un objeto para almacenar la cantidad de cada tipo de fruta.
- Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
- Imprime en la consola la cantidad de cada tipo de fruta.
- Opcional: intenta implementar la solución con el otro ciclo también (for/while).

## Declaración de la clase y los objetos.
```sh
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
```
## Solución FOR
```sh
frutas.forEach(fruta=>{
    tiposDeFrutas.forEach(tipo=>{
        if(tipo.contiene(fruta))
            tipo.contar();
    })
});
```
## Solución WHILE
```sh
let contadorFrutas = 0;
while(contadorFrutas<frutas.length){
    let frut=frutas[contadorFrutas];
    tiposDeFrutas.forEach(tipo=>{
        if(tipo.contiene(frut))
            tipo.contar();
    })
    contadorFrutas++;
}
```
## Despliegue de resultados
```sh
let mensaje = "Se ingresaron:\n";
tiposDeFrutas.forEach(tipo => {
    mensaje+=(`\t${tipo.cantidad} frutas ${tipo.tipo}.\n`);
});
console.log(mensaje);
alert(mensaje);
```