//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let generales = document.getElementById("generales");
crearBarra(generales);
let solidos = document.getElementById("solidos");
crearBarra(solidos);
let generacion = document.getElementById("generacion");
crearBarra(generacion);
let quimicos = document.getElementById("quimicos");
crearBarra(quimicos);
let meca = document.getElementById("meca");
crearBarra(meca);
let web = document.getElementById("web");
crearBarra(web);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalgenerales = setInterval(function(){
            pintarBarra(generales, 17, 0, intervalgenerales);
        },100);
        const intervalsolidos = setInterval(function(){
            pintarBarra(solidos, 16, 1, intervalsolidos);
        },100);
        const intervalgeneracion = setInterval(function(){
            pintarBarra(generacion, 13, 2, intervalgeneracion);
        },100);
        const intervalquimicos = setInterval(function(){
            pintarBarra(quimicos, 16, 3, intervalquimicos);
        },100);
        const intervalmeca = setInterval(function(){
            pintarBarra(meca, 16, 4, intervalmeca);
        },100);
        const intervalweb = setInterval(function(){
            pintarBarra(web, 1, 5, intervalweb);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#e75b1a";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}