let num = [5,4,9,2]
num.push(1)  // Acrescenta mais um elemento do final com valor 1 
num.sort() // Põe o vetor em ordem crescente.
console.log(num) // Output do vetor
console.log(`O vetor tem ${num.length} posições`) // Output length
console.log(`O valor da posição 2 é ${num[2]}`) // Output de um elemento

// Uso de loop para output
console.log(`Uso do Loop `)
for (let pos=0;pos<num.length;pos++) {
    console.log(`O valor da posição ${pos} = ${num[pos]}`) 
}

// Uso de loop específico com for let in para output
// Notar como a sintaxe é mais simples
console.log(`Uso do Loop Específico`)
for (let pos in num) {
    console.log(`O valor da posição ${pos} = ${num[pos]}`) 
}

// Encontrar a posição de determinado valor no vetor
i = num.indexOf(5) // Qual posição está o valor 5?
console.log(`Na posição ${i} do vetor está o valor 5`)
j = num.indexOf(3) // Qual posição está o valor 3? Não existe
console.log(`Na posição ${j} do vetor está o valor 3`) // Retorna -1