//entrega 6:


function validacion(){
    document.getElementById("main").innerHTML =  `<div class="alert alert-success" role="alert" id="alert-success">
    ¡Compra exitosa! :)
  </div>`
  
}

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    //console.log(forms);
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
         //console.log(form)
         form.addEventListener('submit', event => {
              if (!form.checkValidity()) {
                   event.preventDefault()
                   event.stopPropagation()
              }else{
                validacion();
              }
              form.classList.add('was-validated')
         }, false)
    })
})()
  
  
let carritoArray = [];
let arraylink = [];
let objetoscomprados = [];

let subtotalGeneral = document.getElementById("subtotal"); // tomo las variables de 
let costoXenvío = document.getElementById("costo_envio");
let costoTotal = document.getElementById("costo_total");
let costoEnvio;


let tarjeta_credito = document.getElementById("tarjeta");
let numero_tarjeta = document.getElementById("num_tarjeta");
let codigo_seg = document.getElementById("codigo");
let vencimiento = document.getElementById("vencimiento");

let transferencia = document.getElementById("transferencia");
let numero_cuenta = document.getElementById("nro_cuenta");

let modalFeedback = document.getElementById("feedback_modal");
modalFeedback.style.display = "inline";

if(tarjeta_credito.checked){
    numero_tarjeta.removeAttribute("disabled", "");
    numero_tarjeta.setAttribute("required", "");
    codigo_seg.removeAttribute("disabled", "");
    codigo_seg.setAttribute("required", "");
    vencimiento.removeAttribute("disabled", "");
    vencimiento.setAttribute("required", "");

    numero_cuenta.setAttribute("disabled", "");
    numero_cuenta.removeAttribute("required", "");
}


// entrega 6:
let trans_o_tarjeta;

function metodoPago(){
    let metodoDePago = document.getElementsByName("flexRadioDefault");
    for(let i = 0; i < metodoDePago.length; i++){
        let pagoElemento = metodoDePago[i];
        if(pagoElemento.checked){
            trans_o_tarjeta = pagoElemento.value;
        }
    }
    if(trans_o_tarjeta == 1){
        numero_tarjeta.removeAttribute("disabled", "");
        numero_tarjeta.setAttribute("required", "");
        codigo_seg.removeAttribute("disabled", "");
        codigo_seg.setAttribute("required", "");
        vencimiento.removeAttribute("disabled", "");
        vencimiento.setAttribute("required", "");
    
        numero_cuenta.setAttribute("disabled", "");
        numero_cuenta.removeAttribute("required", "");
        if(numero_tarjeta.value !== "" && codigo_seg.value !== "" && vencimiento.value !== ""){
            modalFeedback.style.display="none";
        }else{
            modalFeedback.style.display="inline";
        }
    }
    if(trans_o_tarjeta == 2){
        numero_tarjeta.setAttribute("disabled", "");
        numero_tarjeta.removeAttribute("required", "");
        codigo_seg.setAttribute("disabled", "");
        codigo_seg.removeAttribute("required", "");
        vencimiento.setAttribute("disabled", "");
        vencimiento.removeAttribute("required", "");
    
        numero_cuenta.removeAttribute("disabled", "");
        numero_cuenta.setAttribute("required", "");
        if(numero_cuenta.value !== ""){
            modalFeedback.style.display="none";
        }else{
            modalFeedback.style.display="inline";
        }
    }
    
}


function tipoDeEnvio(){
    let tipo_envio = document.getElementsByName("valor");
    for(let i = 0; i < tipo_envio.length; i ++){
    let envio = tipo_envio[i];
    if(envio.checked){
        costoEnvio = envio.value;
     }
    }
    let subtotalGeneral = document.getElementById("subtotal");
    let subtotalDeLosProd = parseInt(subtotalGeneral.innerHTML);
    let costoDeEnvio = ((costoEnvio * subtotalDeLosProd)/100);
    console.log(costoDeEnvio);
    costoXenvío.innerHTML = costoDeEnvio;
    costoTotal.innerHTML = (costoDeEnvio + subtotalDeLosProd);
   
}

function subtotales(){
    let subtotalGeneral = document.getElementById("subtotal");
    let subtotales = document.getElementsByClassName("subtotales");
    console.log(subtotales);
    let sumaTotales = 0;
    for(let i = 0; i < subtotales.length; i++){
        sumaTotales += parseInt(subtotales[i].innerHTML);
    }
    subtotalGeneral.innerHTML = sumaTotales;
    tipoDeEnvio();
}

function subtotal(id, cost){
    let cant = parseInt(document.getElementById(`cantProd${id}`).value);
    console.log(cant);
    let total = (cant*cost);
    document.getElementById(`subProd${id}`).innerHTML = total;
    subtotales();
}



function mostrarDatosCarrito(array){


    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        document.getElementById("carrito-list-container").innerHTML += `
        <div class="row">
            <div class="col">
            <img src="img/prod${item.id}_1.jpg" id="nombreProd" alt="imagenItem"></p>
            </div>
            <div class="col">
            <p id="nombreProd">${item.name}</p>
            </div>
            <div class="col">
            <p id="costoProd${item.id}">${item.currency} ${item.unitCost}</p>
            </div>
            <div class="col">
                <input class="form-control-price" type="number" onchange="subtotal(${item.id}, ${item.unitCost})" id="cantProd${item.id}" value=${item.count} min=1 w="75px";> 
            </div>
            <div class="col">
               <label class="subtotales" id="subProd${item.id}">${item.unitCost*item.count}</label>
            </div>
            </div>
        </div>
        
        `
    };
    //entrega 6:
    subtotales();
}


//entrega 6:
function mostrarDatosCarrito2(item){


    let htmlContentToAppend = "";
    document.getElementById("carrito-list-container").innerHTML += `
        <div class="row">
            <div class="col">
            <img src="img/prod${item.id}_1.jpg" id="nombreProd" alt="imagenItem"></p>
            </div>
            <div class="col">
            <p id="nombreProd">${item.name}</p>
            </div>
            <div class="col">
            <p id="costoProd${item.id}">${item.currency} ${item.cost}</p>
            </div>
            <div class="col">
                <input class="form-control-price" type="number" onchange="subtotal(${item.id}, ${item.cost})" id="cantProd${item.id}" min=1 value="1" w="75px";> 
            </div>
            <div class="col">
               <label class="subtotales" id="subProd${item.id}">${item.cost*1}</label>
            </div>
            </div>
        </div>
        
        `

    subtotales();
}


document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(carrito).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            carritoArray = resultObj.data.articles;
            mostrarDatosCarrito(carritoArray);
        }

    });
    //entrega 6:
    objetoscomprados = JSON.parse(localStorage.getItem('elemento_comprado'));
     for (let i = 0; i < objetoscomprados.length; i++) {
          let id = objetoscomprados[i];
          //console.log(id);
          let link = `https://japceibal.github.io/emercado-api/products/` + id + `.json`;
          /* console.log(link) */
          if (!arraylink.includes(link)) {
               arraylink.push(link);
          }
     }
     // console.log(arraylink);
     for (let i = 0; i < arraylink.length; i++) {
          const link = arraylink[i];
          getJSONData(link).then(function (resultObj) {
               if (resultObj.status === "ok") {
                    array_comprados = resultObj.data;

                    // console.log(array_comprados)
                    mostrarDatosCarrito2(array_comprados);
               }

          });
          
     }
     let tipo_envio = document.getElementsByName("valor");
     for(let i = 0; i < tipo_envio.length; i ++){
        tipo_envio[i].addEventListener("change", function(){
            subtotales();
        })
     }
    
 });