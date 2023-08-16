
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() *10);

    setTimeout( 
        () => number > 5 
            ? resolve(number)
            : reject( new Error('menor a 5'))
    , 3000);
});

promise
    .then(number => console.log(number))
    .catch(error => console.log(error))
    .finally( () => {console.log('tarea finalizada')})