function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || (Number(fano.value) > ano)) {
        alert('ERRO: verifique o ano de nascimento!!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        // CRIAÇÃO DE ELEMENTO IMAGEM E SEUS ATRIBUTOS:
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        img.setAttribute('alt', 'Foto de pessoas')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menino.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/rapaz.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.jpeg')
            } else {
                img.setAttribute('src', 'img/idoso.jpeg')
            }  
            
        } else {
            genero = 'Mulher'
            
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/menina.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/rapariga.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.jpeg')
            } else {
                img.setAttribute('src', 'img/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `A pessoa é ${genero} e tem ${idade} anos!`
        res.appendChild(img)
        img.style.marginTop = '50px';
        
    }
    
}
    
    

