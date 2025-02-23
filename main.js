document.getElementById("parrafo").innerText = "El texto no cambia";

console.log(document.documentElement);//Accediendo al nodo  HTML.
console.log(document.head);

let titulo = document.getElementById("titulo");
titulo.innerText = "Cambio del texto";
titulo.style.color = "purple";

let nuevoParrafo = document.createElement("h1");
nuevoParrafo.innerText = "Este elemento fue creado por JS";
document.getElementById("temasClase").appendChild(nuevoParrafo);

document.getElementById("boton").addEventListener("click",function(){
    alert("Se presionó un botón");
})
//----------------------------------------------------
var usuario = new Object();
usuario.nombre = "Saul Hernandez";
usuario.URLfoto = "https://i.pinimg.com/736x/26/a9/7d/26a97dc2775ad59e85a1cf906063a9e8.jpg";
var acumuladorClicks = 0;

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
function alerta(){
    alert("No hace nada. 🙂‍↕️");
}
function eliminarComentario(event) {
    event.target.parentElement.remove();
}
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

function ejercicio1(){
    let texto = document.getElementById("ejercicio");
    texto.style.backgroundColor = generarColorAleatorio();
    texto.style.color = generarColorAleatorio();
}

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function ejercicio2(){
   let elemento = document.getElementById("ejercicio");
   elemento.style.visibility = (elemento.style.visibility == 'hidden')?'visible':'hidden';
}

function ejercicio3(){
    acumuladorClicks++;
    document.getElementById("ejercicio").textContent = `Cuenta de clicks: ${acumuladorClicks}`

}

//window.onload = publicarComentario();

