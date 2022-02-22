function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var pizza1 = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinada", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("Corteza napolitana", "salsa blanca", ["cheddar", "brie"], ["pimientos verdes", "carne de res"]);
console.log(pizza3);

var pizza4 = pizzaOven("estilo nueva york", "salsa BBQ", ["edam", "gouda"], ["aceitunas verdes", "cebollas rojas", "carne de cerdo"]);
console.log(pizza4);

function pizzaRandom(){
    Math.random(pizzaOven);
    return Math.random;
}
var randomPizza = pizzaRandom ;
console.log(randomPizza);