const promesa = new Promise((resolve, reject) => {
    //Nosotros vamos a crear una tarea asincrona
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('operacion completada de manera exitosa');
        } else{
            reject('error 404 Not Found')
        }
    }, 2000);
});

promesa.then (resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})