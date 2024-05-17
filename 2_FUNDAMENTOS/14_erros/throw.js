const x = 10

//checar se x é um numero

if(!Number.isInteger(x)){
    throw new Error("Não é um vlor inteiro!")
}

console.log("PAssou do THROW")