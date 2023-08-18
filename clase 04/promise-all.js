function prepararPizza(especialidad, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pizza preparada ${especialidad}`)
        }, tiempo);
    });
};

//arreglo de promesas
const ordenPizzas = [
    prepararPizza('Hawaiana', 2000),
    prepararPizza('peperoni', 3000),
    prepararPizza('3 quesos', 1000),
    prepararPizza('Napolitada', 5000),
];

//Con Promesas
/* Promise.all(ordenPizzas)
    .then(pizzas =>{
        console.log(pizzas);
    })
    .catch(error => console.log(error)) */

    async function mandarOrdenDePizzas() {
        try {
            const pizzasPreparadas = await Promise.all(ordenPizzas)
            pizzasPreparadas.map(pizza => console.log(pizza))
        } catch(error){
            console.log(error);
        }
    };

    mandarOrdenDePizzas()