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

// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const button = document.getElementById("buttons");

// button.addEventListener('click')

// const button =document.getElementById("button");
// const none =document.getElementById("none");
// const mod_btn = document.getElementById("mod_btn");

function iniciar(){
    let password=1111;
    let user="alexander";
    let password2=2222;
    let user2="johan";
    let password3=3333;
    let user3="viviana";
    
    if (document.formLogin.password.value==password && (document.formLogin.username.value.toLowerCase())==user){
        window.location="main.html";
        localStorage.setItem("user", "alexander"); //crea variable en el localstore
    }
    else if (document.formLogin.password.value==password2 && (document.formLogin.username.value.toLowerCase())==user2){
        window.location="main.html";
        localStorage.setItem("user", "johan");
    }
    else if (document.formLogin.password.value==password3 && (document.formLogin.username.value.toLowerCase())==user3){
        window.location="main.html";
        localStorage.setItem("user", "viviana");
    }else{
        this.visible();
    }       
    
}

// mod_btn.addEventListener('click', () =>{
//     container_modal.classList.remove('show');
// })

function visible() {
    document.getElementById("none").style.display="";
    // document.getElementById("hide").style.visibility="";
}

function ocultar() {
    document.getElementById("none").style.display="none"; 
    // document.getElementById("hide").style.visibility="hidden";
}