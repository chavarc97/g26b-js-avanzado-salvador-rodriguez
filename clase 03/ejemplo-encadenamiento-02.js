const calculateOperation = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (typeof number !== 'number') {
                reject(new Error ('It´s not a number'))
            }else{
                const result = number * 5;
                resolve(result)
            }

        }, 2000);
    });
}

calculateOperation(10)
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})