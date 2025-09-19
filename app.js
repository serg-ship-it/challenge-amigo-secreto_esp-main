
function agregarAmigo(){
    let amigoSecreto = document.getElementById('amigo').value;
    
    if(amigoSecreto === "" || amigoSecreto === " "){
            alert("Por favor. Para seguir ingrese un nombre.")
    }else{ 
        listaAmigos.push(amigoSecreto);
        recorrerLista();
        limpiarCaja()
        return;
    }

    console.log(listaAmigos)
    
    document.querySelector('#amigo').value = '';
}

function recorrerLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""; // 
    for(let i = 0; i < listaAmigos.length; i++){
        let elementoLista = document.createElement('li');// crea el elemento li en el html
        elementoLista.textContent = listaAmigos[i]; // recorre la lista y agrega el contenido
        lista.appendChild(elementoLista); // Agrega el li a la lista en el HTML
    }
}
function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);
    let amigoAleatorio = listaAmigos[indiceAleatorio];
    amigoAleatorio = document.getElementById('resultado');
    amigoAleatorio.innerHTML = `El amigo secreto es: ${listaAmigos[indiceAleatorio]}`;
}
function limpiarCaja(){
    //
    document.querySelector('#amigo').value = '';
}

const listaAmigos = [];


agregarAmigo();

