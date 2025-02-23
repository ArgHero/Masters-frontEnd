# Introduccion al DOM en JavaScript
## _Saul Omar Arguello Hernandez_
> En esta clase se abordaron los metodos básicos para modificar los elementos HTML de manera dinámica empleando un archivo JavaScript.

### Funciones tradicionales
| Tema | Descripción |
| ------ | ------ |
|Estructura del DOM| El DOM se organiza como un árbol jerárquico, donde cada elemento HTML es un nodo dentro de este árbol.|
| Manipulación del DOM  | JavaScript es el lenguaje que nos permite interactuar con el DOM. A través de JavaScript, podemos acceder a los elementos HTML de una página, modificarlos, agregar nuevos elementos, eliminar otros, cambiar sus estilos y mucho más.|
| Selección de elementos |seleccionar los elementos que queremos modificar. Aquí hay algunas formas comunes de hacerlo: 1. document.getElementById(); 2. document.getElementsByClassName(); 3. document.getElementsByTagName();4. document.querySelector();5. document.querySelectorAll()|
| Manipulación de elementos | Una vez que hemos seleccionado los elementos, podemos modificarlos de varias maneras: 1. Cambiar el contenido de un elemento: Usando la propiedad innerHTML o textContent, podemos cambiar el contenido de un elemento.; 2. Cambiar los atributos de un elemento: Por ejemplo, podemos cambiar el atributo src de una imagen; 3. Cambiar el estilo de un elemento: Podemos modificar el estilo CSS de un elemento a través de la propiedad style.; 4. Crear nuevos elementos: Usando JavaScript, podemos crear nuevos elementos HTML y añadirlos a la página.|
|Manejo de eventos con addEventListener|Una de las formas más comunes de hacer esto es usando el método addEventListener. Este método permite asociar una función a un evento específico de un elemento HTML. Por ejemplo, cuando el usuario hace clic en un botón, podemos usar addEventListener para ejecutar una función que modifique algún aspecto de la página, como cambiar el contenido o el estilo.|

## RESUMEN
En esta lección, hemos aprendido lo siguiente:

- El DOM es una representación estructural de los elementos HTML de una página web y permite que se manipulen dinámicamente mediante JavaScript.
- El DOM organiza los elementos HTML como un árbol, donde cada nodo es un elemento o un atributo de la página.
- JavaScript nos permite seleccionar, modificar, agregar o eliminar elementos del DOM, lo que nos da control total sobre la página web.
- Algunas de las principales maneras de seleccionar elementos del DOM incluyen getElementById, getElementsByClassName, y querySelector.
- Usamos JavaScript para interactuar con los elementos seleccionados, cambiar su contenido, estilo, atributos o incluso eliminarlos o añadir nuevos elementos.
addEventListener es una forma de escuchar eventos en los elementos HTML y ejecutar funciones cuando esos eventos ocurren.
- Es útil para hacer que una página web sea interactiva y pueda responder a las acciones del usuario.
- Puedes usar addEventListener con cualquier tipo de evento, como 'click', 'keydown', 'mouseover', etc.
- A través de este método, podemos hacer que el contenido de la página cambie dinámicamente según las i


[![repositorio](https://i.pinimg.com/736x/a7/87/3a/a7873a5b3ab515b52fb9008d7436f459.jpg)](https://github.com/ArgHero)
## Ejercicios de clase: Funciones
- Cambiar el color de un texto cuando presionamos un botón.
```javascript
function ejercicio1(){
    let texto = document.getElementById("ejercicio");
    texto.style.backgroundColor = generarColorAleatorio();
    texto.style.color = generarColorAleatorio();
}
```
- Crear un botón que permita mostrar u ocultar un texto.
```javascript
function ejercicio2(){
   let elemento = document.getElementById("ejercicio");
   elemento.style.visibility = (elemento.style.visibility == 'hidden')?'visible':'hidden';
}
```
- Contador de clicks.
```javascript
function ejercicio3(){
    acumuladorClicks++;
    document.getElementById("ejercicio").textContent = `Cuenta de clicks: ${acumuladorClicks}`

}
```
## Práctica: Objetos en JavaScript
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

- Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
- Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
- Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
- Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)

### Variables del programa
```javascript
var usuario = new Object();
usuario.nombre = "Saul Hernandez";
usuario.URLfoto = "https://i.pinimg.com/736x/26/a9/7d/26a97dc2775ad59e85a1cf906063a9e8.jpg";
var acumuladorClicks = 0;
```

### Eliminar un comentario
```javascript
function eliminarComentario(event) {
    event.target.parentElement.remove();
}
```

### Publicar un comentario
```javascript
function publicarComentario(){
    let  entrada = document.getElementById("areaTexto").value;
    if ( entrada != '' && entrada != /s+/) {
        let comentario = document.getElementById("comentarioTemplate").content.cloneNode(true);
        comentario.querySelector("img").src=usuario.URLfoto;
        comentario.querySelector(".usuario").textContent = usuario.nombre;
        comentario.querySelector(".fecha").textContent = moment().subtract(0, 'days').calendar();
        comentario.querySelector(".cuerpo").textContent = document.getElementById("areaTexto").value;
        document.getElementById("areaTexto").value = '';
        let cajaComentarios = document.getElementById('comentarios');
        cajaComentarios.appendChild(comentario);
        cajaComentarios.scrollTop = cajaComentarios.scrollHeight;
        contenedor.scrollTop = contenedor.scrollHeight;
    }
}
```

### Funciones complementarias
```javascript
document.getElementById('ingresarComentario').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        publicarComentario();
    }
});

document.getElementById('ingresarComentario').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById("areaTexto").value = '';
    }
});

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
```