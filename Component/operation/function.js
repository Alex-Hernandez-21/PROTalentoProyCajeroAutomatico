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
    document.getElementById("actually").classList.remove("none");
    document.getElementById('monto-1').innerHTML = cuenta.monto; 
    console.log(cuenta); 
}

//-----Función retirar
let btnRestar = document.getElementById("restar");
let newMontos = document.getElementById("monto");

btnRestar.addEventListener('click', retirar);

function retirar(){
    let num2 = parseFloat(document.getElementById('num2').value);
    if(num2 > cuenta.monto){
        document.getElementById("retirar").classList.add("none");
        document.getElementById("wrong").classList.remove("none");
    }else{
        cuenta.monto -= num2; 
        localStorage.setItem("user", JSON.stringify(cuenta));
        document.getElementById("retirar").classList.add("none");
        document.getElementById("actually").classList.remove("none");
        document.getElementById('monto-1').innerHTML = cuenta.monto;
        console.log(cuenta); 
    }
}

//-----función para ocultar los modal
function ocultar() {
    document.getElementById("modal-detail").classList.add("none");
    document.getElementById("consignar").classList.add("none");
    document.getElementById("retirar").classList.add("none");
    document.getElementById("actually").classList.add("none");
    document.getElementById("wrong").classList.add("none");
}

//-----Función para cerrar sesión
function closeSesion(){
    window.location="index.html";
}