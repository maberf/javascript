function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 20 //data.getHours() - Assim as horas podem ser forçadas!
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.background = '#D0DF07'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = 'fototarde.png'
        document.body.style.background = '#F99167'
    } else {
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#4431B5'
    }
      
}