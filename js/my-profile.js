
let primerNombre=document.getElementById("primerNombre");
let segundoNombre=document.getElementById("segundoNombre");
let primerApellido=document.getElementById("primerApellido");
let segundoApellido=document.getElementById("segundoApellido");
let telefono=document.getElementById("telefono");
let imgPerfil=document.getElementById("imgPerfil");
let imgFoto=document.getElementById("imgFoto");



function cargarFoto() {
    let file = new FileReader();
    file.readAsDataURL(imgPerfil.files[0]);
    file.onload = () => {
         let URLFOTO = file.result;

         localStorage.setItem("foto", URLFOTO);

         window.location.reload();
    };
};


//Funcion para gurdar datos en localstorage.
function guardarDatos(){
    let primerN=document.getElementById("primerNombre").value; 
    let segundoN=document.getElementById("segundoNombre").value;
    let primerA=document.getElementById("primerApellido").value;
    let segundoA=document.getElementById("segundoApellido").value;
    let tel=document.getElementById("telefono").value;

localStorage.setItem("primerN",primerN); 
localStorage.setItem("segundoN",segundoN);
localStorage.setItem("primerA",primerA);
localStorage.setItem("segundoA",segundoA);
localStorage.setItem("tel",tel);

}

//function de verificacion de formulario predeterminada de boostrap
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) { 
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            guardarDatos(); 
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  //DOM
  document.addEventListener("DOMContentLoaded", function(e){
    let emailUser=document.getElementById("emailUsuario");
    let usuario=localStorage.getItem("nombreDeUsuario");
    emailUser.innerHTML=usuario;

    let pNombre=localStorage.getItem("primerN"); 
    let sNombre=localStorage.getItem("segundoN");
    let pApellido=localStorage.getItem("primerA");
    let sApellido=localStorage.getItem("segundoA");
    let telef=localStorage.getItem("tel");

    primerNombre.value=pNombre;
    segundoNombre.value=sNombre;
    primerApellido.value=pApellido;
    segundoApellido.value=sApellido;
    telefono.value=telef;

    
  let fotoPerfil=()=>{
    return localStorage.getItem("foto");


  }
  
 let mostrarImg=()=>{
    if(fotoPerfil()){
        imgFoto.src=fotoPerfil();
    }
 }
 mostrarImg();

  });

