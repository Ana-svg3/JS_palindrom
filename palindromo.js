function palindromo(numero){
    let invertido = 0;
    let og = numero;

    while(numero > 0){
        let resultado = numero % 10;
        numero = (numero / 10) | 0;
        invertido = invertido * 10 + resultado;
    }

    if(invertido == og){
        return true;
    }else{
        return false;
    }
}

console.log(palindromo(123)); 
console.log(palindromo(777)); 