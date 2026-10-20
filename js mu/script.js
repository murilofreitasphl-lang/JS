let peso = 64;
let altura = 1.65;



function calcularIMC(peso, altura) {
    Imc = peso / (altura * altura)
}

function classificarIMC (Imc) {
    if (Imc <= 18.5) {
        Classificacao = "Magro"
} 
    else if (Imc <= 24.9) {
        Classificacao = "Normal"
    }
    else if (Imc <= 29.9) {
        Classificacao = "Sobrepeso"
    }
    else if (Imc <= 34.9) {
        Classificacao = "Obesidade 1"
    }
    else if (Imc <= 39.9) {
        Classificacao = "Obesidade 2"
    }
    else if (Imc > 40 ) {
        Classificacao = "Obesidade 3"
    }
}

calcularIMC(peso,altura)
classificarIMC(Imc)
console.log(`Seu Imc é de ${Imc} , você está ${Classificacao}`)