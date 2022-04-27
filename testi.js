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
let recipes = [
    { name: "Tunapasta", cookingTime: 30, ingredients: ['tuna', 'pasta', 'olive oil']
    },
    { name: "Sallad", cookingTime: 15, ingredients: ['lettuce', 'tomatoe', 'cucumber']
    },
    { name: "Berrybowl", cookingTime: 5, ingredients: ['berries', 'fruits', 'yoghurt']
    }    
];
let element = document.getElementById("printHereRecipes");
//looped the recipes through and printed out
let html = "<table><tr><th>Name</th><th>Cooking time</th><th>Ingredients</th></tr>";

recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>";
    html += "<td>" + recipe.cookingTime + "</td>";
    html += "<td>" + recipe.ingredients + "</td>";
    html += "</tr>";
});
html += "</table>";
element.innerHTML = html;


 //vaihtoehto miten tehään tuo taulukko; luo uusi table-elementti ja vaikkapa for silmukalla
 let table = document.createElement('table');
 //looppaa array läpi
 for (let i=0; i < recipes.length; i++) {
     //luo uusi tr-elementti
    let tr = document.createElement('tr');
    //joka kierroksella luodaan uusi td elementti
    let td = document.createElement('td');
    //laita reseptin nimi solulle
    td.innerHTML = recipes [i].name;
    //lisätään td sinne tr:lle
    tr.appendChild(td);
    //lisätään tr tablelle
    table.appendChild(tr);
}
//lisää table domiin
element.appendChild(table);


//fetch
fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById("printHereYesNo").innerHTML 
            //= JSON.stringify(data)
            ="<h2>" + data.answer + "</h2>";
            document.getElementById("printHereYesNo").innerHTML 
            //= JSON.stringify(data)
            +=' <img src= " ' + data.image + ' " /> '; 
            //huom, tässä käytetty tarkoituksella erilaiset hipsut ettei luule että tulee sulku liian aikaisin
    }
    );
fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(
        data => {
            //data haettu, käsittele
            //luo ul elementti
            let ul = document.createElement('ul');
            //looppaa array läpi
            data.forEach(quote => {
                //luo li-elementti
                let li = document.createElement('li');
                //aseta sisältö li-elementille
                li.innerHTML += quote.quote;//plus ja yhtäkuin tulee kaikki, pelkkä yhtäkuin antaa yhden
                //lisää li elementti ul elemenetille
                ul.appendChild(li);
            });
            document.getElementById("printHereQuote").appendChild(ul);
        });          
            
           
