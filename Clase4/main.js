//-----------Traducionales------------
//funciones sin parametros
function saludar(){
    console.log("Hola mundo!");    
}

saludar();

//Funcion con parámetros
function saludarAlguien(nombre){
    console.log(`Hola ${nombre}, buen día.`);
}
saludarAlguien("Maribel");

//Funciones por defecto
function saludarInvitado(nombre = "Invitado"){
    console.log(`Hola bienvendo querid@ ${nombre}, espero encuentre amena su visita.`);
}
saludarInvitado();
saludarInvitado("Pancha");

//Funciones que retornan valores
function multiplicar(a,b){
    return a*b;
}
let resultado = multiplicar(123,321);
console.log(resultado);
//-----------------Aninimas-------------
const anonima =  function(){
    console.log("Anónimo");
}
anonima();

//--callback--:
setTimeout(function(){
    console.log("Este comentario va a contener un tiempo de espera");  
},5000);

//Arroy Function 
const arrowFunction = () => {
    console.log("Esto es una flecha");
}
arrowFunction();

document.getElementById("boton").addEventListener("click", ()=>alert("Hola mundo!"));

const suma = (x,y) => x = y;
console.console.log((suma(1,2)));

co

