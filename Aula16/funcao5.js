// Função com RECURSIVIDADE - tema mais complexo.
// Ex. fatorial de n = n x (n-1)!
function fatorial (n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial (n-1) // Chama a própria chamada!
    }
}
console.log(fatorial(5))