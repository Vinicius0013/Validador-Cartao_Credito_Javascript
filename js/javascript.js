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

function inverterString(str) {
    if (!str) return '';
    var inverter = '';
    for (i = str.length - 1; i >= 0; i--) {
        inverter += str.charAt(i);
    }
    return inverter;
}

function numero_completo(prefixo, length) {
    var ccnumero = prefixo;

    while (ccnumero.length < (length - 1)) {
        ccnumero += Math.floor(Math.random() * 10);
    }

    var reversoCCnumeroString = strrv(ccnumero);

    var reversoCCnumero = new Array();
    for (var i = 0; i < reversoCCnumeroString.length; i++) {
        reversoCCnumero[i] = parseInt(reversoCCnumeroString.charAt(i));
    }

    var soma = 0;
    var posicao = 0;

    while (posicao < length - 1) {
        odd = reversoCCnumero[ posicao ] * 2;
        if (odd > 9) {
            odd -= 9;
        }

        soma += odd;

        if (posicao != (length - 2)) {
            soma += reversoCCnumero[posicao + 1];
        }
        posicao += 2;
    }

    var checkdigito = ((Math.floor(soma / 10) + 1) * 10 - soma) % 10;
    ccnumero += checkdigito;

    return ccnumero;
}

function numero_cartao_credito(prefixoList, length) {
    var randomArrayIndex = Math.floor(Math.random() * prefixoList.length);
    var ccnumero = prefixoList[randomArrayIndex];
    return numero_completo(ccnumero, length);
}

var visaPrefixList = new Array("4539", "4556", "4916", "4532", "4929", "40240071", "4485", "4716", "4");
var mastercardPrefixList = new Array("51", "52", "53", "54", "55", "222100", "272099");
var amexPrefixList = new Array("34", "37");
var discoverPrefixList = new Array("6011");
var dinersPrefixList = new Array("300", "301", "302", "303", "36", "38");
var enRoutePrefixList = new Array("2014", "2149");
var jcbPrefixList = new Array("3528", "3529", "3530", "3531", "3532", "3533", "3534", "3535", "3536", "3537", "3538", "3539", "3540", "3541", "3542", "3543", "3544", "3545", "3589");
var voyagerPrefixList = new Array("8699");
var dinersNorthAmericaPrefixList = new Array("54", "55");
var dinersCarteBlanchePrefixList = new Array("300", "301", "302", "303", "304", "305");
var dinersInternationalPrefixList = new Array("36");
var visaElectronPrefixList = new Array("4026", "417500", "4508", "4844", "4913", "4917");
var maestroPrefixList = new Array("5018", "5020", "5038", "5893", "6304", "6759", "6761", "6762", "6763", "0604");
var instaPaymentPrefixList = new Array("637", "638", "639");

$(document).ready(function () {

    // Worst code ever! Should use some type of array with names, iterator and eval... but I'm too lazy!
    $("#visa1").text(credit_card_number(visaPrefixList, 16, 1));
    $("#visa2").text(credit_card_number(visaPrefixList, 16, 1));
    $("#visa3").text(credit_card_number(visaPrefixList, 19, 1));
    $("#mc1").text(credit_card_number(mastercardPrefixList, 16, 1));
    $("#mc2").text(credit_card_number(mastercardPrefixList, 16, 1));
    $("#mc3").text(credit_card_number(mastercardPrefixList, 16, 1));
    $("#amex1").text(credit_card_number(amexPrefixList, 15, 1));
    $("#amex2").text(credit_card_number(amexPrefixList, 15, 1));
    $("#amex3").text(credit_card_number(amexPrefixList, 15, 1));
    $("#disc1").text(credit_card_number(discoverPrefixList, 16, 1));
    $("#disc2").text(credit_card_number(discoverPrefixList, 16, 1));
    $("#disc3").text(credit_card_number(discoverPrefixList, 19, 1));
    $("#jcb1").text(credit_card_number(jcbPrefixList, 16, 1));
    $("#jcb2").text(credit_card_number(jcbPrefixList, 16, 1));
    $("#jcb3").text(credit_card_number(jcbPrefixList, 19, 1));
    $("#dcna1").text(credit_card_number(dinersNorthAmericaPrefixList, 16, 1));
    $("#dcna2").text(credit_card_number(dinersNorthAmericaPrefixList, 16, 1));
    $("#dcna3").text(credit_card_number(dinersNorthAmericaPrefixList, 16, 1));
    $("#dccb1").text(credit_card_number(dinersCarteBlanchePrefixList, 14, 1));
    $("#dccb2").text(credit_card_number(dinersCarteBlanchePrefixList, 14, 1));
    $("#dccb3").text(credit_card_number(dinersCarteBlanchePrefixList, 14, 1));
    $("#dcin1").text(credit_card_number(dinersInternationalPrefixList, 14, 1));
    $("#dcin2").text(credit_card_number(dinersInternationalPrefixList, 14, 1));
    $("#dcin3").text(credit_card_number(dinersInternationalPrefixList, 14, 1));
    $("#elec1").text(credit_card_number(visaElectronPrefixList, 16, 1));
    $("#elec2").text(credit_card_number(visaElectronPrefixList, 16, 1));
    $("#elec3").text(credit_card_number(visaElectronPrefixList, 16, 1));
    $("#maes1").text(credit_card_number(maestroPrefixList, 16, 1));
    $("#maes2").text(credit_card_number(maestroPrefixList, 16, 1));
    $("#maes3").text(credit_card_number(maestroPrefixList, 16, 1));
    $("#ip1").text(credit_card_number(instaPaymentPrefixList, 16, 1));
    $("#ip2").text(credit_card_number(instaPaymentPrefixList, 16, 1));
    $("#ip3").text(credit_card_number(instaPaymentPrefixList, 16, 1));

});