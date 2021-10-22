// ONDE O JOGO ESTÁ SENDO PROCESSADO
        var jogo= [];
    
        // É O QUE NÓS VEMOS NA PÁGINA
        var tabuleiro = [];
    
        // VARIÁVEL PARA SABER QUEM JOGA: 0=PESSOA E 1=CPU
        var quemJoga = 0;
    
        // ARMAZENA O RESULTADO DA FUNÇÃO QUE VERIFICA SE HOUVE VENCEDOR
        var verifica;
    
        // INDICA SE O JOGO ESTÁ EM ANDAMENTO
        var jogando = true;
    
        // NÍVEL DE DIFICULDADE
        // NÍVEL 1 - ALEATÓRIO, NÍVEL 2 - MÉDIO, NÍVEL 3 - ANALÍTICO
        var nivel = 2;
    
        // INDICA A JOGADA DA CPU - MAIS PARA O NÍVEL 3
        var jogadaCpu = 1;
    
        // INDICA QUEM COMEÇA O JOGO
        var quemComeca = 1;
        
        // NÚMERO DA JOGADA
        var jogada = 0;
        
        function cpuJoga() {
            
            if(jogando) {
                var l,c;
                if (nivel == 1) {
                    do {
                        l = Math.round(Math.random()*2);
                        c = Math.round(Math.random()*2);
                        
                    } while (jogo[l][c] != "");
                    jogo[l][c] = "O";
                } else if (nivel == 2) {
                    // ATAQUE
                    // JOGADAS LINHA 1
                    if ((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else if ((jogo[0][0]=="O")&&(jogo[0][2]=="O")&&(jogo[0][1]=="")){
                        jogo[0][1]="O";
                    } else if ((jogo[0][1]=="O")&&(jogo[0][2]=="O")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // JOGADAS LINHA 2
                    if ((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
                        jogo[1][2]="O";
                    } else if ((jogo[1][0]=="O")&&(jogo[1][2]=="O")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="O")&&(jogo[1][2]=="O")&&(jogo[1][0]=="")){
                        jogo[1][0]="O";
                    } else
                    
                    // JOGADAS LINHA 3
                    if ((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
                        jogo[2][2]="O";
                    } else if ((jogo[2][0]=="O")&&(jogo[2][2]=="O")&&(jogo[2][1]=="")){
                        jogo[2][1]="O";
                    } else if ((jogo[2][1]=="O")&&(jogo[2][2]=="O")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else
                    
                    // JOGADAS COLUNA 1
                    if ((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else if ((jogo[0][0]=="O")&&(jogo[2][0]=="O")&&(jogo[1][0]=="")){
                        jogo[1][0]="O";
                    } else if ((jogo[1][0]=="O")&&(jogo[2][0]=="O")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // JOGADAS COLUNA 2
                    if ((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
                        jogo[2][1]="O";
                    } else if ((jogo[0][1]=="O")&&(jogo[2][1]=="O")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="O")&&(jogo[2][1]=="O")&&(jogo[0][1]=="")){
                        jogo[0][1]="O";
                    } else
                    
                    // JOGADAS COLUNA 3
                    if ((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
                        jogo[2][2]="O";
                    } else if ((jogo[0][2]=="O")&&(jogo[2][2]=="O")&&(jogo[1][2]=="")){
                        jogo[1][2]="O";
                    } else if ((jogo[1][2]=="O")&&(jogo[2][2]=="O")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else
                    
                    // DIAGONAL 1
                    if ((jogo[0][0]=="O")&&(jogo[1][1]=="O")&&(jogo[2][2]=="")){
                        jogo[2][2]="O";
                    } else if ((jogo[0][0]=="O")&&(jogo[2][2]=="O")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="O")&&(jogo[2][2]=="O")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // DIAGONAL 2
                    if ((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else if ((jogo[0][2]=="O")&&(jogo[2][0]=="O")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[2][0]=="O")&&(jogo[1][1]=="O")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else
                    
                    // DEFESA
                    // JOGADAS LINHA 1
                    if ((jogo[0][0]=="X")&&(jogo[0][1]=="X")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else if ((jogo[0][0]=="X")&&(jogo[0][2]=="X")&&(jogo[0][1]=="")){
                        jogo[0][1]="O";
                    } else if ((jogo[0][1]=="X")&&(jogo[0][2]=="X")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // JOGADAS LINHA 2
                    if ((jogo[1][0]=="X")&&(jogo[1][1]=="X")&&(jogo[1][2]=="")){
                        jogo[1][2]="O";
                    } else if ((jogo[1][0]=="X")&&(jogo[1][2]=="X")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="X")&&(jogo[1][2]=="X")&&(jogo[1][0]=="")){
                        jogo[1][0]="O";
                    } else
                    
                    // JOGADAS LINHA 3
                    if ((jogo[2][0]=="X")&&(jogo[2][1]=="X")&&(jogo[2][2]=="")){
                        jogo[3][2]="O";
                    } else if ((jogo[2][0]=="X")&&(jogo[2][2]=="X")&&(jogo[3][1]=="")){
                        jogo[2][1]="O";
                    } else if ((jogo[2][1]=="X")&&(jogo[2][2]=="X")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else
                    
                    // JOGADAS COLUNA 1
                    if ((jogo[0][0]=="X")&&(jogo[1][0]=="X")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else if ((jogo[0][0]=="X")&&(jogo[2][0]=="X")&&(jogo[1][0]=="")){
                        jogo[1][0]="O";
                    } else if ((jogo[1][0]=="X")&&(jogo[2][0]=="X")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // JOGADAS COLUNA 2
                    if ((jogo[0][1]=="X")&&(jogo[1][1]=="X")&&(jogo[2][1]=="")){
                        jogo[2][1]="O";
                    } else if ((jogo[0][1]=="X")&&(jogo[2][1]=="X")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="X")&&(jogo[2][1]=="X")&&(jogo[0][1]=="")){
                        jogo[0][1]="O";
                    } else
                    
                    // JOGADAS COLUNA 3
                    if ((jogo[0][2]=="X")&&(jogo[1][2]=="X")&&(jogo[2][2]=="")){
                        jogo[2][2]="O";
                    } else if ((jogo[0][2]=="X")&&(jogo[2][2]=="X")&&(jogo[1][2]=="")){
                        jogo[1][2]="O";
                    } else if ((jogo[1][2]=="X")&&(jogo[2][2]=="X")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else
                    
                    // DIAGONAL 1
                    if ((jogo[0][0]=="X")&&(jogo[1][1]=="X")&&(jogo[2][2]=="")){
                        jogo[2][2]="O";
                    } else if ((jogo[0][0]=="X")&&(jogo[2][2]=="X")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[1][1]=="X")&&(jogo[2][2]=="X")&&(jogo[0][0]=="")){
                        jogo[0][0]="O";
                    } else
                    
                    // DIAGONAL 2
                    if ((jogo[0][2]=="X")&&(jogo[1][1]=="X")&&(jogo[2][0]=="")){
                        jogo[2][0]="O";
                    } else if ((jogo[0][2]=="X")&&(jogo[2][0]=="X")&&(jogo[1][1]=="")){
                        jogo[1][1]="O";
                    } else if ((jogo[2][0]=="X")&&(jogo[1][1]=="X")&&(jogo[0][2]=="")){
                        jogo[0][2]="O";
                    } else {
                        if(jogada < 8) {
                            do {
                                l = Math.round(Math.random()*2);
                                c = Math.round(Math.random()*2);
                            } while (jogo[l][c] != "");
                            jogo[l][c] = "O";
                        } else {
                            for (var l = 0; l < 3; l++) {
                                for (var c = 0; c < 3; c++) {
                                    if (jogo[l][c] == "") {
                                        jogo[l][c] = "O";
                                    }
                                }
                            }
                        }
                    }
                    
                }
                verifica = verificarVitoria();
                if (verifica != "") {
                    alert (verifica + ' venceu!!!');
                    jogando = false;
                }
                
                atualizaTabuleiro();
                jogada++;
                quemJoga = 0;
            }
        }
        
        function verificarVitoria() {
            
            var l,c;
            
            // LINHAS:
            for (l = 0; l < 3; l++) {
                
                if (jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]){
                    return jogo[l][0];
                }
            }
            
            // COLUNAS - PODERIA TER USADO A MESMA VARIÁVEL L
            for (c = 0; c < 3; c++) {
                
                if (jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c]){
                    return jogo[0][c];
                }
            }
            
            // DIAGONAIS
            if ( jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2] ) {
                return jogo[0][0];
            }
            
            if (jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]) {
                return jogo[0][2];
            }
            return "";
        }
            
    
        function jogar(p) {
    
            if(jogando && (quemJoga == 0)) {
    
                switch (p) {
                    case 1:
                        if (jogo[0][0] == "") {
                            jogo[0][0] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 2:
                        if (jogo[0][1] == "") {
                            jogo[0][1] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 3:
                        if (jogo[0][2] == "") {
                            jogo[0][2] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 4:
                        if (jogo[1][0] == "") {
                            jogo[1][0] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 5:
                        if (jogo[1][1] == "") {
                            jogo[1][1] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 6:
                        if (jogo[1][2] == "") {
                            jogo[1][2] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 7:
                        if (jogo[2][0] == "") {
                            jogo[2][0] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 8:
                        if (jogo[2][1] == "") {
                            jogo[2][1] = "X";
                            quemJoga = 1;
                        }
                    break;
                    case 9:
                        if (jogo[2][2] == "") {
                            jogo[2][2] = "X";
                            quemJoga = 1;
                        }
                    break;
                }
                // DEVE TESTAR SE A JOGADA DA PESSOA FOI VÁLIDA
                if (quemJoga == 1) {
                    atualizaTabuleiro();
                    verifica = verificarVitoria();
                    if (verifica != "") {
                        alert (verifica + ' venceu!!!');
                        jogando = false;
                    }
                    jogada++;
                    cpuJoga();
                }
                
            }
    
        }
    
        function atualizaTabuleiro() {
            for (var l = 0; l < 3; l++) {
                for (var c = 0; c < 3; c++) {
                    if (jogo[l][c] == "X") {
                        tabuleiro[l][c].innerHTML = "X";
                        tabuleiro[l][c].style.cursor = "default";    
                    } else if (jogo[l][c] == "O") {
                        tabuleiro[l][c].innerHTML = "O";
                        tabuleiro[l][c].style.cursor = "default"; 
                    } else {
                        tabuleiro[l][c].innerHTML = "";
                        tabuleiro[l][c].style.cursor = "pointer"; 
                    }
    
                }
            }
        }    
    
        function inicia() {
            jogando = true;
            jogadaCpu = 1;
            jogada = 0;
            jogo = [
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""]
                ];     
    
            tabuleiro = [
                    [document.getElementById('p1'), document.getElementById('p2'), document.getElementById('p3')], [document.getElementById('p4'), document.getElementById('p5'), document.getElementById('p6')], [document.getElementById('p7'), document.getElementById('p8'), document.getElementById('p9')]    
                ];
            atualizaTabuleiro();
            
            if (quemComeca == 1) {
                quemComeca = 0;
                quemJoga = quemComeca;
                document.getElementById('dvQuemComeca').innerHTML = "QUEM COMEÇA: Jogador";
            } else {
                quemComeca = 1;
                quemJoga = quemComeca;
                cpuJoga();
                document.getElementById('dvQuemComeca').innerHTML = "QUEM COMEÇA: CPU";
            }
        }
    
        window.addEventListener("load", inicia);