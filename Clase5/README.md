# Intro a Objects en JavaScript
## _Saul Omar Arguello Hernandez_
> En esta clase se abordaron los principales bases sobre la declaración, funcionamiento y usos comunes de los objetos en JavaScript.

### Funciones tradicionales
| Tema | Descripción |
| ------ | ------ |
|Sintaxis de objeto literal| Se define como la forma mas sencilla de declarar un objeto al proporcionar una lista de las propiedades entre llaves.|
| Constructores | Se carga una variable con un objeto "new Object()", esto permite manipularlo al agregar y eliminar metodos y propiedades.|
| Clases |Se define un molde con la palabra reservada "class", dentro de este elemento se declaran todos los elementos que engloba pero a diferencia de los objetos anteriores no son elementos del mismo tipo, mas bien, es necesario instanciar un elemento de dicho tipo de objeto.|
| Acceso a las propiedades | Para manipular propiedades de los objetos se puede emplera la notación por punto (objeto.propiedad) o con corchete (objeto["propiedad"]), ambos regresan exactamente el mismo valor.|


[![repositorio](https://i.pinimg.com/736x/a9/33/27/a93327e5f985f937723248ddaa1d53af.jpg)](https://github.com/ArgHero)
## Ejercicios de clase: Funciones
### No hubo, no fueron proporcionados en discord.
## Práctica: Objetos en JavaScript
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
- Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
- También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
- Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

## Clase Libro
```javascript
class Libro{
    #estados = ['disponible','prestado'];
    #capitulos = [];
    constructor(titulo,autor,año,estado,capitulos){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = año;
        this.setEstado(estado);
        this.#capitulos = capitulos;
    }
    setEstado(estado){
        this.estado = this.#estados.includes(estado)?estado:undefined;
    }
    cantidadCapitulos(){
        console.log(`${this.titulo} tiene ${this.#capitulos.length} capitulos.`);
    }
    agregarCapitulos(titulo){
        console.log(this.mensajes("agrega",titulo)
        .concat(` "${this.titulo}" tiene ${this.#capitulos.push(titulo)} capitulos.`));
    }
    borrarCapitulo(numero=this.cantidadCapitulos()){
        switch(numero){
            case 1:
                console.log(this.mensajes("borraFirst",this.#capitulos.shift()));
                break;
            case this.#capitulos.length:
                console.log(this.mensajes("borraLast",this.#capitulos.pop()));
                break;
            default:
                if(numero>1 && numero<this.#capitulos.length)
                    console.log(this.mensajes("borra",this.#capitulos.splice(numero-1, 1)));
                else
                    console.log(`Ingrese un capitulo válido de los ${this.#capitulos.length} que ${this.titulo} tiene.`);
        }
    }
    mensajes(tema,objetivo){
        switch(tema){
            case "agrega":
                return `Se ha agregado ${objetivo}.`;
            case "borraFirst":
                return `Se ha eliminado el primer elemento ${objetivo}.`;
            case "borraLast":
                return `Se ha eliminado el ultimo elemento ${objetivo}.`;
            case "borra":
                return `Se ha eliminado correctamente ${objetivo}`;
            default:
                return "No se ha especificado acción."
        }
    }
    describirLibro(){
        console.log(`\t- Libro titulado: ${this.titulo}\n\t- Escrito por: ${this.autor}\n\t- En el año: ${this.anio}\n\t- Estado actual: ${this.estado}`);
    }
    verCapitulos(){
        let mensaje = `El libro ${this.titulo} tiene los capitulos:\n`;
        for (let index = 0; index < this.#capitulos.length; index++) {
            mensaje += `\t-${this.#capitulos[index]}\n`
        }
        console.log(mensaje); 
    }

}
```
## Objeto de prueba
Esta declara un libro cualquiera.
```javascript
let capitulosPrueba = [
    "Capítulo 1: El comienzo de la estirpe",
    "Capítulo 2: El pacto ancestral",
    "Capítulo 3: La llegada de los forasteros",
    "Capítulo 4: Los secretos del pueblo",
    "Capítulo 5: La tragedia inevitable",
    "Capítulo 6: La redención de los Márquez",
    "Capítulo 7: El renacer de Macondo",
    "Capítulo 8: Las profecías cumplidas",
    "Capítulo 9: El legado del patriarca",
    
];
let libroDePrueba = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "prestado",capitulosPrueba);
```
## Prueba de funciones
Se prueba cada uno de los métodos creados, cabe destacar que eliminar capitulos depende de la cantidad actual de capitulos y además cuenta con mensajes personalizados.
```javascript
libroDePrueba.agregarCapitulos("Capítulo 10: El fin de la soledad")
libroDePrueba.agregarCapitulos("Capítulo 11: That time I got reincarnated in another World")
libroDePrueba.borrarCapitulo(8);
libroDePrueba.borrarCapitulo(1);
libroDePrueba.borrarCapitulo(11);
libroDePrueba.setEstado('disponible');
console.log(libroDePrueba);
libroDePrueba.describirLibro();
libroDePrueba.verCapitulos();
```