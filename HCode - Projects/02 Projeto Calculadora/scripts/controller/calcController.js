class CalcController {
    
    // ATRIBUTOS COM O THIS POR FAZER REFERÊNCIA AO OBJETO INSTANCIADO
    constructor () {
                
        this._audio = new Audio('click.mp3');
        this._audioOnOff = false;
        
        // PARA TORNAR FUNCIONAL O BOTÃO IGUAL:
        this._lastOperator = '';
        this._lastNumber = '';
        
        // ARRAY PARA GUARDAR OS CLICKS DA CALCULADORA:
        this._operation = [];
        
        // ATRIBUTO CRIADO PARA LOCALE, POIS USA-SE MUITO FREQUENTEMENTE
        this._locale = 'pt-BR';
        
        // ATRIBUIR OS ID'S DO DISPLAY DA CALCULADORA ÀS VARIÁVEIS
        this._displayCalcEl   = document.querySelector("#display");
        this._dateEl          = document.querySelector("#data");
        this._timeEl          = document.querySelector("#hora");
        
                
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this.initKeyboard();
    }
    
    // MÉTODO-18: COLAR
    pasteFromClipboard() {
        
        document.addEventListener('paste', e => {
            
            let text = e.clipboardData.getData('Text'); 
            
            this.displayCalc = parseFloat(text);
            
            console.log(text);
        });
        
    }
    
    
    // MÉTODO-17: CTRL+C E CTRL+V:
    copyToClipboard() {
        
        let input = document.createElement('input');
        
        input.value = this.displayCalc;
        
        document.body.appendChild(input);
        
        input.select();
        
        document.execCommand('Copy');
        
        input.remove();
        
    }
    
    // MÉTODO DENTRO DA CLASSE
    initialize() {
        
        // USA O MÉTODO-1 ASSIM QUE CARREGA A PÁGINA
        this.setDisplayDateTime();
        
        // USA O MÉTODO-1 PARA ATUALIZAR A DATA E HORA PERIODICAMENTE:
       setInterval(()=>{
           
           this.setDisplayDateTime();
           
       }, 1000);
        
        // CHAMA O MÉTODO-12 E ATUALIZA O DISPLAY LOGO NO INÍCIO:
        this.setLastNumberToDisplay();
        
        this.pasteFromClipboard();
        
        document.querySelectorAll('.btn-ac').forEach(btn => {
           
            btn.addEventListener('dblclick', e => {
               
                this.toggleAudio();
                
            });
        });
    }
    
    // MÉTODO-19 LIGAR E DESLIGAR O ÁUDIO:
    toggleAudio() {
        
        this._audioOnOff = !this._audioOnOff;
        
        // EQUIVALE À CONDIÇÃO ACIMA:
        // this._audioOnOff = (this._audioOnOff) ? false : true;
    }
    
    // MÉTODO-20 TOCAR O SOM:
    playAudio() {
        
        if(this._audioOnOff) {
            
            this._audio.currentTime = 0;
            this._audio.play();
        }
    }
    
    // MÉTODO-16 EVENTOS DE TECLADO:
    initKeyboard() {
        
        document.addEventListener('keyup', e => {
            
            this.playAudio();
            
            console.log(e.key);
            
            switch (e.key) {
                case 'Escape':
                    this.clearAll();
                    break;
                case 'Backspace':
                    this.clearEntry();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                    this.addOperation(e.key);
                    break;
                case '.':
                case ',':
                    this.addDot('.');
                    break;
                case 'Enter':
                    case '=':
                    this.calc();
                    break;

                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    this.addOperation(e.key);
                    break;

                // PARA O CTRL+C:
                case 'c':
                    if (e.ctrlKey) this.copyToClipboard();
                    break;
            }
        });
    }

    
    // MÉTODO-2 APLICANDO VÁRIOS EVENTOS USANDO SPLIT() 
    addEventListenerAll(element, events, fn) {
        
        events.split(' ').forEach(event => {
           
            element.addEventListener(event, fn, false);
            
        });
    }
    
    // MÉTODO-3 PARA LIMPAR TUDO:
    clearAll () {
        this._operation = [];
        this._lastNumber = '';
        this._lastOperator = '';
        
        this.setLastNumberToDisplay();
    }
    
    // MÉTODO-4 PARA LIMPAR ÚLTIMA ENTRADA:
    clearEntry() {
        this._operation.pop();
        
        this.setLastNumberToDisplay();
    }
    
    // MÉTODO-7 PARA PEGAR O ÚLTIMO ELEMENTO E PREPARAR PRÓXIMA AÇÃO:
    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }
    
    // MÉTODO-9 SUBSTITUI O ÚLTIMO VALOR PARA NÃO ACUMULAR NÚMEROS:
    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }
    
    
    // MÉTODO-8 VERIFICA SE O ÚLTIMO BOTÃO FOI UM OPERADOR:
        
    isOperator (value) {
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);        
    }
    
    // MÉTODO-10 INSERE O VALOR NO ARRAY
    pushOperation(value) {
        this._operation.push(value);
        
        if(this._operation.length > 3) {
            
            this.calc();            
        }
    }
    
    // MÉTODO-13 CALCULA O RESULTADO DA OPERAÇÃO:
    getResult() {
        
        try {
            
            return eval(this._operation.join(""));
        
        } catch (e) {
            
            setTimeout( () => {
                this.setError();
            }, 1);            
        }
    }
    
    
    // MÉTODO-11 CALCULA QUANDO TIVER TRÊS ELEMENTOS NO ARRAY:
    calc() {
        
        let last = '';
        
        // AULA 19 - PARA GUARDAR O RESULTADO PARA O BOTÃO IGUAL
        this._lastOperator = this.getLastItem();
        
        // CONFERIR SE TEM MENOS DE 3 ITENS:
        if (this._operation.length < 3) {
            let firstItem = this._operation[0];
            this._operation = [firstItem, this._lastOperator, this._lastNumber];
        }
        
        if(this._operation.length > 3) {
            
            last = this._operation.pop();
            
            // AULA 19 - PARA GUARDAR O RESULTADO PARA O BOTÃO IGUAL
            this._lastNumber = this.getResult();
            
        } else if (this._operation.length == 3) {
            
            // AULA 19 - PARA GUARDAR O RESULTADO PARA O BOTÃO IGUAL
            this._lastNumber = this.getLastItem(false);
        }
        
        
        let result = this.getResult();
        
        if (last == '%') {
            
            result /= 100;
            
            this._operation = [result];
            
        } else {
                    
            this._operation = [result];
            
            if (last) this._operation.push(last);
            
        }
                
        this.setLastNumberToDisplay();        
    }
    
    // MÉTODO-14 PARA ARMAZENAR O ÚLTIMO NÚMERO E O ÚLTIMO OPERADOR:
    getLastItem(isOperator = true) {
        
        let lastItem;
        
        for (let i = this._operation.length - 1; i >= 0; i--) {
                            
            if( this.isOperator(this._operation[i]) == isOperator ) {
                lastItem = this._operation[i]
                break;
            }                
        }
        
        // SE O ÚLTIMO ITEM ESTIVER INDEFINIDO:
        if (!lastItem) {
            
            lastItem = (isOperator) ? this._lastOperator : this._lastNumber;
            
        }
        
        return lastItem;
        
    }
    
    // MÉTODO-12 ATUALIZA O DISPLAY DA CALCULADORA
    setLastNumberToDisplay() {
        
        let lastNumber = this.getLastItem(false);
        
        /*
        ESSA PARTE DO CÓDIGO FOI SUBSTITUÍDA PELO MÉTODO-14!!!
        for (let i = this._operation.length - 1; i >= 0; i--) {
            
            if( !this.isOperator(this._operation[i]) ) {
                lastNumber = this._operation[i]
                break;
            }
        }
        */
        
        if (!lastNumber) lastNumber = 0
        
        this.displayCalc = lastNumber;
        
    }
    
    // MÉTODO-5 ADICIONAR OPERADOR NO ARRAY QUE RECEBE VALORES DIGITADOS:
    addOperation (value) {
                
        if (isNaN(this.getLastOperation())) {
            // STRING
            
            if (this.isOperator(value)) {
                // TROCA O OPERADOR:
                this.setLastOperation(value);
                
            } else {
                // ADICIONA O NÚMERO:
                this.pushOperation(value);
                
                this.setLastNumberToDisplay();
            }
            
        } else {
            // NUMBER
            
            if (this.isOperator(value)) {
                
                // ADICIONA O OPERADOR:
                this.pushOperation(value);
                
            } else {
                
                // SE NÃO FOR OPERADOR, CONTINUA ADICIONANDO PRÓXIMO NUM.
                let newValue = this.getLastOperation().toString() + value.toString();
            
                this.setLastOperation(newValue);
                
                // APLICANDO O MÉTODO-12
                this.setLastNumberToDisplay();
                
            }
            
        }
        
    }
    
    // MÉTODO-6 PARA DAR MENSAGEM DE ERRO:
    setError() {
        this.displayCalc = "Error";
    }
    
    
    // MÉTODO-15 PARA VALIDAR O PONTO
    addDot() {
        
        let lastOperation = this.getLastOperation();
        
        if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;
        
        // SE O PRIMEIRO VALOR FOR OPERADOR OU INDEFINIDO
        if(this.isOperator(lastOperation) || !lastOperation) {
            
            this.pushOperation('0.');            
            
        } else {
            
            this.setLastOperation(lastOperation.toString() + '.');
            
        }
        
        this.setLastNumberToDisplay();        
    }
    
    execBtn(value) {
        
        // CHAMA O MÉTODO-20 PARA TOCAR O SOM PARA CADA BOTÃO:
        this.playAudio();
        
        // ENCAMINHA CADA BOTÃO PARA SEU RESPECTIVO MÉTODO:
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'ponto':
                this.addDot('.');
                break;
            case 'igual':
                this.calc();
                break;
            
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
                break;
            
        }
    }
    
    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
                        
        buttons.forEach((btn, index) => {
            
            // USA O MÉTODO-2 PARA CLICAR NO BOTÃO:
            this.addEventListenerAll(btn, 'click drag', e => {
                
                let textBtn = btn.className.baseVal.replace('btn-','');
                this.execBtn(textBtn);

            });
            
            // USA O MÉTODO-2 PARA MUDAR O CURSOR PARA A MÃOZINHA:
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                
                btn.style.cursor = "pointer";
                
            });
        });
    }
    
    
    // MÉTODO-1 CRIADO PARA RECEBER DATA E HORA
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        
           this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
        
    // NO GET É ONDE SE RECUPERA O VALOR DO ATRIBUTO:
    // NO SET É ONDE SE ALTERA O VALOR DO ATRIBUTO:
    
    get displayTime() {
        return this._timeEl.innerHTML
    }
    
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    
    get displayDate() {
        return this._dateEl.innerHTML
    }
    
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }
    
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
        
    set displayCalc(value) {
        
        if (value.toString().length > 10) {
            this.setError();
            return false;
        }
        
        this._displayCalcEl.innerHTML = value;
    }
    
    get currentDate() {
        return new Date();
    }
    
    set currentDate(value) {
        this._currentDate = value;
    }
    
}