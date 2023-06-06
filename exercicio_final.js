const { obterNumero, obterInteiroPositivo, obterInteiro } = require('./util')

var prompt = require('prompt-sync')()
let nome0 = 0
let nome1 = 0
let nome2 = 0
let nome3 = 0
let nome4 = 0
let nome5 = 0
let nomeProduto0 = `Cachorro Quente`
let nomeProduto1 = `Bauru Simples`
let nomeProduto2 = `Bauru com ovo`
let nomeProduto3 = `Hamburguer`
let nomeProduto4 = `Cheeseburguer`
let nomeProduto5 = `Refrigerante`
let precoSolo0 = 0
let precoSolo1 = 0
let precoSolo2 = 0
let precoSolo3 = 0
let precoSolo4 = 0
let precoSolo5 = 0
let precoTotal = 0
let quant = 1
let quant0 = 0
let quant1 = 0
let quant2 = 0
let quant3 = 0
let quant4 = 0
let quant5 = 0
let codigo = Array(quant)
for(let j = 1; j <= codigo.length; j++){
    codigo[j] = obterNumero(`Digite o código do produto: `)
    if(codigo[j] == 999){
        break
    }
    else if(codigo[j] != 100 && codigo[j] != 101 && codigo[j] != 102 && codigo[j] != 103 && codigo[j] != 104 &&codigo[j] != 105){
        console.log(`*-*-*-Codigo Invalido-*-*-*`)    
    }
   

 if(codigo[j] == 100){
     quant0 += obterInteiroPositivo(`Quantidade de Cachorros Quentes: `)
    while(quant0%quant0 != 0){
        quant0 += obterInteiro(`Insira novamente a quantidade de Cachorros Quentes: `)
    }
    precoTotal += Number((1.2 * quant0))
    precoSolo0 += Number((1.2 * quant0))
    nome0 = true
    
}
else if(codigo[j] == 101){
     quant1 += obterInteiroPositivo(`Quantidade de Bauru Simples: `)
    while(quant1%quant1 != 0){
        quant1 += obterInteiro(`Insira novamente a quantidade de Bauru Simples: `)
    }
    precoTotal += Number((1.3 * quant1))
    precoSolo1 += Number((1.3* quant1))
    nome1 = true
}
else if(codigo[j] == 102){
     quant2 += obterInteiroPositivo(`Quantidade de Bauru como ovo: `)
    while(quant2%quant2 != 0){
        quant2 += obterInteiro(`Insira novamente a quantidade de Bauru com ovo: `)
    }
    precoTotal += Number((1.5 * quant2))
    precoSolo2 += Number((1.5* quant2))
    nome2 = true
}
else if(codigo[j] == 103){
     quant3 += obterInteiroPositivo(`Quantidade de Hambúrguer: `)
    while(quant3%quant3 != 0){
        quant3 += obterInteiro(`Insira novamente a quantidade de Hambúrguer: `)
    }
    precoTotal += Number((1.2 * quant3))
    precoSolo3 += Number((1.2* quant3))
    nome3 = true
}
else if(codigo[j] == 104){
    quant4 += obterInteiroPositivo(`Quantidade de Cheeseburguer: `)
    while(quant4%quant4 != 0){
        quant4 += obterInteiro(`Insira novamente a quantidade de Cheeseburguer: `)
    }
    precoTotal += Number((1.3 * quant4))
    precoSolo4 += Number((1.3* quant4))
    nome4 = true
}
else if(codigo[j] == 105){
     quant5 += obterInteiroPositivo(`Quantidade de Refrigerante: `)
    while(quant5%quant5 != 0){
        quant5 += obterInteiro(`Insira novamente a quantidade de Refrigerante: `)
    }
    precoTotal += Number((1 * quant5))
    precoSolo5 += Number((1 * quant5))
    nome5 = true
}
}
console.log(`----------SAÍDA----------`)
if(nome0){
console.log(`Cod: 100 / Nome do Produto: ${nomeProduto0} / Quantidade: ${quant0} / Preço: R$${precoSolo0.toFixed(1)}`)
}
if(nome1){
console.log(`Cod: 101 / Nome do Produto: ${nomeProduto1} / Quantidade: ${quant1} / Preço: R$${precoSolo1.toFixed(1)}`)
}
if(nome2){
console.log(`Cod: 102 / Nome do Produto: ${nomeProduto2} / Quantidade: ${quant2} / Preço: R$${precoSolo2.toFixed(1)}`)
}
if(nome3){
console.log(`Cod: 103 / Nome do Produto: ${nomeProduto3} / Quantidade: ${quant3} / Preço: R$${precoSolo3.toFixed(1)}`)
}
if(nome4){
console.log(`Cod: 104 / Nome do Produto: ${nomeProduto4} / Quantidade: ${quant4} / Preço: R$${precoSolo4.toFixed(1)}`)
}
if(nome5){
console.log(`Cod: 105/  Nome do Produto: ${nomeProduto5} / Quantidade: ${quant5}/ Preço: R$${precoSolo5.toFixed(1)}`)
}
console.log(`Preço final:`, precoTotal.toFixed(1))
