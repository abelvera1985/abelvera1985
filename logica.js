/*let nombre= prompt ("ingresa tu nombre");
let apellido= prompt("ingresa tu apellido")
let edad= prompt ("ingresa tu edad ");
alert("ya puedes elegir tu pelicula " +nombre +" "+apellido)
let totalCompra = 0;
let pelicula = prompt ("1 -el silencio de los inocentes  ...$3500 \n 2 -Cementerio de animales  ... $ 4200   \n 3 -Mi pobre angelito ...$2500 \n 4 - Hook ... $3000 \n 5 - Quisiera ser grande ... $1000 \n 6 - Perros de la calle ... $2000 \n 0 - Para finalizar ")
while (pelicula != 0){
    switch(pelicula){
        case"1":
        alert("el silencio de los inocentes ... $3500");
        incrementarTotalCompra (3500)
        break
        case"2":
        alert("agregaste Cementerio de animales  ... $4200");
        incrementarTotalCompra (4200)
        break
        case"3":
        alert("agregaste Mi pobre angelito ... $2500");
        incrementarTotalCompra (2500)
        break
        case"4":
        alert("agregaste Hook ... $3000");
        incrementarTotalCompra (3000)
        break
        case"5":
        alert("agregaste Quisiera ser grande  ... $1000");
        incrementarTotalCompra (1000)
        break
        case"6":
        alert("agregaste Perros de la calle ... $2000");
        incrementarTotalCompra (2000)
        break 
        default:
            alert("codigo erroneo")
            break

    }
    pelicula = prompt ("1 -el silencio de los inocentes  ...$3500 \n 2 -Cementerio de animales  ... $ 4200 ...  \n 3 -Mi pobre angelito ...$2500 \n 4 - Hook ... $3000 \n 5 - Quisiera ser grande ... $1000 \n 6 - Perros de la calle ... $2000 \n 0 - Para finalizar ")
}

alert ("monto total de tu compra $"+ totalCompra)

function incrementarTotalCompra (precioLibro){
    totalCompra = totalCompra + precioLibro;
 console.log("total hasta el momento + totalCompra");
}
function despedir (nombre){
    alert ("gracias por tu compra" +" "+nombre +" " +apellido)
}
despedir (nombre);*/

//const carro = [];


function filtrarPorPrecio(precioMax){
    const filtrados = peliculas.filter((pelicula)=> pelicula.precio <= precioMax);
    
    //console.table(filtrarPorPrecio);
}

//console.table(2000);








//ordenar lafabeticamente a-z con lowercase

peliculas.sort((a,b) => {
    const peliculaA = a.pelicula.toLocaleLowerCase();
    const peliculaB = b.pelicula.toLocaleLowerCase();

    if(peliculaA < peliculaB){
        return -1;
    }

    if (peliculaA > peliculaB){
        return 1;
    }
    return 0;

});
//console.table(peliculas);

//filtrar por genero de accion (filter)

const listaPeliculas = peliculas.filter((peli)=> peli.genero.includes('accion'));
//console.table(listaPeliculas);



//funcion formulario de registrarse


function Click(){


    function Formulario (nombre,apellido,correo,usuario,clave,telefono){

   
        this.nombre=nombre;
   
        this.apellido=apellido;
   
        this.correo=correo;
   
        this.usuario=usuario;
   
        this.clave=clave;
   
        this.telefono=telefono;

    }
let FormuNombre = document.getElementById("nombre").value;
let FormuApellido = document.getElementById("apellido").value;
let FormuCorreo = document.getElementById("correo").value;
let FormuUsuario = document.getElementById("usuario").value;
let FormuClave = document.getElementById("clave").value;
let FormuTelefono = document.getElementById("telefono").value;

//console.log(FormuClave);

nuevoCliente = new Formulario(FormuNombre,FormuApellido,FormuCorreo,FormuUsuario,FormuClave,FormuTelefono);
//console.log(nuevoCliente);

}

//filtrar por precio mayor a 2600
let movie = peliculas.filter(function precioMayor(numero){
    if(numero.precio >= 2600) {
       return true;
    }else {
       return false
    }
   
   });
//console.table(movie); 

//orden arrays de ibjetos por id 

peliculas.sort((a,b)=> {
    return a.id - b.id
})

//console.table(peliculas)

/*const precioFinal = peliculas.filter(pelis => pelis.precio > 3000 );
//console.table(precioFinal);*/

/*const uppercase = peliculas.map(function(movies){
    return movies.pelicula.toLocaleLowerCase()
});
console.log(uppercase);*/

/*const Duraciones = peliculas.map(function(movies){
    return {
        nombre: movies.pelicula,
        duracion: movies.duracion > 160 ? 'high' : 'mid',


    }
})
console.table(Duraciones);*/


/*const PrecioTotal = peliculas.reduce((total, current)=> total + current.precio, 0);
console.table(PrecioTotal);*/


class movieMovie {
    constructor(id,pelicula,año,actores,director,genero,duracion,precio){
        this.id=id;
        this.pelicula=pelicula;
        this.año=año;
        this.actores=actores;
        this.director=director;
        this.genero=genero;
        this.duracion=duracion;
        this.precio=precio;
    


}
} 
const pelisPedia = [];

const pelicula01 = new movieMovie ( '30','el ultimo gran heroe' ,'1993' ,'ArnoldSchwarzenegger',
'John McTiernan','accion,aventura','130',1500 );

//peliculas.push(pelicula01)

//console.log(pelisPedia);
//console.table(peliculas);







