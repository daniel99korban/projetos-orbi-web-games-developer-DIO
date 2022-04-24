var vezJogador = vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var jogadorVencedor = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
// simbolos da serie round six
var triagulo = '&#9651;';
var circulo = '&#9673;';

mudarJogador(triagulo);

function escolherQuadrado(id){
    // ver se ja temos um ganhador
    if(vencedor != null) return;

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML != '-') return;
    quadrado.innerHTML = vezJogador;
    // Estilização segundo a vez do Jogador
    quadrado.style.color = (vezJogador == triagulo)? 'rgb(24, 145, 88)' :  '#d40554';
    // Alternar vez dos jogadores
    vezJogador = (vezJogador == triagulo)? circulo : triagulo;
    mudarJogador(vezJogador);
    checarVencedor();
}

function reiniciar(){ 
    var corPadrao = 'rgb(241, 187, 70)';
    vencedor = null;
    jogadorVencedor.innerHTML = ''

    for(let i = 0; i < quadrados.length; i++){
        quadrados[i].innerHTML = '-';
        quadrados[i].style.color = corPadrao;
        quadrados[i].style = `background-color: ${corPadrao}`;
    }
    mudarJogador(triagulo);
}

function mudarJogador(valor){
    vezJogador = valor;
    jogadorSelecionado.innerHTML = vezJogador;
}



function checarVencedor(){
    let quad = quadrados;
    // verificar Colunas
    let j = 0;
    while(j < 3){
        if(checarSequencia(quad[j], quad[j + 3], quad[j + 6])){
            mudarCorQuadrado(quad[j], quad[j + 3], quad[j + 6]);
            mudarVencedor(quad[j]);
            return true;
        }
        j++;
    }
    // i+=3 seria um gap especial. i < 7(para controle do gap i para que não exceda o tamanho máximo de elementos da matriz)
    for(let i=0; i < 7; i+=3){
        // verificar linhas
        if(checarSequencia(quad[i], quad[i + 1], quad[i + 2])){
            mudarCorQuadrado(quad[i], quad[i + 1], quad[i + 2]);
            mudarVencedor(quad[i]);
            return true;
        }
        if(i < 3){// condição para evitar verificações desnecessárias.
            // verificar diagonal principal
            if(checarSequencia(quad[i], quad[i + 4], quad[i + 8])){
                mudarCorQuadrado(quad[i], quad[i + 4], quad[i + 8]);
                mudarVencedor(quad[i]);
                return true;
            }
            // verificar diagonal secundaria
            if(checarSequencia(quad[i + 2], quad[i + 4], quad[i + 6])){
                mudarCorQuadrado(quad[i + 2], quad[i + 4], quad[i + 6]);
                mudarVencedor(quad[i + 2]);
                return true;
            }
        }
    }

}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    jogadorVencedor.innerHTML = vencedor;
    
}

function mudarCorQuadrado(q1, q2, q3){
    const bgColor = 'background-color: rgb(30, 172, 30)';
    q2.style = q1.style = q3.style = bgColor;
}

function checarSequencia(q1, q2, q3){
    var ehIgual = false;
    if(q1.innerHTML != '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) ehIgual = true;

    return ehIgual;
}
