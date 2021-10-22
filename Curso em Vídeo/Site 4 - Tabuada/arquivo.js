function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        
        // Para não acumular os valores:
        tab.innerHTML = ''
        
        // Para criar a tabuada e adicionar no select
        while (c <= 100) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value= `tab${c}`
            tab.appendChild(item)
            c ++
        }
        
        tab.style.width = '200px'
        tab.style.fontSize = '16pt'
        tab.style.background = 'lightgray'
    }
    
}