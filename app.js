//Creación de array

let Amigos= [];

function asignarTextoElemento(elemento, texto){
	let elementoHTML=document.getElementById(elemento);
	elementoHTML.innerHTML=texto;
	return;
}

function agregarAmigo() {
    let amigo= document.getElementById("amigo").value
     asignarTextoElemento('resultado',"")
    if (amigo == "") {
        alert("Debe ingresar un valor");    
    } else {
        Amigos.push(amigo);
        asignarTextoElemento('listaAmigos',Amigos);
        limpiarCaja();
    }
    return;
}


function sortearAmigo() {
    let numeroGenerado= Math.floor(Math.random()*(Amigos.length));
    amigoSorteado=Amigos[numeroGenerado];
    asignarTextoElemento('resultado',`El amigo secreto sorteado es ${amigoSorteado}`);
    reiniciarJuego();
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value="";
}

function condicionesIniciales() {
    Amigos=[];
    asignarTextoElemento('listaAmigos',"")
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}