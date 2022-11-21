//entrega 5:
let productos_comprados = []


// entrega 3:

let resultJson = [] //array donde se van a guardar todos los comentarios mas los que se agreguen
let jsonProd;

let info_producto = [];

let com_producto = [];

let comentario_producto = [];


//desafiate:
let comentarios = document.getElementById("coment_info");
let puntaje = document.getElementById("puntaje");
let botonEnviar = document.getElementById("botonEnviarComentario");


if(localStorage.getItem("nombreUsuario") != null){
    let campoNombre = document.getElementById("usuarioId") //id de nav
    let contenidoCampo = ""; 
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    campoNombre.innerHTML = nombreUsuario;
    
}

//entrega 5:
function comprar(id){
  if(localStorage.getItem("elemento_comprado")!= null){
      productos_comprados = JSON.parse(localStorage.getItem("elemento_comprado"));
  }
  if(!productos_comprados.includes(id)){
      productos_comprados.push(id);
      localStorage.setItem("elemento_comprado", JSON.stringify(productos_comprados)); //guardar los productos en el array con una sola key
  }
    
}


//entrega 3:

let lista_productos = [];


function mostrarLista(array, arrayComentarios){

    let htmlContentToAppend = "";
    let htmlContentToAppend2 = "";
    
        htmlContentToAppend += `

        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
            
                <div>
                    <div class="d-flex w-100 justify-content-between">
                        <h1 class="mb-1">${array.name}</h1>

                        
                        <button onclick="comprar(${array.id})" class="botonComprar">Comprar</button>
                    </div>
                          

                    <hr>
                    <h5 class="mb-1">Precio:</h5> ${array.cost} ${array.currency}
                    <br>
                    <br>
                    <h5 class="mb-1">Descripción:</h5> ${array.description}
                    <br>
                    <br>
                    <h5 class="mb-1">Categoría:</h5>${array.category}
                    <br>
                    <br>
                    <h5 class="mb-1">Cantidad de vendidos:</h5>${array.soldCount}
                    <br>
                    <br>
                </div>
            </divd
            <br>
            <br>
            <br>
            <br>
        </div>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" id="imagencarrusel">
            <img src="img/prod${prodId}_1.jpg"  id="img" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/prod${prodId}_2.jpg"  id="img" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/prod${prodId}_3.jpg" id="img"  class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
          <img src="img/prod${prodId}_4.jpg" id="img"  class="d-block w-100" alt="...">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" style="background-color: black" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon w=10" aria-hidden="true" ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" style="background-color: black" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon w=10" aria-hidden="true"  ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        <div class="div_imagen">
        <h4 class="mb-1">Imágenes ilustrativas:</h4>
        <br>
             <img src="img/prod${prodId}_1.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_2.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_3.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>
             <div class="div_imagen">
             <img src="img/prod${prodId}_4.jpg" alt="product image"  class="img-thumbnail img_prod">
             </div>

             
        `
        
        

        for(let i= 0; i < arrayComentarios.length; i++){
            let comentario = arrayComentarios[i];
            let puntaje = "";

            for(let p = 1; p <= comentario.score; p++){
                puntaje += `<span class= "fa fa-star checked"></span>`;
            };
            for(let p = comentario.score+1; p <= 5; p++){
                puntaje += `<span class= "fa fa-star"></span> `;
            };


            htmlContentToAppend2 += `
            <div class="container_comentarios">
            <p><strong>${comentario.user}</strong> escribió:</p>
            <p>${comentario.description} - ${puntaje} <div style="text-align:right"></div></p>
            <p>${comentario.dateTime}</p>

            </div>
            
              
            `

            
        }
            document.getElementById("contenedor-info-producto").innerHTML = htmlContentToAppend;
            comentarios.innerHTML += htmlContentToAppend2;
        }

       

//entrega 4:


function guardarIdProd(id) {
    localStorage.setItem("ProductoID", id);
    window.location = "product-info.html"
}


function mostrarRel(array){
    for(let i = 0; i<array.length; i++){
        let prodRel = array[i];
        document.getElementById("prodRel").innerHTML += `
        <div class="card" style="width: 18rem; cursor:pointer;"  onclick="guardarIdProd(${prodRel.id})">
        <br>
        <br>
        <img src="${prodRel.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prodRel.name}</h5>
        </div>
      </div>
      `
    }
}
     
        


document.addEventListener("DOMContentLoaded", function(e){


    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
       if (resultObj.status === "ok"){
        comentario_producto = resultObj.data;
           
       };
   });

   getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
     info_producto = resultObj.data;
        mostrarLista(info_producto, comentario_producto); 
        arrayRelacionados = info_producto.relatedProducts;

        mostrarRel(arrayRelacionados);

    };
});
});


