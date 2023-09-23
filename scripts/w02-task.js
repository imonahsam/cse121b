/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Samuel Imonah";
const currentYear = "2023";
const profilePicture = "images/myself.jpg";

/* Step 3 - Element Variables */



const nameElement = document.getElementById("name");
nameElement.innerHTML = `<strong>${fullName}</strong>`;



/* Step 4 - Adding Content */


/* Step 5 - Array */
const foodElement = document.getElementById("food");
let favoriteFoods = ["Pizza", "Spaghetti", "Ice Cream", "Beans", "Yam and Egg Sauce", "Chocolate"];
let food = [...favoriteFoods];
foodElement.textContent = food;

let newFood = "Spaghetti";
food.push(newFood);
foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food}`;

food.pop();
foodElement.innerHTML += `<br>${food}`;

const yearElement = document.getElementById("year");
yearElement.textContent = `${currentYear}`;

const imageElement = document.getElementsByTagName("img");
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);




//foodElement.innerHTML += `${favoriteFood}`
//foodElement.textContent = favoriteFoods.join(", ");
//foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

//const newFavoriteFood = "Rice";

//favoriteFoods.push(newFavoriteFood);

//foodElement.textContent = favoriteFoods.join(", ");

//const stylesheets = [...document.stylesheets];
//stylesheets.forEach(function(stylesheets, index) {
//    console.log("stylesheets ${index + 1} url: ${stylesheets.href}");
//});




