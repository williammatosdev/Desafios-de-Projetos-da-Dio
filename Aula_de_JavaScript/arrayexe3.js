function filtrarPares(arr){
    return arr.filter(callback);
}

function callback(item){
  /*para chamar numeros impares usar !== */
    return item % 2 === 0;
}

const meuArray = [1,23,55,67,30,2,4]

console.log(filtrarPares(meuArray));