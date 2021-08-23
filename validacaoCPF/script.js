console.log('Javascript carregado');

function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        console.log(numeros);
        console.log(digitos);

        var soma = 0;
        for (let index = 10; index > 1; index--) {
            soma += numeros.charAt(10 - index) * index;
        }
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(resultado);

        // validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (let index = 11; index > 1; index--) {
            soma += numeros.charAt(11 - index) * index;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // validação do segundo dígito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação do CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}

console.log('Passou');