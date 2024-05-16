
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("tudo bem?",(resposta)=>{
    if(resposta =='sim'){
        console.log("Que bom, eu tambem estou bem!")
    }else{
        console.log("tudo pode piorar")
    }
    readline.close()
})