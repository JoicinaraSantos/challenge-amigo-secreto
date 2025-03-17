let listaDeNomes = [];

function exibirTextoNaTela(id, texto) {
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = texto;
    }
}

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome && !listaDeNomes.includes(nome)) {
        listaDeNomes.push(nome);
        atualizarListaAmigos();
        input.value = '';
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeNomes.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeNomes[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    let nomeSorteado = listaDeNomes[indiceSorteado];
    
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `O nome sorteado foi: ${nomeSorteado}`;
    listaResultado.appendChild(li);
}
