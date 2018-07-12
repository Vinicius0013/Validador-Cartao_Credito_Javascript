function Calculo(numero) {
    var soma = 0;
    for (i = 0; i < numero.length; i++) {
        soma += parseInt(numero.substring(i, i+1));
    }

    var valor = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (i = numero.length-1; i >= 0; i -= 2) {
        var valorIndex = parseInt(numero.substring(i, i + 1));
        var valorValue = valor[valorIndex];
        soma += valorValue;
    }

    var resultMod = soma % 10;
    resultMod = 10 - resultMod;

    if (resultMod == 10) {
        resultMod = 0;
    }

    return resultMod;
}

function Validacao(numero) {
    numero = numero.replace(/\s/g, '');
    var numeroDigitado = parseInt(numero.substring(numero.length - 1, numero.length));
    var numeroMenor = numero.substring(0, numero.length - 1);

    if (Calculo(numeroMenor) == parseInt(numeroDigitado)) {
        return true;
    }

    return false;
}

function validacaoCartaoCredito() {
    var cod = $("#numeroCartaoCredito").val();
    var resultado = Validacao(cod);
    $("#mostraNumeroDigitado").text(cod).show();
    $("#resultadoValidacao").text(resultado ? "O número informado é válido!" : "O número informado não é válido!").show();
}