var vezJogador = vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var jogadorVencedor = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    // ver se ja temos um ganhador
    if(vencedor != null) return;

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML != '-') return;
    quadrado.innerHTML = vezJogador;
    // Estilização segundo a vez do Jogador
    quadrado.style.color = (vezJogador == 'X')? 'green' : 'red';
    // Alternar vez dos jogadores
    vezJogador = (vezJogador == 'X')? 'O' : 'X';
    mudarJogador(vezJogador);
    checarVencedor();
}

function reiniciar(){ 
    vencedor = null;
    jogadorVencedor.innerHTML = ''

    for(let i = 0; i < quadrados.length; i++){
        quadrados[i].innerHTML = '-';
        quadrados[i].style.color = 'rgb(241, 187, 70)';
        quadrados[i].style = 'background-color: rgb(241, 187, 70)';
    }
    mudarJogador('X');
}

function mudarJogador(valor){
    vezJogador = valor;
    jogadorSelecionado.innerHTML = vezJogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    // verificar linhas
    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return true;
    }
    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return true;
    }
    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    // verificar colunas
    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    // verificar diagonais
    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    jogadorVencedor.innerHTML = vencedor;
    
}

function mudarCorQuadrado(q1, q2, q3){
    q1.style = 'background-color: rgb(30, 172, 30)';
    q2.style = 'background-color: rgb(30, 172, 30)';
    q3.style = 'background-color: rgb(30, 172, 30)';
}

function checarSequencia(q1, q2, q3){
    var ehIgual = false;
    if(q1.innerHTML != '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) ehIgual = true;

    return ehIgual;
}
