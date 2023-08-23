const juguetes= [
    {
        id:"00",
        foto:"https://www.clarin.com/img/2016/08/19/B1QF_RhFEe_720x0.jpg",
        toy:"El Tamagotchi",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"01",
        foto:"https://i.ytimg.com/vi/4rr25CeuoCI/hqdefault.jpg",
        toy:"Los Furbys",
        año:"1994",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"02",
        foto:"https://www.clarin.com/img/2016/08/19/rJX__R3t4g_720x0.jpg",
        toy:"El Supersoaker",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"03",
        foto:"https://www.clarin.com/img/2016/08/19/SyN_uAnYNe_720x0.jpg",
        toy:"Play-Doh",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"04",
        foto:"https://www.museodeljuguetesi.gob.ar/wp-content/uploads/2022/03/IMG_3906-1024x706.jpg",
        toy:"Frutillita",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"05",
        foto:"https://www.clarin.com/img/2016/08/19/rklFdR3F4e_720x0.jpg",
        toy:"Pulgas Locas",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"06",
        foto:"https://www.clarin.com/img/2016/08/19/SkZYOC2FEl_720x0.jpg",
        toy:"El ViewMaster",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"07",
        foto:"https://i.pinimg.com/originals/96/81/bc/9681bcfe7e2a98e6f8a09a5ece74c1b4.jpg",
        toy:"Cartuchera",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"08",
        foto:"https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/9/8/9852453565985_20220507170027.jpg",
        toy:"La pizarra mágica",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"09",
        foto:"https://nosomosnonos.com/wp-content/uploads/2019/08/images-4-1.jpeg",
        toy:"Tortugas Ninjas",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },
    {
        id:"10",
        foto:"https://nosomosnonos.com/wp-content/uploads/2019/08/7083997.jpg",
        toy:"Los Ponys",
        año:"1992",
        precio:1500,
        cantidad: 1,
    },

]




//productos pagina




juguetes.push ({id:'11',foto:'https://http2.mlstatic.com/D_NQ_NP_967991-MLA52289963994_112022-O.webp',toy:'Tazos',año:'1997',precio:2599,cantidad: 1});

//console.table(juguetes);









let articuloJugueton = document.getElementById('jugueton');

const verCarro = document.getElementById('verCarrito');
const modeloDelCarrito = document.getElementById ('modeloContenedor');
const cantidadCarrito = document.getElementById ('cantidadCarrito');


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getproducts = async ()=>{
    const response = await fetch ("data.json");
    const data =  await response.json();
    console.log (data);
};

getproducts ();

function renderizarProductos(listaProds){


    for ( const toys of listaProds){
        articuloJugueton.innerHTML += `
        <div class="card" style="width: 16rem;">
      <img src="${toys.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${toys.toy}</h5>
        <p class="card-text">${toys.precio}</p>
        <button id=${toys.id} class="btn btn-primary agregar">Agregar</button>
      </div>
    </div>`;
    }
    
        let botones = document.getElementsByClassName('agregar');
        for (const boton of botones){
    
        boton.addEventListener('click',()=>{
            //console.log (' hiciste click en el id:' +boton.id);
            const prodACarro = juguetes.find((toy)=>toy.id == boton.id);
               // console.table(prodACarro);
            agregarACarrito(prodACarro);

          

        });
        boton.onmouseover = () => boton.classList.replace('btn-primary','btn-success');
        boton.onmouseout = () => boton.classList.replace('btn-success','btn-primary',);
      
    

    }
    
}


const marcarCarrito =()=>{
//console.log('holaaaaa funciona');
modeloContenedor.innerHTML = "" ;
modeloContenedor.style.display= 'flex';
const modeloCarro = document.createElement("div");
modeloCarro.className = "model-carro"
modeloCarro.innerHTML = `
<h1 class="model-carro-titulo">carrito</h1>
`;
modeloDelCarrito.append(modeloCarro);

const modeloButton = document.createElement("h1");

modeloButton.innerText = "X cerrar";
modeloButton.className = ("modelo-botonera");




modeloButton.addEventListener('click',()=> {
    modeloDelCarrito.style.display ="none";


});

modeloCarro.append (modeloButton);



carrito.forEach((toys)=>{

let contendorCarrito = document.createElement('div');
contendorCarrito.className = 'modelo-contenedor';
contendorCarrito.innerHTML = `
<img class="fotoCarro" src="${toys.foto}">
<h3>${toys.toy}</h3>
<p>${toys.precio} $</p>
<span class="restar"> ➖ </span>
<p>${toys.cantidad} cantidad</p>
<span class="sumar"> ➕ </span>
<p>total:${toys.cantidad * toys.precio} $ </p>
<span class="equis">❎</span>
`;

modeloDelCarrito.append (contendorCarrito);



let restar = contendorCarrito.querySelector (".restar")
restar.addEventListener('click',()=>{
//console.log('CLICK RESTAR');
if(toys.cantidad !== 1 ){
    toys.cantidad --;
};
guardarLocal ();
marcarCarrito ();



});

let sumar = contendorCarrito.querySelector (".sumar")
sumar.addEventListener('click',()=>{
toys.cantidad ++;

guardarLocal ();
marcarCarrito ();

});


let botonEliminar = contendorCarrito.querySelector (".equis");

botonEliminar.addEventListener('click',()=>{
    eliminarJuguete(toys.id);

})




});

const totalCompra = carrito.reduce((acumulador, el)=> acumulador + el.precio * el.cantidad, 0);
 const compraDelTotal = document.createElement ('div');
 compraDelTotal.className= 'total-carrito';
 compraDelTotal.innerHTML = ` total a pagar: ${totalCompra} $ `;

 modeloDelCarrito.append(compraDelTotal);





 };


     






            
    renderizarProductos(juguetes);
     
    function agregarACarrito(toys){
       

        carrito.push(toys);
        //console.table(carro);
         

       
       // sweet alert  2

       Swal.fire({
        title: 'perfecto!',
        text: `agregaste ${toys.toy} al carrito`,
        imageUrl: `${toys.foto}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

verChango ();  
guardarLocal();


 

 

   
}


verCarrito.addEventListener("click", marcarCarrito);


 
const eliminarJuguete =(id)=>{
    const buscaId = carrito.find((element)=>element.id === id);
 
    carrito = carrito.filter((carritoId) => {
     return carritoId !== buscaId;
    });


    verChango ();
    guardarLocal();
    marcarCarrito ();
 
 
 
 };
 

const verChango = () =>{
    cantidadCarrito.style.display= "block";

const carritoLength = carrito.length;
localStorage.setItem ("carritoLength", JSON.stringify(carritoLength));





    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

verChango ();


const guardarLocal = () =>{

localStorage.setItem("carrito", JSON.stringify(carrito));

};


JSON.parse(localStorage.getItem("carrito"));
