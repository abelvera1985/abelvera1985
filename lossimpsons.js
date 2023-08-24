
/*TRAIGO DESDE LA API DE LOS SIMPSONS */
//ASYNC REALIZANDO LA RESPUESTA Y TOMANDO EL ARRAY QUE NOS DEJA LA API A TRAVEZ DE FOREACH//










const divContenedor = document.getElementById("caracteres");

const simp = async () => {
    const response = await fetch("https://apisimpsons.fly.dev/api/personajes");
    const data = await response.json();
    console.log(data.docs);

    
data.docs.forEach((obj) => {
    console.log(obj);
    const content = document.createElement("div");
    content.className = ('contentSimp');
    content.innerHTML = `
        <h4 class="nombreSimp">${obj.Nombre}</h4>
        <img class= "imgSimp"src="${obj.Imagen}"</img>
        <h4>${obj.Historia}</h4>
        <p class="ocupacionSimp">${obj.Ocupacion}</p>
        
        `;
divContenedor.append(content);


})
};

simp();









