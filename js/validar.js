var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var teléfono = document.getElementById("teléfono");
var email = document.getElementById("email");
var ocupación= document.getElementById("ocupación");
var motivo = document.getElementById("motivo");
var cargo = document.getElementById("cargo");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFomulario() {
    console.log("enviando formulario...");

    var mensajesError = [];

    if(nombre.value === null || nombre.value === "") {
        mensajesError.push("Ingresa tu nombre");
    } 

    if(edad.value === null || edad.value === "") {
        mensajesError.push("Ingresa tu edad");
    } 

    if(teléfono.value === null || teléfono.value === "") {
        mensajesError.push("Ingresa tu teléfono");
    } 

    if(email.value === null || email.value === "") {
        mensajesError.push("Ingresa tu email");
    } 

    if(ocupación.value === null || ocupación.value === "") {
        mensajesError.push("Ingresa tu ocupación");
    } 

    if(motivo.value === null || motivo.value === "") {
        mensajesError.push("Ingresa un motivo");
    } 

    if(cargo.value === null || cargo.value === "") {
        mensajesError.push("Selecciona el puesto de trabajo");
    } 

    error.innerHTML = mensajesError.join(",");
    
    return false;

}


