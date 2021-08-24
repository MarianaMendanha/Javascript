let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

/*for (let i = 0; i < listaIncluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]) {
            // na pos j da lista, não excluir, incluir listaIncluir[i]
            lista.splice(j, 0, listaIncluir[i]);
            console.log(`${j} -> ${lista.length}`);
        }
        
    }
    
}*/

console.log(lista);

// spread
const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = ['a', 'b', 'c'];

// como arrumar isso (clone independente)
let arr2 = [...arr];
// let arr2 = arr;
arr2.push('d');

// alterações em arr2 refletem em arr :(
console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
