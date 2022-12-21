function dividir(n1, n2) {

    /* if (Number(n1) === 0 || Number(n2) === 0) {
        return 'No se puede dividir por cero';
    }
    return n1 / n2; */
    if (n1 === 0 || n2 === 0) {
        return 'No se puede dividir por cero';
    }
    return n1 / n2;
}

//console.log(dividir(25, 5));
//console.log(dividir(0, 5));
module.exports = dividir;