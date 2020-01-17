var padrao = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

function mascaraCPF(){
    var cpf = document.forms[0].elements[0].value;
    if (!padrao.test(cpf)){
        alert ('Entre os 11 numeros do CPF \nsem ponto e traços.')
    }else{
        document.forms[0].elements[0].value = cpf.replace(padrao, '$1.$2.$3-$4')
    }

}