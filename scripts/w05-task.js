/* W05: Programming Tasks */
const templesElement = document.querySelector("#temples");

/* Declare and initialize global variables */

let templesList = [];
/* async displayTemples Function */

const displayTemples = (templesList) => {
   templesList.forEach((temples) => {
    let article = document.createElement("article");
    let templeNameTag = document.createElement("h3");
    templeNameTag.innerHTML = temples.templeName;

    const templeImage = document.createElement("img");
    templeImage.src = temples.imageUrl;
    templeImage.alt = temples.location;
    article.appendChild(templeNameTag);
    article.appendChild(templeImage);
    templesElement.appendChild(article); 
   });
};

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        templesList = await response.json();
        displayTemples(templesList);

    }
};
/* async getTemples Function using fetch()*/
/* reset Function */
let reset = (templesList) => {
    templesElement.innerHTML = "";
};
const sortBy = () => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(templesList.filter(temple => temple.location.includes("Utah")));          
            break;
        case "notutah":
            displayTemples(templesList.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templesList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(templesList);
            
    }

};


document.getElementById("sortBy").addEventListener("change", () => {sortBy(templesList)});
getTemples();
// console.log(templeList);
/* Event Listener */
/* sortBy Function */