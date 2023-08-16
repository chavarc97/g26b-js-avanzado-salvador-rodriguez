function operacion01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('operacion 1 completa');
            resolve(2)
        }, 2000);
    })
}

function operacion02(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('operacion 2 completa');
            resolve(resultado + 1)
        }, 3000);
    })
}

function operacion03(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('operacion 3 completa');
            resolve(resultado * 3)
        }, 4000);
    })
}

operacion01().then(resultado1 =>{
    return operacion02(resultado1)
})
.then(resultado2 => {
    return operacion03(resultado2)
})
.then(resultadoFinal => {
    console.log('resultado final es: ', resultadoFinal);
})
.catch(error =>{
    console.error('error: ', error);
})