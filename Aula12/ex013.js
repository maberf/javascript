var agora = new Date()
var  diaSem = agora.getDay()
/* O comando getDay()do JS numera os dias da semana:
0 - Domingo
1 - Segunda
2 - Terça
4 - Quarta
5 - Quinta
6 - Sexta
7 - Sábado
Fazer esta rotina com switch é mais prático que if else. */
    console.log(diaSem)
    switch(diaSem){
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        default:
            console.log('Outros Dias') // Para não estender demais
    }