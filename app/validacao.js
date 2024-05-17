function verificarChute(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>';
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div> Fale um numero entre ${menorValor} e ${maiorValor} </div>`;
        return
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>o número secreto era ${numeroSecreto}
        `
    }else if( numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }else{        
        elementoChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}