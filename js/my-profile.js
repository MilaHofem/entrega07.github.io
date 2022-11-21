// aca llamamos a todas las variables donde iran los datos del usuario

let pnombre = document.getElementById("primernombre");
let snombre = document.getElementById("segundonombre");
let papellido = document.getElementById("primerapellido");
let sapellido = document.getElementById("segundonombre");
let email = document.getElementById("email");
let tel = document.getElementById("telefonocontacto");
let foto = document.getElementById("imgPerfil");


function ponerFoto(){
  let file = new FileReader();
  file.readAsDataURL(imagenPerfil.files[0]);
  file.onload = () => {
       let urlFoto = file.result;

       localStorage.setItem("foto", urlFoto);

         window.location.reload();
}
}

function datos(){
  let primerNombre = document.getElementById("primernombre").value;
  let segundoNombre = document.getElementById("segundonombre").value;
  let primerApellido = document.getElementById("primerapellido").value;
  let segundoApellido = document.getElementById("segundoapellido").value;
  let emailUsuario = document.getElementById("email").value;
  let telefono = document.getElementById("telefonocontacto").value;

//local storage

localStorage.setItem("primernombre", primernombre);
localStorage.setItem("segundonombre", segundonombre);
localStorage.setItem("primerapellido", primerapellido);
localStorage.setItem("segundoapellido", segundoapellido);
localStorage.setItem("emailUsuario", emailUsuario);
localStorage.setItem("telefono", telefono);
}

function validacion(){
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')


  Array.prototype.slice.call(forms).forEach(form => {
       
       form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                 event.preventDefault()
                 event.stopPropagation()
            }else{
              datos();
            }
            form.classList.add('was-validated')
       }, false)
  })
}

//dom
document.addEventListener("DOMContentLoaded", function(e){
  let emailUsuario = document.getElementById(email);
  let usuario = localStorage.getItem("nombreUsuario")// dudoso
  emailUsuario.innerHTML = usuario;

  // llamamos los datos guardados del localstorage
  let pnombre = localStorage.getItem("primerNombre")
  let snombre = localStorage.getItem("segundoNombre")
  let papellido = localStorage.getItem("primerApellido")
  let sapellido = localStorage.getItem("segundoApellido")
  let telefono = localStorage.getItem("telefono")
  
  //
  primerNombre.value = pnombre
  segundoNombre.value = snombre
  primerApellido.value = papellido
  segundoApellido.value = sapellido
  telefono.value = telefono

  let fotoPerfil=()=>{
    return localStorage.getItem("foto")
  }

  let mostrarFoto=()=>{
    if(fotoPerfil()){
      imgPerfil.src=fotoPerfil();
    }
  }
  mostrarFoto();

});






if(localStorage.getItem("nombreUsuario") != null){
    let campoNombre = document.getElementById("usuarioId") //id de nav
    let contenidoCampo = ""; 
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    campoNombre.innerHTML = nombreUsuario;
    
  }

