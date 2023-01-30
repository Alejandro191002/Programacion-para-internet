const contenedor = document.getElementById("contenedor");
let btn1 = document.getElementById("boton");

function links(){
    
    contenedor.innerHTML += "<a>https://hotbook.mx/datos-sobre-kanye-west/</a>"
    contenedor.innerHTML += "<a>https://www.heyfamosos.com/es/curiosidades-sobre-kendrick-lamar</a>"
}

btn1.addEventListener("click",links);