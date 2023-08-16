/* realiza una funcion que retorne una promesa en la cual dado un numero este se eleve al cuadrado, si el numero es negativo manda el error */

const numberCalc = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (number > 0) {
                resolve(Math.pow(number, 2));
            } else {
                reject(new Error('Error, el numero es negativo'))
            }

        }, 5000);
    });
}

numberCalc(8)
    .then ((number) => {console.log(number)})
    .catch ((error) => {console.log(error)})