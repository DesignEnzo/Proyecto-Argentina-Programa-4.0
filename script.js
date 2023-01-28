//Menu Responsive
const botonMostrar = document.getElementById("boton-icono");
const menuDesplegable = document.querySelector(".lista-enlaces-responsive");
const botonOcultar = document.getElementById("boton-icono-2");

botonMostrar.addEventListener("click", () =>{
    botonMostrar.style.display = "none";
    menuDesplegable.style.display = "flex";
    botonOcultar.style.display = "flex";
})

botonOcultar.addEventListener("click", ()=>{
    botonOcultar.style.display = "none";
    menuDesplegable.style.display = "none";
    botonMostrar.style.display = "flex";
})

//DarkMode
const botonActivarDarkMode = document.querySelector(".dark__mode");
const botonDesactivarDarkMode = document.querySelector(".dark__mode_2");
const body = document.querySelector("BODY");
//Elementos
const sobreMiTitulo = document.getElementById("sobre-mi-titulo");
const headerBar = document.querySelector(".header-bar");
const textoPresentacion = document.getElementById("texto-presentacion");
const proyectoH1 = document.querySelector(".proyectos-h1");
const headerBar2 = document.querySelector(".header-bar-2");
const proyectoH3 = document.querySelector(".proyectos-h3");
const contacto = document.getElementById("texto-contacto");
const headerBar3 = document.querySelector(".header-bar-3");
const mediosContacto = document.getElementById("span-1")
const mediosContacto1 = document.getElementById("span-2")
const mediosContacto2 = document.getElementById("span-3")
const mediosContacto3 = document.getElementById("span-4")


botonActivarDarkMode.addEventListener("click", ()=>{
    botonActivarDarkMode.style.display = "none";
    botonDesactivarDarkMode.style.display = "flex";
    body.style.backgroundColor = "#000";
    sobreMiTitulo.style.color = "white";
    headerBar.style.backgroundColor = "white";
    textoPresentacion.style.color = "white";
    proyectoH1.style.color = "white";
    headerBar2.style.backgroundColor = "white";
    proyectoH3.style.color = "white";
    contacto.style.color = "white";
    headerBar3.style.backgroundColor = "white";
    mediosContacto.style.color = "white";
    mediosContacto1.style.color = "white";
    mediosContacto2.style.color = "white";
    mediosContacto3.style.color = "white";
})

botonDesactivarDarkMode.addEventListener("click", ()=>{
    botonActivarDarkMode.style.display = "flex";
    botonDesactivarDarkMode.style.display = "none";
    body.style.backgroundColor = "white";
    sobreMiTitulo.style.color = "#444649";
    headerBar.style.backgroundColor = "#444649";
    textoPresentacion.style.color = "#444649";
    proyectoH1.style.color = "#444649";
    headerBar2.style.backgroundColor = "#444649";
    proyectoH3.style.color = "#444649";
    contacto.style.color = "#444649";
    headerBar3.style.backgroundColor = "#444649";
    mediosContacto.style.color = "#444649";
    mediosContacto1.style.color = "#444649";
    mediosContacto2.style.color = "#444649";
    mediosContacto3.style.color = "#444649";
})