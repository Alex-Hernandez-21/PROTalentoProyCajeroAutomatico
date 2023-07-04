const cuenta =JSON.parse(localStorage.getItem("user"));

//-----Función Consultar saldo
function consultarSaldo(){
    document.getElementById("modal-detail").classList.remove("none");
    document.getElementById('monto').innerHTML = cuenta.monto;            
    document.getElementById('user').innerHTML = cuenta.nombre;
}

//-----Mostrar modal consignar
function mostrarModalConsignar(){
    document.getElementById("consignar").classList.remove("none");
}

//-----Mostrar modal retirar
function mostrarModalRetirar(){
    document.getElementById("retirar").classList.remove("none");
}

//-----Función consignar
let btnSumar = document.getElementById("sumar");
let newMonto = document.getElementById("monto");

btnSumar.addEventListener('click', consignar);

function consignar(){
    let num = parseFloat(document.getElementById('num').value); 
    cuenta.monto += num; 
    
    localStorage.setItem("user", JSON.stringify(cuenta));
    document.getElementById("consignar").classList.add("none");
    console.log(cuenta); 
}

function ocultar() {
    document.getElementById("modal-detail").classList.add("none");
    document.getElementById("consignar").classList.add("none");
    document.getElementById("retirar").classList.add("none");
}

//-----Función para cerrar sesión
function closeSesion(){
    window.location="index.html";
}