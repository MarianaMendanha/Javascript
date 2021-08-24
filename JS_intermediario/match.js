// Escavando informação
const textoNaoEstruturado = "Meu CPF é 123.456.569-22";

// expressão regular -> 
// de 0-9 3 caracteres + '.' + 
// de 0-9 3 caracteres + '.' + 
// de 0-9 3 caracteres + '-' + 
// de 0-9 2 caracteres,
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));