//Parte 1
console.log("PARTE 1 ----------------------")

let resposta1 = 5 > 20 && 5 < 2
console.log(resposta1)

let resposta2 = 5 === 5 || 5 === "5"
console.log(resposta2)

let resposta3 = !(20 > 50)
console.log(resposta3)

let resposta4 = !(20 > 50 || 50 > 60)
console.log(resposta4)


//Parte 2
console.log("PARTE 2 ----------------------")

//1  O salário fixo mais o auxílio creche
let salarioFixo = 2000
let auxCreche = 45.50 * 2
let salarioComCreche = salarioFixo + auxCreche
console.log("Salário mais aux. creche:", salarioComCreche)

//2 comissão em janeiro
let comissaoJaneiro = 5784.50 * 0.1
console.log("Comissão Janeio:", comissaoJaneiro)

//3 descontado em janeiro pelo INS
let descontoInssJaneiro = (salarioComCreche + comissaoJaneiro) * 0.05
console.log("Desconto INSS Janeiro:", descontoInssJaneiro)

//4 cálculo do salário de todos os meses com acréscimos e descontos.
// salário final de Janeiro = (salário fixo com aux creche + (comissao)) - (desconto do INNS considerando a comissao e auxilio)
let salarioJaneiro = (salarioComCreche + (5784.50 * 0.1)) - ((salarioComCreche + (5784.50 * 0.1)) * 0.05)
console.log("Salario Janeio:", salarioJaneiro)

let salarioFevereiro = (salarioComCreche + (3418.41 * 0.1)) - ((salarioComCreche + (3418.41 * 0.1)) * 0.05)
console.log("Salario Fevereiro:", salarioFevereiro)

let salarioMarco = (salarioComCreche + (4124.10 * 0.1)) - ((salarioComCreche + (4124.10 * 0.1)) * 0.05)
console.log("Salario Março", salarioMarco)

let salarioApril = (salarioComCreche + (1874.00 * 0.1)) - ((salarioComCreche + (1874.00 * 0.1)) * 0.05)
console.log("Salario Abril:", salarioApril)

let salarioMaio = (salarioComCreche + (7000.00 * 0.1)) - ((salarioComCreche + (7000.00 * 0.1)) * 0.05)
console.log("Salario Maio", salarioMaio)

let salarioJunho = (salarioComCreche + (9450.00 * 0.1)) - ((salarioComCreche + (9450.00 * 0.1)) * 0.05)
console.log("Salario Junho:", salarioJunho)


//5 A média do salário em seis meses levando em consideração as comissões e auxílio. 

let mediaSalario = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioApril + salarioJunho + salarioMaio) / 6
console.log("Media salario 6 meses:", mediaSalario)
