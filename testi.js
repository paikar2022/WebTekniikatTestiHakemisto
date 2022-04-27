/* function to be added here*/

function test1 (tulosta){
    if (tulosta) {
        let printedText = "Testing";

        document.getElementById("printHere").innerHTML = printedText;

        return printedText;
    }
}
let returnedText = test1 (true); 
console.log(returnedText);

//cars -task

let car = {plateNumber: "OOP-001", currentSpeed: 120};

document.getElementById("printHereCars").innerHTML = 
"Car with plate number " + car.plateNumber + " is driving " + 
car.currentSpeed +" km/h.";

let car2 = {plateNumber: "SAA-002", currentSpeed: 80};

document.getElementById("printHereCars").innerHTML += //remember += so it won't write over the previous car
"<br>Car with plate number " + car2.plateNumber + " is driving " + 
car2.currentSpeed +" km/h.";


car2.currentSpeed = 100;//changed car2 speed

document.getElementById("printHereCars").innerHTML += //remember += so it won't write over the previous car
"<br>Car with plate number " + car2.plateNumber + " is driving " + 
car2.currentSpeed +" km/h."; //printed out with new speed

//recipe -tasks
//created array variable and included recipes there
//reseptiarrayssa itemit on olioita ja ingredients arrayssa itemit on strigejä
let recipe = [
    { name: "Tunapasta", cookingTime: 30, ingredients: ['tuna', 'pasta', 'olive oil']
    },
    { name: "Sallad", cookingTime: 15, ingredients: ['lettuce', 'tomatoe', 'cucumber']
    },
    { name: "Berrybowl", cookingTime: 5, ingredients: ['berries', 'fruits', 'yoghurt']
    }    
            ];
let element = document.getElementById("printHereRecipes");
//looped the receipes through and printed out

recipe.forEach(recipe => {
    element.innerHTML += recipe.name;
})

