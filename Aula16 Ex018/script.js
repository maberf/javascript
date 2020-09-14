let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista') // Select com janela
let res = document.querySelector('div#res')
let val = []

function adicionar () { // Teste do valor inserido
    if (isNumero(num.value) && !inLista(num.value, val)) { // içamento de funções de teste
        //window.alert('Valor OK')
        val.push(Number(num.value))
        let item = document.createElement('option') // Cria o option da janela
        item.text = `Valor ${num.value} adicionado` // Adiciona valor no item
        lista.appendChild(item)  // Adiciona item na janela
        res.innerHTML = '' // reseta o valor do resultado se for inserido mais um número
    } else {
        window.alert ('Valor inválido ou já inserido')
    }
    num.value = ''
    num.focus() // Deixa cursor no seletor
}

function isNumero(n) {
    if (Number(n) >=0 && Number(n) <= 100) { // Teste número dentro do range
        return true
    } else {
        return false
    }
}

function inLista(n, list) {
    if (list.indexOf(Number(n)) != -1) { // Teste se número não inserido na lista
        return true
    } else {
        return false
    }
}

function calcular () {
    if (val.length == 00) {
        window.alert('Adicione valores antes de calcular!')
    } else {
        let maior = val[0] // Inicia com o valor do vetor na posição 0
        let menor = val[0] // Inicia com o valor do vetor na posição 0
        soma = 0  // zera variável
        media = 0 // zera variável
        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)  // Nesta sintaxe de só if não se exige {}
                maior = val[pos]
            if (val[pos] < menor)
                menor = val[pos]
        }
        media = soma/(val.length)
        res.innerHTML = '' // reseta o valor do resultado
        res.innerHTML += `<p>Total de números: ${val.length}</p>`
        res.innerHTML += `<p>Maior número: ${maior}</p>`
        res.innerHTML += `<p>Menor número: ${menor}</p>`
        res.innerHTML += `<p>Soma dos números: ${soma}</p>`
        res.innerHTML += `<p>Média dos Números: ${media}</p>`
    }
}