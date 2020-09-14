let amigo = {nome: 'Jose', // Notar a estrutura do objeto
sexo:'M', 
peso: 85,
engordar(p=0){   // atributo de peso p zerado
    console.log('engordou')
    this.peso += p  // Este comando this atribui ao elemento do objeto.

}}
amigo.engordar(2) //atributo de peso que chama a função. O peso aumenta para 87.
console.log(` ${amigo.nome} pesa ${amigo.peso} Kg.`)
