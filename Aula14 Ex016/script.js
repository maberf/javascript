function contar () {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if ( ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        // Validação
        window.alert ('[Erro] Verifique os dados e tente novamente!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

       for(let c = i; c <= f; c += p) {
        res.innerHTML += ` \u{1F449} ${c} ` // Cógido do emoji, só funciona entre entre crases
        // https://unicode.org/emoji/charts/full-emoji-list.html
       }
       res.innerHTML += `\u{1F3C1}`
    }
}