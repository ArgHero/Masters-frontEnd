document.getElementById("parrafo").innerText = "El texto no cambia";

console.log(document.documentElement);//Accediendo al nodo  HTML.
console.log(document.head);

let titulo = document.getElementById("titulo");
titulo.innerText = "Asumadre";
titulo.style.color = "purple";

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este elemento fue creado por JS";
document.body.appendChild(nuevoParrafo);

document.getElementById("boton").addEventListener("click",function(){
    alert("Se presionó un botón");
})
//----------------------------------------------------
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
function alerta(){
    alert("No hace nada. 🙂‍↕️");
}
function borrar(){
    var contenedor = document.getElementById("comentarios");
            var elemento = document.getElementById("1");
            if (contenedor && elemento) {
                contenedor.removeChild(elemento);
            }
    
}
