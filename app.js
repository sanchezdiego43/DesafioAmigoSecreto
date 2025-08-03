//Creación de array

let Amigos= [];

function asignarTextoElemento(elemento, texto){
	let elementoHTML=document.getElementById(elemento);
	elementoHTML.innerHTML=texto;
	return;
}

function agregarAmigo() {
    let amigo= document.getElementById("amigo").value
    if (amigo == "") {
        alert("Debe ingresar un valor");    
    } else {
        Amigos.push(amigo)
        asignarTextoElemento('listaAmigos',Amigos)
        limpiarCaja('amigo');
    }
    return;
}


function sortearAmigo() {
    let numeroGenerado= Math.floor(Math.random()*(Amigos.length));
    amigoSorteado=Amigos[numeroGenerado];
    asignarTextoElemento('resultado',amigoSorteado);
    return;
}

function limpiarCaja(id) {
    document.getElementById(id).value="";
}

