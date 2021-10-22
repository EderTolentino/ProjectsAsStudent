function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('ERRO')
    } else {
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        res.innerHTML = ''
        
        if (passo <= 0) {
            res.innerHTML = 'O passo será assumido como 1'
            passo = 1
        }
        
        if (inicio <= fim) {
            for (let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} - `
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} - `
            }
        }        
        res.innerHTML += 'FIM!'        
    } 
}

