let nome = 'Mari';
let sobrenome = 'M.';
let ocupacao = 'estudante';

// Sem template
console.log(
    'Meu nome é ' + nome +
    ' ' + sobrenome +
    ' minha ocupação é ' + 
    ocupacao
);

// Com template
console.log(`Meu nome é ${nome} ${sobrenome} minha ocupação é ${ocupacao}`);

console.log(`O resultado de 1+1 = ${1+1}`);

console.log(`O objeto json ${{chave: 'valor'}}`);

let meuObj = {
    chave: 'novo valor'
}