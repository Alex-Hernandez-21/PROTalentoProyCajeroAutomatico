var montoUser = 1000000;
var montoUser2 = 2000000;
var montoUser3 = 3000000;

var newMontoUser = 0;
// const button =document.getElementById("button");
// const container_modal =document.getElementById("container_modal");
// const mod_btn = document.getElementById("mod_btn");

function consultarSaldo(){
    localStorage.setItem("action", "consultar");     //se asignar la variable consultar
    this.visible();
    if (localStorage.getItem("user") == "alexander"){   //me llama la variable y le asigna otra
        if(newMontoUser != 0){
            document.getElementById('texto_nav1').innerHTML = newMontoUser; //para pintar variable en html
        }else{
            document.getElementById('texto_nav1').innerHTML = montoUser;            
        }
        document.getElementById('user').innerHTML = "Alexander";   //pintar variable en html
    }else if (localStorage.getItem("user") == "johan"){
        document.getElementById('texto_nav1').innerHTML = montoUser2;
        document.getElementById('user').innerHTML = "Johan";
    }else{
        document.getElementById('texto_nav1').innerHTML = montoUser3;
        document.getElementById('user').innerHTML = "Viviana";
    }
}

function getInto(){
    localStorage.setItem("action", "ingresar");
    this.visible();
}
function getIntoOperation(){
    let inputValue = document.getElementById("num").value;

    if (localStorage.getItem("user") == "alexander"){
        this.newMontoUser =  parseInt(inputValue) + parseInt(montoUser);
        this.consultarSaldo();

    }else if (localStorage.getItem("user") == "johan"){
        this.newMontoUser =parseInt(inputValue)+parseInt(montoUser2);
        this.consultarSaldo();
    }else{
        this.newMontoUser =parseInt(inputValue)+parseInt(montoUser3);
        this.consultarSaldo();
    }
}

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