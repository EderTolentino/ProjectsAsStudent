// ELEMENTOS:
var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;

// VARIÁVEIS DE CONTROLE DE ANIMAÇÃO:
var game, frames;

// POSIÇÕES DOS ELEMENTOS:
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

// DIREÇÃO DE ACORDO COM A TECLA:
var dirJy;

// POSIÇÕES INICIAIS:
var posJogIniY = 180, posJogIniX = 10;
var posCpuIniY = 180, posCpuIniX = 930;
var posBolaIniX = 475, posBolaIniY = 240;

// TAMANHOS:
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

// DIREÇÃO:
var bolaX, bolaY;
var cpuY = 0;

// VELOCIDADE DA BOLA
var velBola, velCpu, velJogador;

// CONTROLE:
var pontos = 0;
var tecla;
var jogo = false;

function controlajog() {
    if (jogo) {
        posJogadorY += velJogador*dirJy;
        if (((posJogadorY + barraH) >= campoH) || (posJogadorY <= 0)) {
            posJogadorY += (velJogador*dirJy)*(-1);
        }
        vjogador.style.top = posJogadorY + "px";
    }
}

function controlacpu() {
    if (jogo) {
        if ((posBolaX > (campoW/2) && (bolaX > 0))) {
            // MOVIMENTAR CPU:
            if (((posBolaY + (bolaH/2)) > ((posCpuY + (barraH/2))) + velCpu)) {
                // MOVER PARA BAIXO:
                if ((posCpuY + barraH) <= campoH) {
                    posCpuY += velCpu;
                }
            } else if ((posBolaY + (bolaH/2)) < (posCpuY + (barraH/2)) - velCpu){
                // MOVER PARA CIMA:
                if (posCpuY >= 0) {
                    posCpuY -= velCpu;
                }
            }

        } else {
            // POSICIONAR CPU NO CENTRO:
            if ((posCpuY + (barraH/2)) < (campoH/2)) {
                posCpuY += velCpu;
            } else if ((posCpuY + (barraH/2)) > (campoH/2)) {
                posCpuY -= velCpu;
            }
        }
        vcpu.style.top = posCpuY + "px";
    }
}

function controlaBola() {
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    // COLISÃO COM JOGADOR:
    if ( 
        (posBolaX <= posJogadorX + barraW) && 
        ((posBolaY + bolaH >= posJogadorY) &&
        (posBolaY <= posJogadorY + barraH)) 
    ) {
        bolaX *= -1;

        bolaY = (((posBolaY + (bolaH/2)) - (posJogadorY + (barraH/2))) / 16);
    }

    // COLISÃO COM CPU:
    if ( 
        (posBolaX >= posCpuX) && 
        ((posBolaY + bolaH >= posCpuY) &&
        (posBolaY <= posCpuY + barraH)) 
    ) {
        bolaX *= -1;

        bolaY = (((posBolaY + (bolaH/2)) - (posCpuY + (barraH/2))) / 16);
    }

    // LIMITES SUPERIOR E INFERIOR:
    if ((posBolaY + bolaY >= 500) || (posBolaY <= 0)) {
        bolaY *= -1;
    }

    // SAIU DA TELA PELA DIREITA OU ESQUERDA:
    if ((posBolaX + bolaW) >= campoW) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++;
        vPaineltxtPontos.value = pontos;
        jogo = false;
        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posJogadorY + "px";
    } else if (posBolaX <= 0) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vPaineltxtPontos.value = pontos;
        jogo = false;
        vjogador.style.top = posJogadorY + "px";
        vcpu.style.top = posJogadorY + "px";
    }

    vbola.style.top = posBolaY + "px";
    vbola.style.left = posBolaX + "px";

}

function teclaDw() {
    tecla = event.keyCode;
    if (tecla == 38) { // PARA CIMA
        dirJy = -1;
    } else if (tecla == 40) { // PARA BAIXO
        dirJy = 1;
    }
}

function teclaUp() {
    tecla = event.keyCode;
    if (tecla == 38) { // PARA CIMA
        dirJy = 0;
    } else if (tecla == 40) { // PARA BAIXO
        dirJy = 0;
    }
}

function game() {

    if (jogo) {
        controlajog();
        controlaBola();
        controlacpu();
    }
    frames = requestAnimationFrame(game);
}

// INICIA O JOGO:
function iniciaJogo() {

    if ( !jogo) {
        velBola = velCpu = velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        if((Math.random()*10)<5) {
            bolaX = -1;
        } else {
            bolaX = 1;
        }
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorX = posJogIniX;
        posJogadorY = posJogIniY;
        posCpuX = posCpuIniX;
        posCpuY = posCpuIniY;
        game();
    }
}

// INICIALIZA AS VARIÁVEIS:
function inicializa() {
    velBola = velCpu = velJogador = 8;
    vbtIniciar = document.getElementById("btIniciar");
    vbtIniciar.addEventListener("click", iniciaJogo);
    vjogador = document.getElementById("dvJogador");
    vcpu = document.getElementById("dvCpu");
    vbola = document.getElementById("dvBola");
    vPaineltxtPontos = document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);

}

window.addEventListener("load", inicializa);