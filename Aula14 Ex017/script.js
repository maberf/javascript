    let num = document.getElementById('txtnum')
    let tab = document.querySelector('select#stab')
    res = document.getElementById('res') //res para verificação

function tabuada () {
    if ( num.value.length == 0 ) {
        // Validação
        window.alert ('[Erro] Verifique os dados e tente novamente!')
    } else {
        let n = Number(num.value)
        c = 0
        while (c <= 9) {
            let item = document.createElement('option') // Não está funcionando.
            item.txt = `Item ${c}`
            tab.appendChild(item)
            res.innerHTML += ` ${n}x${c}=${n*c} ` // res para verificação
            c++
        }
    }
}

// Exercício com bug! Não conseguido fazer funcionar o seletor!