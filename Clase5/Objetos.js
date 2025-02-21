const persona = {
    nombre: "Saul",
    edad: 25,
    ciudad: "cedemequis"
}
console.log(persona.edad);
console.log(persona["ciudad"]);
//Modificar el valor
persona.edad = 23;
console.log(persona.edad);
//Añadir valores
persona.genero = "masculino";
persona.estatura = 1.80;
console.log(persona);
delete persona.estatura;
console.log(persona);

//Declarar un objeto

const coche = {
    marca: "Chevrolet",
    modelo: "Aveo",
    color: "gris",
    arrancar: function(){
        console.log("Se arrancó el coche.")
    }
}
coche.arrancar();

//Operaciones matemáticas

const calculadora = {
    suma: function(a,b){
        return a+b;
    },
    resta: function(a,b){
        return a-b;
    }
}
console.log(calculadora.suma(4,5));

const trabajo = {
    nombre: "bbva",
    puesto: "Software Engineer",
    ubicacion: {
        ciudad: "Ciudad de méxico",
        calle: "Reforma",
        pais: "México"
    },
    salario: 334,
    moneda: "peso",
}
console.log(trabajo.ubicacion.ciudad);
console.log(trabajo['ubicacion']["ciudad"]);
delete trabajo.moneda;
console.log(trabajo);

const usuario = {
    nombre: "Saul",
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`);
    }
}
usuario.saludar();

//Molde de objetos
class Persona{
    constructor(nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
const nadia = new Persona("Nadia",44);
nadia.saludar();

//herencia
class Estudiante extends Persona{
    constructor(nombre,edad,genero,carrera,promedio){
        super(nombre,edad,genero);
        this.carrera = carrera;
        this.promedio = promedio
    }
    estudiar(){
        console.log(`${this.nombre} esta estudiando ${this.carrera}`);
    }
}
const Marquitos = new Estudiante("Marco",22,"Masculino","Mecatrónica",9.45);
Marquitos.estudiar();
Marquitos.saludar();

//------------Pyoyecto del campus---------------------------------------------------
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
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
//----------------Implementación-------------------
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
libroDePrueba.agregarCapitulos("Capítulo 10: El fin de la soledad")
libroDePrueba.agregarCapitulos("Capítulo 11: That time I got reincarnated in another World")
libroDePrueba.borrarCapitulo(8);
libroDePrueba.borrarCapitulo(1);
libroDePrueba.borrarCapitulo(11);
libroDePrueba.setEstado('disponible');
console.log(libroDePrueba);
libroDePrueba.describirLibro();
libroDePrueba.verCapitulos();











