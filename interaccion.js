//SELECCIONAMOS CON JV LOS ELEMENTOS DE HTML
const elInicio = document.getElementById("inicio")
const elServicio = document.getElementById("servicios")
const elNosotros = document.getElementById("nosotros")
const bontonServicio = document.getElementById("botonservicio")
const botonNosotros = document.getElementById ("botonnosotros")
const botonInicio =document.getElementById ("botoninicio")
let bodyNosotros = document.getElementById ("body")
let bodyServicios = document.getElementById ("body")
let bodyInicio = document.getElementById ("body")
const elMenu = document.getElementById("menu")
const botonOcultar = document.getElementById("ocultar")

const inicioMovil = document.getElementById("movilInicio")
const servicioMovil = document.getElementById ("movilServicio")
const nosotrosMovil = document.getElementById ("movilNosotros")



function iniciarpagina(){
    document.getElementById("servicios").style.display = "none"
    document.getElementById("nosotros").style.display = "none"
    bontonServicio.addEventListener("click", bontonServi)
    botonNosotros.addEventListener("click", botonNoso)
    botonInicio.addEventListener("click", botonIni)
    elMenu.addEventListener("click",botonMenu)

    inicioMovil.addEventListener("click", pruebaInicio)
    servicioMovil.addEventListener("click", pruebaServicio)
    nosotrosMovil.addEventListener("click", pruebaNosotros)
    
    
}
//funciones del boton servicio
function bontonServi(){
    elServicio.style.display = "flex"
    elInicio.style.display = "none"
    elNosotros.style.display = "none"
    bodyServicios.style.backgroundImage = "url('imagenes/fondo2.avif')";
    
}

//funciones del boton nosotros
function botonNoso(){
 bodyNosotros.style.backgroundImage = "url('imagenes/fip.webp')"
    elNosotros.style.display = "flex"
    elInicio.style.display = "none"
    elServicio.style.display = "none"

    
    
}
//funciones del bono inicio
function botonIni(){
    elInicio.style.display = "flex"
    elNosotros.style.display = "none"
    elServicio.style.display = "none"
    bodyInicio.style.backgroundImage = "url('imagenes/ejercicio1.jpg')";

    if (botonIni = elInicio.style.display = "none") 
    {elInicio.style.display = "flex"}

    else{
        elInicio.style.display = "flex"

    }
}

function botonMenu(){
  


   if (botonOcultar.style.display === "none"){
    botonOcultar.style.display = "flex"
    
    
   }
   else {
    botonOcultar.style.display = "flex"
   }
     
}

function pruebaInicio(){
    elServicio.style.display = "none"
    elNosotros.style.display = "none"

    if (elInicio.style.display === "none") {
        elInicio.style.display = "block"
        
    }
    else {
        elInicio.style.display = "none"
    }
}


function pruebaServicio(){
    elInicio.style.display = "none"
    elNosotros.style.display = "none"

    if (elServicio.style.display === "none")
    {elServicio.style.display = "flex"

    }
    else {
        elServicio.style.display = "none"
    }
    

}

function pruebaNosotros(){
    elInicio.style.display = "none"
    elServicio.style.display = "none"

    if (elNosotros.style.display === "none") {
        elNosotros.style.display = "block"
    }
    else {
        elNosotros.style.display = "none"
    }


}
 














window.addEventListener("load",iniciarpagina)