//-----Evento para ocultar y mostrar los formularios
const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

//-----Array de la información
const cuentas =[
    {"nombre":"Alexander","username":'alexander',"password":'1111','monto': 1000000},
    {"nombre":"Johan","username": 'johan',"password":'2222', 'monto':2000000},
    {"nombre":"Viviana","username": 'viviana',"password":'3333', 'monto': 3000000}
    
]

//-----Función login
function iniciar(){
    const username = document.formLogin.username.value;
    const password = document.formLogin.password.value; 
    let cuenta;

    cuentas.forEach(acc => {
        if (acc.username === username){
            cuenta = acc;            
        }
    } ) 
    if (password === cuenta.password && username.toLowerCase() === cuenta.username){
          localStorage.setItem("user", JSON.stringify(cuenta));
          window.location="main.html";
    }else{
        document.getElementById('login-error').classList.remove("none");
    }       
}

function ocultar() {
    document.getElementById("login-error").classList.add("none");
}

