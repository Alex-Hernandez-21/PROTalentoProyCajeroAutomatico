var montoUser = 1000000;
var montoUser2 = 2000000;
var montoUser3 = 3000000;


// const button =document.getElementById("button");
// const container_modal =document.getElementById("container_modal");
// const mod_btn = document.getElementById("mod_btn");

function consultarSaldo(){
    localStorage.setItem("action", "consultar");     //se asignar la variable consultar
    this.visible();
    if (localStorage.getItem("user") == "alexander"){   //me llama la variable y le asigna otra
        document.getElementById('monto').innerHTML = montoUser;            
        document.getElementById('user').innerHTML = "Alexander";   //pintar variable en html
        
    }else if (localStorage.getItem("user") == "johan"){
        document.getElementById('monto').innerHTML = montoUser2;
        document.getElementById('user').innerHTML = "Johan";
    }else{
        document.getElementById('monto').innerHTML = montoUser3;
        document.getElementById('user').innerHTML = "Viviana";
    }
}



function getInto(){
    localStorage.setItem("action", "ingresar");
    this.visible();
}

let boton = document.getElementById("sumar");
let newMonto = document.getElementById("monto");

newMonto.addEventListener('click', hacerSuma());

function hacerSuma(){
    let num1 = parseFloat(document.getElementById('montoUser').value); 
    let num = parseFloat(document.getElementById('num').value); 
    let suma = num1 + num;
    newMonto.innerHTML = `Su monto es de ${suma}`;
}

// function sumar()
// {
//   const $total = document.getElementById('montoUser');
//   let subtotal = 0;
//   [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( number ) {
//     if(number.value !== '') {
//       subtotal += parseFloat(number.value);
//     }
//   });
//   $total.value = subtotal;
// }


// function getIntoOperation(){
//     let inputValue = document.getElementById("num").value;

//     if (localStorage.getItem("user") == "alexander"){
//         this.newMontoUser =  parseInt(inputValue) + parseInt(montoUser);
//         this.consultarSaldo();

//     }else if (localStorage.getItem("user") == "johan"){
//         this.newMontoUser =parseInt(inputValue)+parseInt(montoUser2);
//         this.consultarSaldo();
//     }else{
//         this.newMontoUser =parseInt(inputValue)+parseInt(montoUser3);
//         this.consultarSaldo();
//     }
// }

function withdraw(){
    localStorage.setItem("action", "retirar");
    this.visible();
}

//funciones para visibilizar y ocultar el div
function visible() {
    if (localStorage.getItem("action")=="consultar"){
        document.getElementById("none").style.display="";
    }else if(localStorage.getItem("action")=="ingresar"){
        document.getElementById("into").style.display="";
    }else{
        document.getElementById("withdraw").style.display="";
    }
}

function ocultar() {
    document.getElementById("none").style.display="none";
    document.getElementById("into").style.display="none";
    document.getElementById("withdraw").style.display="none";
}

function closeSesion(){
    window.location="index.html";
}