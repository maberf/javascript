var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não eleitor')
} else if (idade >= 16 && idade < 18 || idade >65) {
            console.log('Eleitor opcional')
    } else {
            console.log('Eleitor obrigatório')
        } 