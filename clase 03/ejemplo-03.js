// simular una solicitud a un servidor para obtener datos del alumno


const userData = (userId) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const usersData = {
                1: {name: 'Salvador', age: 25},
                2: {name: 'Dolores', age: 30},
                3: {name: 'miguel', age: 40}
            }

            const userData = usersData[userId]

            if (userData) {
                resolve(userData); // si la promesa se cumple
            } else {
                reject(new Error('usuario no encontrado')) //si la promsessa lo rechaza
            }
        }, 1000);
    });
}

userData(5)
    .then((user) => {console.log(user)})
    .catch((error) => {console.log(error)}) 