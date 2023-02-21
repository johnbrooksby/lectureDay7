const person = {
    first: "John",
    last: "Brooksby",
    age: 41
}

// dot notation
console.log(person.first);

// bracket notation
console.log(person['last']);

const meal = {
    appertizer: "chips & salsa",
    entree: "carne asada burrito",
    dessert: "tres leches",
    drink: "horchata"
};

const meal2 = {
    appertizer: "ceviche",
    entree: "loaded nachos",
    dessert: "fried ice cream",
    drink: "cerveza"
};

let {dessert, appertizer, entree, drink} = meal;
//same as let dessert = meal.dessert

console.log (entree + " with " + drink);

let newFav = "Dr. Pepper";
meal.drink = newFav;

// Destructure and rename
const {drink: drink2, appetizer: app2, dessert: des2, entree: delicious} = meal2;

// loop over meal2 
// if the key is our dessert update the value to be churros and print to console
// else print the value

for(let key in meal2){
    if(key === "dessert"){
        meal2[key] = "churros"
        console.log(meal2[key]);
    } else {
        console.log(key);
    }
}


// add and delete arrays from an object
let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

teams.teamSix = ["John", "Michael", "Bob", "Sam"];

delete teams.teamFour;
console.log(teams);