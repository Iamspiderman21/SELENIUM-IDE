function sumN (n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

function sumaGauss(n) {
    return n * (n+1) / 2;
}

suma = sumN (100);
console.log('La suma de los primeros 100 naturales es:' + sumN(100));

suma = sumaGauss (100);
console.log('La suma de Gauss los primeros 100 naturales es:' + sumN(100));
