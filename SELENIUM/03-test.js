function bisiesto (numero) {

    if ((numero % 4 === 0 && numero % 100 !== 0) || ( numero % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(bisiesto, 'Este año es bisiesto', (2020));
console.log(bisiesto, 'Este año es no es bisiesto',(1900));
console.log(bisiesto, 'Este año es bisiesto',(2000));
console.log(bisiesto, 'Este año es no es bisiesto',(2021));