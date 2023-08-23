// Preparar una pizza
function reunirIngredientes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ingredientes reunidos')
        }, 2000);
    });
}

function prepararMasa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('masa preparada')
        }, 1500);
    });
}

function agregarToppings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Topping agregados')
        }, 500);
    });
}

function hornearPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('pizza horneada')
        }, 2500);
    });
}

//Promesas

/* reunirIngredientes().then( ingredientes => {
    console.log(ingredientes);
    return prepararMasa()
}).then(masa => {
    console.log(masa);
    return agregarToppings()
}).then( toppings => {
    console.log(toppings);
    return hornearPizza()
}).then( pizzaHorneada => {
    console.log(pizzaHorneada);
    return hornearPizza()
}); */


// Async Await
/* async function preparaPizza() {
    const ingredientes = await reunirIngredientes();
    console.log('hacer pizza con azync await');
    console.log(ingredientes);

    const masa = await prepararMasa();
    console.log(masa);

    const toppings = await agregarToppings();
    console.log(toppings);

    const hornear = await hornearPizza();
    console.log(hornear);
};

preparaPizza() */

